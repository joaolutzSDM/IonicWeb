import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitasService } from '../receitas.service';
import { Receita } from '../receita.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-detalhe.page.html',
  styleUrls: ['./receita-detalhe.page.scss'],
})
export class ReceitaDetalhePage implements OnInit {
  receitaAtual: Receita;
  constructor(
      private rotaAtiva: ActivatedRoute,
      private receitasService: ReceitasService,
      private rotas: Router,
      private alertController: AlertController
    ) { }

  ngOnInit() {
    this.rotaAtiva.paramMap.subscribe(paramMap => {
        // Caso não seja o parametro esperado
        if (!paramMap.has('receitaId')) {
          this.rotas.navigate(['/receitas']);
          return;
        }
        const Id = paramMap.get('receitaId');
        this.receitaAtual = this.receitasService.getReceitaByid(Id);
        if (typeof this.receitaAtual.id === 'undefined' ){
          this.rotas.navigate(['/receitas']);
        }
        console.log(this.receitaAtual);
    });
  }
  deletarReceita(){
    this.alertController.create({
      header: 'Tem certeza?',
      message: 'Você realmente quer deletar essa receita?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: () => {
            this.receitasService.deletarReceitaById(this.receitaAtual.id);
            this.rotas.navigate(['/receitas']);
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });
  }
}
