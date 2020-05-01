import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilmeDetalhePage } from './filme-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FilmeDetalhePage]
})
export class FilmeDetalhePageModule {}
