import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FondoheaderComponent } from './componentes/fondoheader/fondoheader.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HsSkillsComponent } from './componentes/hs-skills/hs-skills.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FondoheaderComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    HsSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

