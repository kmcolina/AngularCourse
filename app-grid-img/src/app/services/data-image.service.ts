import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataImageService {

  constructor() { }

  nombrUsuario: string = "sin nombre";
  url: string = "sin url aun";
}
