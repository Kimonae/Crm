import { StateOrder } from "../enum/state-order";

export class Order {

  tjmtHt = 200;
  nbJours = 1;
  tva =20;
  state = StateOrder.OPTION;
  typePresta!: string; //ne pas l'initialiser au démarrage
  client !: string;
  comment!: string;
  id !: number;
  totalHT(): number { //ajout méthodes directement les méthodes pour le pipe

return this.tjmtHt * this.nbJours;
  }

totalTTC(): number {

  return this.tjmtHt * this.nbJours * (1 + this.tva/100);

    }


  constructor(obj ?: Partial<Order>) {

if(obj) {

        // Object.assign(objet Cible, obj Source )
      // Object.assign(objet initial, nouvel Objet )

Object.assign(this, obj)

}

  }
}
