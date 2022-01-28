import { Component, OnInit } from '@angular/core';
import { DataImageService } from 'src/app/services/data-image.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  loaded: boolean =false;
  nombreNav: string = "nombrenavbvar";
  constructor(public dataImagen: DataImageService) { }

  ngOnInit(): void {
  }
  loadMyChildComponent(){
    this.loaded=true;
   }


}
