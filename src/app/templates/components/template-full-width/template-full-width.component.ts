import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit {

  //public title: string = 'Liste des commandes '
  @Input() title!: string;

  constructor() {



   }

  ngOnInit(): void {
  }

}
