import { Component, OnInit } from '@angular/core';
import { FipeService } from './fipe.service';

@Component({
  selector: 'app-fipe',
  templateUrl: './fipe.page.html',
  styleUrls: ['./fipe.page.scss'],
})
export class FipePage implements OnInit {

  public resultado: any;

  constructor(private fipeService: FipeService) { }

  ngOnInit() {
    this.resultado = this.fipeService.consultaMarcas();
    console.log(this.resultado.source);
  }

}
