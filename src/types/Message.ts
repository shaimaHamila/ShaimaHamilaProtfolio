export type Message = {
  _id?: number;
  fullName: string;
  email: string;
  message: string;
  createdAt?: Date;
  isDeleted?: Boolean;
};
