import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/hys';
import { SkillService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {
  nombre : string;
  porcentaje:number;
  constructor(private hysS:SkillService, private router:Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const hys = new Skill(this.nombre, this.porcentaje);
    this.hysS.save(hys).subscribe(data=>
      {alert("Skill creada");
      this.router.navigate([""]);
      })

  }
}
