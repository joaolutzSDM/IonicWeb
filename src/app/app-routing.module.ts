import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'receitas',
    children: [
      {
        path: '',
        loadChildren: './receitas/receitas.module#ReceitasPageModule',
      },
      {
        path: ':receitaId',
        loadChildren: './receitas/receita-detalhe/receita-detalhe.module#ReceitaDetalhePageModule'
      }
    ]
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'filmes', loadChildren: './filmes/filmes.module#FilmesPageModule' },
  { path: 'filme-detalhe/:id', loadChildren: './filmes/filme-detalhe/filme-detalhe.module#FilmeDetalhePageModule' },
  { path: 'fipe', loadChildren: './fipe/fipe.module#FipePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


