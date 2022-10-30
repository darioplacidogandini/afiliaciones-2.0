import { Component, OnInit } from '@angular/core';
import { Afiliado } from 'src/app/model/afiliado.model';
import { AfiliadosService } from 'src/app/servicios/afiliados.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  afiliado: Afiliado[];

  constructor(private afiliadosService:AfiliadosService) {}

  ngOnInit(): void {
    this.listarAfiliados();
  }

  listarAfiliados() {
    this.afiliadosService.listar().subscribe(
      data => this.afiliado = data);
  }
}
