import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FipeService {
  URL = 'http://fipeapi.appspot.com/api/1/carros/marcas.json';

  constructor(private http: HttpClient) { }

  // Chamada sincrona
  // consultaFilmes(titulo: string) {
  //   this.http.get<any>(`
  //       ${this.URL}?s=${encodeURI(titulo)}&apikey=${this.chaveAPI}
  //     `).subscribe(dados => {

  //       console.log(`${this.URL}?s=${encodeURI(titulo)}&apikey=${this.chaveAPI}`);
  //       console.log(dados);
  //   });
  // }

  // Chamada assincrona
  consultaMarcas(): Observable<any> {
     return this.http.get(this.URL);  //.pipe(
      
    //   map(results => results['Search'])
    //);
  }

}
