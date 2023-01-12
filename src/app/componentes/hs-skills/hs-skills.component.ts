import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/hys';
import { SkillService } from 'src/app/service/hys.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hs-skills',
  templateUrl: './hs-skills.component.html',
  styleUrls: ['./hs-skills.component.css']
})
export class HsSkillsComponent implements OnInit {
  skill:  Skill[] = [];

  constructor(private hysS: SkillService, private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.hysS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.hysS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}