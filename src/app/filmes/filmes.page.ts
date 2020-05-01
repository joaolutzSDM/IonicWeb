import { Component, OnInit } from '@angular/core';
import { FilmeService } from './filme.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {

  public resultado: any;
  public termoDeBusca: string;

  constructor(private filmesService: FilmeService) { }

  ngOnInit() {
    this.filmesService.consultaFilmes('Star Wars');
    this.resultado = this.filmesService.consultaFilmesAssincrona('Star Wars');
    console.log(this.resultado);
  }
  // Vai ser chamada no "onChange" da view
  consultaFilmesAssincrona() {
    this.resultado = this.filmesService.consultaFilmesAssincrona(this.termoDeBusca);
    console.log(this.resultado);
  }
}

