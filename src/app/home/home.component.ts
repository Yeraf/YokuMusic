import { Component, OnInit } from '@angular/core';
import { VLAMusicServices } from '../Servicios/spotify.servicios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  public page!: number;

  Artistas: any[] = [];
  constructor(private _Service:VLAMusicServices) { 

  }

  ngOnInit(): void {
    this._Service.ObtenerLista()
    .subscribe((data:any) => 
      // console.log(data.albums.items)

      this.Artistas = data.albums.items
    )
  }
}









