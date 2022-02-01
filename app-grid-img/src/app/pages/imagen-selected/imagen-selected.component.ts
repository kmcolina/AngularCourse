import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen-selected',
  templateUrl: './imagen-selected.component.html',
  styleUrls: ['./imagen-selected.component.css']
})
export class ImagenSelectedComponent implements OnInit {



  @Input() nombreHijo: string = 'no hay nombre default imagen';
  @Input() loaded: boolean =false;
  @Input() urlHijo: string = 'no hay url';

   Valid: boolean =false;
inputvalid : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }



  iteminputvalid(){
    this.Valid == false ? this.Valid=true : this.Valid=false;

  }





}
