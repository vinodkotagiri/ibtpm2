export interface Task{
    id: string;
    name: string;
    start: string;
    end: string;
    duration?: string;
    cost?: string;
    dependencies: string[];
    color?: string;
    subTasks?: Task[]
}