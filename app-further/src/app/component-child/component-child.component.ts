import { Component, OnInit } from '@angular/core';
import { MathOperationsService } from '../math-operations.service';

@Component({
  selector: 'app-component-child',
  templateUrl: './component-child.component.html',
  styleUrls: ['./component-child.component.css']
})
export class ComponentChildComponent implements OnInit {

  constructor(public math:MathOperationsService) { }

  ngOnInit(): void {
    console.log(this.math.sum(10,10));
    console.log(this.math.resta(10,5));
  }

}
