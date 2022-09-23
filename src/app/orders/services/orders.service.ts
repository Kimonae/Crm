import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http
      .get<Order[]>('http://localhost:4200/orders')
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj);
          });
        })
      );
  }

  get collection() {

    return this.collection$;
  }

  set collection(col) {

    this.collection$ = col;

  }
}
