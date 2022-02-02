import { Injectable } from '@angular/core';
import { State, StateToken } from '@ngxs/store';
import { DateTimeString } from 'src/app/common/date-time';
import { Uuid } from 'src/app/common/uuid';
import { AsyncData } from '../common/async-data';

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
export class TournamentState {}
