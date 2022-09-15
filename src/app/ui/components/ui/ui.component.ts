import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

public open = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {

    console.log("Don't touch me like that. I'm a shy button >//<")


    // ! inverse la valeur.
    this.open = !this.open;


  }




}// rien écrire après
