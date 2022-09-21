
import { StateClients } from "../enum/state-clients";

export class Client {


  state = StateClients.ACTIVE;
  tva =20;
  totalCaHT = 200;
  name !: string;
  comment!: string;
  id !: number;




  constructor(obj ?: Partial<Client>) {

if(obj) {


Object.assign(this, obj)

}

  }
}
