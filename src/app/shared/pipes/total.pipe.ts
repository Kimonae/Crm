import { Pipe, PipeTransform } from '@angular/core';


//décorateur ♥
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: number, coef: number, tva ?: number){
    console.log(value, coef) //value correspond à la valeur passée au pipe total
        // {{tjmHt | total :valeur2 :valeur3 }}


        if(tva) {

          return value * coef *(1 + tva/100)

          }
          return value * coef;
  }

}
