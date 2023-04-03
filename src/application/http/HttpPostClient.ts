export interface HttpPostClient {
  post(url: string, payload: any): Promise<any>;
}
