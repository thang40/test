import { IBaseSystemModel } from "./baseSystem.model";

export interface IActionModel extends IBaseSystemModel {
  type: string;
  payload: any;
}
