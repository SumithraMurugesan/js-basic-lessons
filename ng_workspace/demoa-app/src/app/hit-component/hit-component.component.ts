import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hit-component',
  templateUrl: './hit-component.component.html',
  styleUrls: ['./hit-component.component.css']
})
export class HitComponentComponent implements OnInit {
  @Input()
  label: number = 0;
  @Output()
  hit = new EventEmitter();
  constructor() { }



  ngOnInit(): void {
  }
  btnClickHandler() {
    this.hit.emit(this.label);
  }

}
