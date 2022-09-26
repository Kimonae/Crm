import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateClients } from 'src/app/core/enum/state-clients';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private urlApi = environment.urlApi;
  private collection$!: Observable<Client[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http
      .get<Client[]>(`${this.urlApi}/clients`)
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Client(obj);
          });
        })
      );
  }

  get collection(): Observable<Client[]> {

    return this.collection$;
  }

  set collection(col : Observable<Client[]>) {

    this.collection$ = col;

  }
  changeState(item: Client, state: StateClients){
    console.log(item, state, 'depuis la méthode changeState');
    const obj = new Client(item);
    console.log(obj);
    obj.state = state;
    console.log(obj, "obj 2");

    this.update(item);

    return this.update(obj);
  }

  update(obj: Client) {

    console.log(obj, 'depuis update');

    return this.http.put(`${this.urlApi}/clients/${obj.id}`, obj)
  }
}
