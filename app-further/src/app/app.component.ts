import { AfterViewInit, Component, ElementRef, ViewChild, } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{
  title = 'app-further Hola mundo';
  @ViewChild('info')
  info!: ElementRef;

  @ViewChild(ChildComponent)
  child!: ChildComponent;


  ngAfterViewInit() {
    console.log(this.info.nativeElement.innerHTML);
    this.info.nativeElement.innerHTML = "DOM updated succesfully!!!";
    console.log(this.child.whoAmI()); // I am a child component!
  }
}

