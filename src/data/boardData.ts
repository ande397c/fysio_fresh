import { type Task } from "@/types/Task";
import {type TaskColumn} from "@/types/TaskColumn"

export const tasks: Task[] = [
 {
  id: 1,
  title: "Set up project",
  desc: "Initialize the project repository and set up initial configurations",
 },
 {
  id: 2,
  title: "Design the layout",
  desc: "Create wireframes and design the UI layout",
 },
 {
  id: 3,
  title: "Develop authentication",
  desc: "Implement login and registration features using JWT",
 },
 {
  id: 4,
  title: "Build dashboard",
  desc: "Develop the main dashboard interface for users",
 },
 {
  id: 5,
  title: "Test components",
  desc: "Write unit and integration tests for all components",
 },
];

export const boardData: TaskColumn[] = [
 {
  id: 1,
  title: "To Do",
  tasks: [tasks[0], tasks[1]],
 },
 {
  id: 2,
  title: "In Progress",
  tasks: [tasks[2]],
 },
 {
  id: 3,
  title: "Done",
  tasks: [tasks[3], tasks[4]],
 },
];
