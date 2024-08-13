export interface Task {
 id: number;
 title: string;
 desc: string;
}

export interface TaskColumn {
 id: number;
 title: string;
 tasks: Task[];
}
