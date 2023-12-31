export interface IResponseRequestVacation {
  id: number;
  applicationDate?: string;
  daysRequested?: number;
  initialDate?: string;
  withdrawalDate?: string;
  daysFavor?: number;
  stateVacationId?: number;
  requestNumber?: number;
  userVerifyId?: number;
  approved?: boolean;
}
