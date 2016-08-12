import {Component} from "@angular/core";
import {AppState} from "../../shared/app-state.service";
import {YoutubeSafeUrlPipe} from "../../shared/youtube-safe-url.pipe";
import {Persona} from "../../shared/persona.service";
import {Oscar} from "../shared/oscar.model";

@Component({
  moduleId: module.id,
  selector: 'dl-video-detail',
  templateUrl: 'video-detail.component.html',
  styleUrls: ['video-detail.component.css'],
  pipes: [YoutubeSafeUrlPipe],
})
export class VideoDetailComponent {
  nombre:string;
  apellido:string;
  constructor(private appState: AppState, private persona:Persona) { //
   this.persona.personaActiva= new Oscar("Oscar","Murguia","32");

    if(persona!=undefined && persona.personaActiva!=undefined) {
      this.nombre = this.persona.personaActiva.nombre;
      this.apellido = this.persona.personaActiva.apellido;
    }
    // else
    // {
    //   this.nombre ="Oscassr";
    //   this.apellido ="Murguiass";
    //
    // }
  }


}
