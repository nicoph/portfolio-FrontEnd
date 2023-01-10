import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FondoheaderComponent } from './componentes/fondoheader/fondoheader.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HsSkillsComponent } from './componentes/hs-skills/hs-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExpereinciaComponent } from './componentes/experiencia/new-expereincia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FondoheaderComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    HsSkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExpereinciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    AppRoutingModule,
    NgCircleProgressModule.forRoot(),
    HttpClientModule
    
  ],
  providers: [
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

