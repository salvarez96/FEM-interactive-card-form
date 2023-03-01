export interface CardInputModel {
  formTitle: string;
  labelId: string;
  placeHolder: string;
  type?: 'text' | 'tel';
  maxLength?: number;
  pattern?: string;
}
