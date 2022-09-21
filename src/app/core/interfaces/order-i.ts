import { StateOrder } from "../enum/state-order";

export interface OrderI {

  tjmHt : number;
  nbJours: number;
  tva : number;
  state : StateOrder;
  typePresta : string;
  client : string;
  id: number;
}
