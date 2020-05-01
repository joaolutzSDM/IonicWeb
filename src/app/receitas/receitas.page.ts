import { Component, OnInit } from '@angular/core';
import { Receita } from './receita.model';
import { ReceitasService } from './receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {
  receitas: Receita[];

  constructor(private receitasService: ReceitasService) { }

  ngOnInit() {
    this.receitas = this.receitasService.getAllReceitas();
  }

  ionViewWillEnter() {
    this.receitas = this.receitasService.getAllReceitas();
  }

}
