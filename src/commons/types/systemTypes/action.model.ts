import { IBaseSystemModel } from "./baseSystem.type";

export interface IActionModel extends IBaseSystemModel {
  type: string;
  payload: any;
}
