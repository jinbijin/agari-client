import { Uuid } from 'src/app/common/uuid';

function actionType(description: string) {
  return `[Tournament store] ${description}`;
}

export class Read {
  static readonly type = actionType('Read');
}

export class Create {
  static readonly type = actionType('Create');
  constructor(public readonly tournamentName: string) {}
}

export class Update {
  static readonly type = actionType('Update');
  constructor(public readonly publicKey: Uuid, public readonly tournamentName: string) {}
}

export class Delete {
  static readonly type = actionType('Delete');
  constructor(public readonly publicKey: Uuid) {}
}
