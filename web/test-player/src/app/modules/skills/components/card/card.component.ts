import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() cardnum: number;
  @Input() selected: boolean;
  @Input() selectable: boolean;

  private color: string = '';

  constructor() { }
  ngOnInit() {
  }
}
