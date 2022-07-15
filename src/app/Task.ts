export interface Task {
  _id: string;
  text: string;
  dateCreated: Date;
  dateDue: Date | null;
  dateClosed: Date | null;
  category: string | null;
  reminder: boolean;
  isCompleted: boolean;
}
