import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() inputFromParent : string;

@Output() outputFromChild : EventEmitter<string> = new EventEmitter();
outputText : string = "Hi ... message from child";

@Output() outputFromChildB : EventEmitter<boolean> = new EventEmitter();

@Input() inputFromParentb : boolean;

valor: boolean = false;
constructor() { }

  ngOnInit() {
    console.log("in child from parent" , this.inputFromParent);
  }

  sendDataToParent() {
    this.outputFromChild.emit(this.outputText);
/*     this.valor == true ? this.valor = false : this.valor = true;
    this.outputFromChildB.emit(this.valor);
 */
    this.inputFromParentb == true ? this.inputFromParentb = false : this.inputFromParentb = true;
    this.outputFromChildB.emit(this.inputFromParentb);
  }

}
