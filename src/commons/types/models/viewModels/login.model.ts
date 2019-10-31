import { BaseViewModel } from "./baseView.model";

export interface ILoginModel extends BaseViewModel {
  username: string;
  password: string;
}
