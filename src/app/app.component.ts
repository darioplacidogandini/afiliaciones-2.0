import { Component } from '@angular/core';
import estadosCiviles from '../assets/estados-civiles.json';
import departamentos from '../assets/departamentos.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afiliaciones-2.0';

  estadosCiviles = estadosCiviles;
  departamentos = departamentos;
}
