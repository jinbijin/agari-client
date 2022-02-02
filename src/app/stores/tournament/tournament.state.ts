import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, State, StateContext, StateToken } from '@ngxs/store';
import { catchError, EMPTY, map, tap } from 'rxjs';
import { DateTimeString } from 'src/app/common/date-time';
import { Uuid } from 'src/app/common/uuid';
import { StorageService } from 'src/app/core/data/storage.service';
import { AsyncData } from '../common/async-data';
import { Load } from './tournament.actions';

export interface Tournament {
  publicKey: Uuid;
  adminKey: Uuid;
  name: string;
  dateModified: DateTimeString;
  dateCreated: DateTimeString;
}

export type TournamentStateModel = AsyncData<AsyncData<Tournament>[]> | undefined;

export const TOURNAMENT_STATE_TOKEN: StateToken<TournamentStateModel> = new StateToken<TournamentStateModel>(
  'tournament'
);

@State<TournamentStateModel>({ name: TOURNAMENT_STATE_TOKEN })
@Injectable()
export class TournamentState implements NgxsOnInit {
  constructor(private readonly storageService: StorageService) {}

  ngxsOnInit(ctx: StateContext<any>) {
    ctx.dispatch(new Load());
  }

  @Action(Load)
  load(ctx: StateContext<TournamentStateModel>) {
    ctx.patchState({ status: 'BUSY' });
    return this.storageService.getAll<Tournament>('tournaments').pipe(
      map((tournaments) =>
        tournaments.map<AsyncData<Tournament>>((tournament) => ({ status: 'DONE', value: tournament }))
      ),
      tap((tournaments) => ctx.patchState({ status: 'DONE', value: tournaments })),
      catchError((err) => {
        console.error(err);
        ctx.patchState({ status: 'FAILED', errorMessage: 'Error occurred while loading tournaments.' });
        return EMPTY;
      })
    );
  }
}
