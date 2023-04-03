export namespace Notification {
  export interface CardContent {
    id: string;
    title: string;
    isUrgent: boolean;
    type: string;
    date: string;
  }
}

export class Notification {
  public id: string;
  public title: string;
  public isUrgent: Notification.CardContent["isUrgent"];
  public type: Notification.CardContent["type"];
  public date: Notification.CardContent["date"];

  constructor(props: Notification.CardContent) {
    Object.assign(this, props);
  }
}
