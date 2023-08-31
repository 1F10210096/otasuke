import type { TaskId, UserId } from './branded';

export type UserModel = {
  id: UserId;
  email: string;
  displayName: string | undefined;
  photoURL: string | undefined;
};

export type TaskModel = {
  id: TaskId;
  label: string;
  done: boolean;
  created: number;
};

export type MessageModel = {
  id: string;
  roomId: string;
  sender_Id: number;
  content: string;
  sent_at: number;
};

export type RoomModel = {
  roomId: string;
  created: number;
  charaName: string;
};

export type MessageCustomModel = {
  id: string;
  roomId: string;
  sender_Id: number;
  content: string;
  sent_at: number;
};

export type SendForm = {
  id: string;
  senderName: string;
  content: string;
  sent_at: number;
};
