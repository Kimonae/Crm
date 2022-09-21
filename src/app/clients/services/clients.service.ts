import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private collection$!: Observable<Client[]>;

  constructor(private http: HttpClient) {

    this.collection = this.http.get<Client[]>('http://localhost:4200/clients')
   }

  get collection() {

    return this.collection$;
  }

  set collection(col) {

    this.collection$ = col;

  }
}
