import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent {

  cidades: any[] = []
  uf: string = "";


  constructor(private http: HttpClient){

  }

  enviar(){
    this.http.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.uf}/municipios`).subscribe((data: any) => {
      this.cidades = data;
    });
  }



}
