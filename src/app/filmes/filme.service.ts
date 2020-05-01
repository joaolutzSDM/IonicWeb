import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  URL = 'http://www.omdbapi.com/';
  chaveAPI = '76417329';

  constructor(private http: HttpClient) { }

  // Chamada sincrona
  consultaFilmes(titulo: string) {
    this.http.get<any>(`
        ${this.URL}?s=${encodeURI(titulo)}&apikey=${this.chaveAPI}
      `).subscribe(dados => {

        console.log(`${this.URL}?s=${encodeURI(titulo)}&apikey=${this.chaveAPI}`);
        console.log(dados);
    });
  }

  // Chamada assincrona
  consultaFilmesAssincrona(titulo: string): Observable<any> {
    return this.http.get(`${this.URL}?s=${encodeURI(titulo)}&apikey=${this.chaveAPI}`).pipe(
      map(results => results['Search'])
    );
  }

  // Essa chamda é sincrona. Só vamos chamar para exibir o detalhe do filme
  getFilmeById(id) {
    return this.http.get(`${this.URL}?i=${id}&plot=full&apikey=${this.chaveAPI}`);
  }

}

