import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enum/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private urlApi = environment.urlApi;
  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj);
          });
        })
      );
  }

  get collection(): Observable<Order[]> {

    return this.collection$;
  }

  set collection(col : Observable<Order[]>) {

    this.collection$ = col;

  }
  changeState(item: Order, state: StateOrder){
   // console.log(item, state, 'depuis la méthode changeState');
    const obj = new Order(item);
    //console.log(obj);
    obj.state = state;
    // console.log(obj, "obj 2");

    this.update(item);

    return this.update(obj);
  }

  update(obj: Order) {

   // console.log(obj, 'depuis update');

    return this.http.put(`${this.urlApi}/orders/${obj.id}`, obj)
  }

  add(item : Order): Observable<Order> {

    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  getItemById(id: number): Observable<Order>{
    // this.http.get('url/id')
   return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
}
