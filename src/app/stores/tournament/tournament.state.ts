import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, State, StateContext, StateToken } from '@ngxs/store';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
import { catchError, EMPTY, map, tap } from 'rxjs';
import { toDateTimeString } from 'src/app/common/date-time';
import { createUuid, Uuid } from 'src/app/common/uuid';
import {
  Tournament,
  TOURNAMENTS_OBJECT_STORE_TOKEN,
} from 'src/app/core/data/object-stores/tournaments.object-store';
import { StorageService } from 'src/app/core/data/storage.service';
import { AsyncData } from '../common/async-data';
import { Create, Delete, Read, Update } from './tournament.actions';

export type TournamentStateModel = AsyncData<AsyncData<Tournament>[]> | undefined;

export const TOURNAMENT_STATE_TOKEN: StateToken<TournamentStateModel> = new StateToken<TournamentStateModel>(
  'tournament'
);

@State<TournamentStateModel>({ name: TOURNAMENT_STATE_TOKEN })
@Injectable()
export class TournamentState implements NgxsOnInit {
  constructor(private readonly storageService: StorageService) {}

  static matchTournamentPredicate(publicKey: Uuid): (asyncTournament?: AsyncData<Tournament>) => boolean {
    return (asyncTournament) => asyncTournament?.value?.publicKey === publicKey;
  }

  ngxsOnInit(ctx: StateContext<any>) {
    ctx.dispatch(new Read());
  }

  @Action(Read)
  read(ctx: StateContext<TournamentStateModel>) {
    ctx.patchState({ status: 'BUSY', loadingMessage: 'Reading tournaments...' });
    return this.storageService.getAll(TOURNAMENTS_OBJECT_STORE_TOKEN).pipe(
      map((tournaments) =>
        tournaments.map<AsyncData<Tournament>>((tournament) => ({ status: 'DONE', value: tournament }))
      ),
      tap((tournaments) => ctx.setState({ status: 'DONE', value: tournaments })),
      catchError((err) => {
        console.error(err);
        ctx.patchState({
          status: 'FAILED',
          loadingMessage: undefined,
          errorMessage: 'Error occurred while loading tournaments.',
        });
        return EMPTY;
      })
    );
  }

  @Action(Create)
  create(ctx: StateContext<TournamentStateModel>, { tournamentName }: Create) {
    const tournament: Tournament = {
      publicKey: createUuid(),
      name: tournamentName,
      dateCreated: toDateTimeString(new Date()),
      dateModified: toDateTimeString(new Date()),
    };
    return this.storageService.add(TOURNAMENTS_OBJECT_STORE_TOKEN, tournament).pipe(
      tap(() =>
        ctx.setState(
          patch<TournamentStateModel>({
            value: append<AsyncData<Tournament>>([{ status: 'DONE', value: tournament }]),
          })
        )
      )
    );
  }

  @Action(Update)
  update(ctx: StateContext<TournamentStateModel>, { publicKey, tournamentName }: Update) {
    const existing = ctx.getState()?.value?.find(TournamentState.matchTournamentPredicate(publicKey))?.value!;
    const tournament: Tournament = {
      ...existing,
      name: tournamentName,
      dateModified: toDateTimeString(new Date()),
    };

    ctx.setState(
      patch<TournamentStateModel>({
        value: updateItem<AsyncData<Tournament>>(
          TournamentState.matchTournamentPredicate(publicKey),
          patch({ status: 'BUSY', loadingMessage: 'Updating tournament...' })
        ),
      })
    );
    return this.storageService.put(TOURNAMENTS_OBJECT_STORE_TOKEN, tournament).pipe(
      tap(() =>
        ctx.setState(
          patch<TournamentStateModel>({
            value: updateItem<AsyncData<Tournament>>(TournamentState.matchTournamentPredicate(publicKey), {
              status: 'DONE',
              value: tournament,
            }),
          })
        )
      ),
      catchError((err) => {
        console.error(err);
        ctx.setState(
          patch<TournamentStateModel>({
            value: updateItem<AsyncData<Tournament>>(TournamentState.matchTournamentPredicate(publicKey), {
              status: 'FAILED',
              value: tournament,
              loadingMessage: undefined,
              errorMessage: 'Error occurred while updating tournament.',
            }),
          })
        );
        return EMPTY;
      })
    );
  }

  @Action(Delete)
  delete(ctx: StateContext<TournamentStateModel>, { publicKey }: Delete) {
    ctx.setState(
      patch<TournamentStateModel>({
        value: updateItem<AsyncData<Tournament>>(
          TournamentState.matchTournamentPredicate(publicKey),
          patch({ status: 'BUSY', loadingMessage: 'Deleting tournament...' })
        ),
      })
    );
    return this.storageService.delete(TOURNAMENTS_OBJECT_STORE_TOKEN, publicKey).pipe(
      tap(() =>
        ctx.setState(
          patch<TournamentStateModel>({
            value: removeItem<AsyncData<Tournament>>(TournamentState.matchTournamentPredicate(publicKey)),
          })
        )
      )
    );
  }
}
