export default interface TodoDto {
  taskName: string;
  id: string;
  taskDescription?: string;
  isComplete: boolean;
}
