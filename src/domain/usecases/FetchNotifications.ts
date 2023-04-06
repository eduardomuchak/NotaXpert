import { Notification } from 'domain/entities/Notification';

export interface FetchNotifications {
  execute(): Promise<Notification[]>;
}
