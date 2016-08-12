import {Injectable} from "@angular/core";
import{Oscar} from"../videos/shared/oscar.model";


@Injectable()
export class Persona{
  personaLista: Oscar[] = [];
  personaActiva:Oscar;
  constructor() {
  }

}
