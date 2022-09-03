import { Component, OnInit } from '@angular/core';
import { VLAMusicServices } from '../Servicios/spotify.servicios';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

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
