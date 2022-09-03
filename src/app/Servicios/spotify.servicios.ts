//debemos exportar los servicios de angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Esta libreria es para llamar los api externos
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class VLAMusicServices {

  //api de spotify
  constructor(private http:HttpClient) {
    console.warn("Servicio Stotify funcionando")
  }

  ObtenerLista() {

    const headers = new HttpHeaders({

      'Authorization': 'Bearer BQASY4iTuT6fzz4Bw1VoBj_zaYbZmPH1mJsaBJpaHwNWFwVmhM53rkk92b4h1h5hXzUAH2fHph_ZxIlkszmbNN_oQinOW8LphISUxCVfa3jf30MmmgFDNFrsbzrmz6I6WO8nGYCH-2NyVL_glUSSrk_pmJqBmCdrVHaDSj6eysPvV-j-9i7Mi8V8WGOUrQbU_tw'

    })

    //  let api = 'https://api.spotify.com/v1/browse/new-releases?limit=20&offset=5'
     let api = 'https://api.spotify.com/v1/browse/new-releases'

     return this.http.get(api,{headers})
  }


  Busqueda(nombre: String) {

    const headers = new HttpHeaders({
    
      'Authorization': 'Bearer BQASY4iTuT6fzz4Bw1VoBj_zaYbZmPH1mJsaBJpaHwNWFwVmhM53rkk92b4h1h5hXzUAH2fHph_ZxIlkszmbNN_oQinOW8LphISUxCVfa3jf30MmmgFDNFrsbzrmz6I6WO8nGYCH-2NyVL_glUSSrk_pmJqBmCdrVHaDSj6eysPvV-j-9i7Mi8V8WGOUrQbU_tw'
  })

    let api = `https://api.spotify.com/v1/search?q=${nombre}&type=artist&limit=10`

    return this.http.get(api,{headers})

  }
}