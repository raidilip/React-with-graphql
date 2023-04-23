export interface Message {
  id: number | string;
  text: string;
  user: string;
  file?: File;
}
