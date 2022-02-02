import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputText: string = 'Hi...have a nice day - message from parent';
  inputbol:boolean = false;

  valorbol: boolean = false;

  @Output() outputFromChildB : EventEmitter<boolean> = new EventEmitter();


  receiveChildData(data){
  console.log("en father from chikld " , data);

  }

  receiveChildData2(data){
    console.log("en father from chikld boolean" , data);
this.valorbol = data;
    }


    sendDataToParent() {
  /*     this.valor == true ? this.valor = false : this.valor = true;
      this.outputFromChildB.emit(this.valor);
   */
      this.valorbol == true ? this.valorbol = false : this.valorbol = true;
      this.outputFromChildB.emit(this.valorbol);
    }
}
