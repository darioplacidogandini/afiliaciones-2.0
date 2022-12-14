import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebcamModule } from 'ngx-webcam';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormAfiliacionComponent } from '../app/componentes/form-afiliacion/form-afiliacion.component';
import { TerminosComponent } from './componentes/terminos/terminos.component';
import { FormAfiliacionDniComponent } from './componentes/form-afiliacion-dni/form-afiliacion-dni.component';
import { FormAfiliacionContactoComponent } from './componentes/form-afiliacion-contacto/form-afiliacion-contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaAfiliadosComponent } from './componentes/lista-afiliados/lista-afiliados.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAfiliacionComponent,
    TerminosComponent,
    FormAfiliacionDniComponent,
    FormAfiliacionContactoComponent,
    InicioComponent,
    ListaAfiliadosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: '',component:InicioComponent},
        {path: 'terminos',component:TerminosComponent},
        {path: 'paso-1',component:FormAfiliacionComponent},
        {path: 'paso-2',component:FormAfiliacionDniComponent},
        {path: 'paso-3',component:FormAfiliacionContactoComponent},
        {path: 'login',component:LoginComponent},
        {path: 'lista',component:ListaAfiliadosComponent},
        {path: '',redirectTo: '', pathMatch:'full'},
      ]),
    WebcamModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
