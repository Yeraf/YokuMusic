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
        // 'Authorization':'Bearer BQD6V3mwjpa8BStuYuptmjVARMIYecmuCx7WINcOb00Iw_RyJuB1QAsNpKq4qWXC_fUuDdORlK-NMn4nRJH2KfCb9FvMVq_bH475Zv1b5cYk-9dK9vk'

        // 'Authorization': 'Bearer BQAnXEbVPnejyWqQhppGJKuE0THRQ7P1wiTFvBC4AGKimstZs-kGH3vACFITKr0pJynDeXAzQbOV-B1W42l0EUz8xxgsFEmWu1K0MsoYme5MlwIgVmKtE7ZfZQtCOwSUgcTs4z3lcCx4D3cx0uT7n-CV5G_Uq1ExhTSKti2YJyiRDUx561CZeV1QwgXbG_Vgml8'

      'Authorization': 'Bearer BQCTotzmWEz8RvWQw319sgiCTiG1crnA4tNZBJORLSazoQKjjFAfsmQmcm34iFKyyvqTHi328HCPUBvDLehefCmSxJFX1dMuPPCvYn_E9P-j6h7HSP7Rm_5VbliRIGSgduLvf7-YJJZn0JilJRn8XuDb9BtgLFH59zEb9KHJkvpl9R6Q-mhhpHKeEBkEar9vPy8'

    })

    //  let api = 'https://api.spotify.com/v1/browse/new-releases?limit=20&offset=5'
     let api = 'https://api.spotify.com/v1/browse/new-releases'

     return this.http.get(api,{headers})
  }
}