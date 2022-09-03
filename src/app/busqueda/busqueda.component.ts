import { Component, OnInit } from '@angular/core';
import { VLAMusicServices } from '../Servicios/spotify.servicios';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

export class BusquedaComponent implements OnInit {

  Artista:any[]=[]
  constructor(private _busqueda:VLAMusicServices) { }

  ngOnInit(): void {
  }

  buscar(nombre:string) {
    this._busqueda.Busqueda(nombre)
    .subscribe((Data:any)=>{
      console.log(Data);
      this.Artista = Data.artists.items
    })
    console.log(nombre)
  }
}
