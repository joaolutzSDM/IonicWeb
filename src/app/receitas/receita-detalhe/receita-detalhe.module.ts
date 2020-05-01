import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceitaDetalhePage } from './receita-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceitaDetalhePage]
})
export class ReceitaDetalhePageModule {}
