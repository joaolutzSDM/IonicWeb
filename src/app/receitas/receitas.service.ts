import { Injectable } from '@angular/core';
import { Receita } from './receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {
  private receitas: Receita [] = [
    {
      id: '1',
      titulo: 'Feijoada',
      imagemUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Feijoada_01.jpg',
      ingredientes: ['Feijão', 'Paio', 'Carne de porco'],
    },
    {
      id: '2',
      titulo: 'Tapioca',
      imagemUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Tapioca_do_Alto_da_S%C3%A9_-_Olinda-PE.jpg',
      ingredientes: ['Goma', 'leite condensado', 'Coco ralado'],
    },
  ];


  constructor() { }
  // Retorna uma cópia do array. Se mudar esse retorno não altera o original
  getAllReceitas() {
    return [...this.receitas];
  }

  getReceitaByid(id: string) {
    return {
        ...this.receitas.find(
        receita => {
          return receita.id === id;
        }
      )
    };
  }

  deletarReceitaById(receitaId: string) {
    // Filter é um função nativa do JS
    console.log(receitaId);
    console.log(this.receitas);
    this.receitas = this.receitas.filter(receita => {
      return receita.id !== receitaId;
    });
    console.log(this.receitas);
  }
}

