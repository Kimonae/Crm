import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {

    console.log("Don't look me like that. I'm a shy button >//<")

  }

}// rien écrire après
