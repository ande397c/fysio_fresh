import { type Task } from "./Task";

export interface TaskColumn {
 id: number;
 title: string;
 tasks: Task[];
}
