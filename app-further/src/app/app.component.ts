import { AfterViewInit, Component, ElementRef, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{
  title = 'app-further Hola mundo';
  @ViewChild('info')
  info!: ElementRef;

  ngAfterViewInit() {
    console.log(this.info.nativeElement.innerHTML);
    this.info.nativeElement.innerHTML = "DOM updated succesfully!!!";
  }
}

