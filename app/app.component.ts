import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputText: string = 'Hi...have a nice day - message from parent';
  inputbol:boolean = false;

  valorbol: boolean = false;

  receiveChildData(data){
  console.log("en father from chikld " , data);

  }

  receiveChildData2(data){
    console.log("en father from chikld boolean" , data);
this.valorbol = data;
    }
}
