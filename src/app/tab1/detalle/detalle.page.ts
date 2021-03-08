import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsumogitService } from 'src/app/service/consumogit.service';
import { Pastel } from 'src/app/service/pastel';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  pasteles:Pastel[]=[]
  pastel:Pastel[]=[]
dato:any

  constructor(private routeA:ActivatedRoute, private serviceGit: ConsumogitService) { }

  ngOnInit() {
    this.routeA.paramMap.subscribe(r=>{
      console.log(r.get('id'))
      this.dato=r.get('id')
    })
    this.obtenerPatel()
  }

  obtenerPatel(){
    this.serviceGit.getPasteles().subscribe(r=>{
this.pasteles=r
this.pastel.push(this.pasteles[this.dato-1])
  console.log(this.pastel);
  })

}




}
