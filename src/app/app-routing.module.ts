import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { EditAboutComponent } from './componentes/about/edit-about.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExpereinciaComponent } from './componentes/experiencia/new-expereincia.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditHysComponent } from './componentes/hs-skills/edit-hys.component';
import { NewHysComponent } from './componentes/hs-skills/new-hys.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExpereinciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'editedu/:id', component: EditeducacionComponent},
  {path:'nuevahys', component: NewHysComponent},
  {path:'edithys/:id', component: EditHysComponent},
  {path:'about', component: AboutComponent},
  {path:'editabout/:id', component: EditAboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

