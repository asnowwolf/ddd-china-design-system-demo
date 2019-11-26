import { Status } from './status';

export class Project {
  name: string;
  description: string;
  taskCount: number;
  completionRate: number;
  memberCount: number;
  status: Status;
}
