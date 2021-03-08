import { Component } from '@angular/core';
import { ConsumogitService } from '../service/consumogit.service';
import { Pastel } from '../service/pastel';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pasteles:Pastel[]= [];

  constructor(private servc: ConsumogitService) {
    this.obtenerPasteles();
  }
  ngOninit():void{
    this.obtenerPasteles();
  }

  //metodo para leer los pasteles
  obtenerPasteles(){
    this.servc.getPasteles().subscribe(r=>{
      console.log(r)
      this.pasteles=r
    })
  }

}
