import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathOperationsService {

  constructor() { }

  sum(a:number,b:number){
    return a+b;
  }
  resta(a:number,b:number){
    return a-b;
  }

}
