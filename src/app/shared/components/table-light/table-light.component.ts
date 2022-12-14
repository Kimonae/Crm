import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  @Input() collection !: any;
  @Input() headers !: string[];
  @Input() clients !: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {

    console.log(this.collection, 'test');
    console.log(this.clients);
  }
}
