export const ACTION_STATUSES = ['BUSY', 'DONE', 'FAILED'] as const;

export type ActionStatus = typeof ACTION_STATUSES[number];
