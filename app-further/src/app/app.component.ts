import { AfterViewInit, Component, ElementRef, ViewChild, } from '@angular/core';
import { ChildComponent } from './child.component';
import { SharkDirective } from './shark.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{

  //pipe
  title = 'app-further Hola mundo';

  //explicacion de viewchild https://www.digitalocean.com/community/tutorials/angular-viewchild-access-component-es

  //view child change dom
  @ViewChild('info')
  info!: ElementRef;

  //viewchild use secundary component
  @ViewChild(ChildComponent)
  child!: ChildComponent;

  //view child use directive

  extraCreature!: string;

  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective) {
    this.extraCreature = directive.creature;
  };


  //routing child nesting



  ngAfterViewInit() {
    console.log(this.info.nativeElement.innerHTML);
    this.info.nativeElement.innerHTML = "DOM updated succesfully!!!";
    console.log(this.child.whoAmI()); // I am a child component!
    console.log(this.extraCreature);
  }
}

