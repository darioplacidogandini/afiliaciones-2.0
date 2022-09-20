import { Component, OnInit } from '@angular/core';
import estadosCiviles from '../../../assets/estados-civiles.json';
import departamentos from '../../../assets/departamentos.json';

@Component({
  selector: 'app-form-afiliacion',
  templateUrl: './form-afiliacion.component.html',
  styleUrls: ['./form-afiliacion.component.css']
})
export class FormAfiliacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  estadosCiviles = estadosCiviles;
  departamentos = departamentos;
}
