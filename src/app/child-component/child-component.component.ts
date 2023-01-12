import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  @Input() name = '';
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(newItem: string){
    console.log(newItem);
    this.newItemEvent.emit(newItem);
  }

  ngOnInit(): void {
  }

}
