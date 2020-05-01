import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.page.html',
  styleUrls: ['./filme-detalhe.page.scss'],
})
export class FilmeDetalhePage implements OnInit {

  detalhes = null;
  actors = null;
  constructor(private activatedRoute: ActivatedRoute, private filmeService: FilmeService) { }

  ngOnInit() {
    // pega o id da rota
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // busca na API os dados do id
    this.filmeService.getFilmeById(id).subscribe(result => {
      this.detalhes = result;
      //recupera os atores do filme como um array usando a função split de String
      this.actors = this.detalhes.Actors.split(", ");
      console.log(this.detalhes);
      console.log(this.actors);
    });
  }

  excluirItem(item) {
    this.actors = this.actors.filter(function(a) {
      return a != item;
    });
    console.log(item + ' removido com sucesso!');
  }

  abrirLinkExterno() {
    // window.open é nativo do JS
    window.open(this.detalhes.Website, '_blank');
  }

}
