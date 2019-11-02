import { BaseViewType } from "./baseView.type";

export interface IRegisterType extends BaseViewType {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}
