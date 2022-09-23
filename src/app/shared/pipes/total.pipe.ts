import { Pipe, PipeTransform } from '@angular/core';


//décorateur ♥
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {


  //transform(value: any, tva ?: number){
  transform(value: any, tva?: boolean){
    console.log(value, 'item') //value correspond à la valeur passée au pipe total
        // {{tjmHt | total :valeur2 :valeur3 }}


       /* if(tva) {

          return value * coef *(1 + tva/100)

          }
          return value * coef;*/

          if(tva) {

          return value.totalTTC();

          } return value.totalHT();

  }

}
