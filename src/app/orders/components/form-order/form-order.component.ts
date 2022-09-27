import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enum/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  public states = Object.values(StateOrder);

  public form!: FormGroup; //donner nom au formulaire, type formgroup

  @Output() submitted = new EventEmitter<Order>()
  @Input() init!: Order;
  constructor(    private fb: FormBuilder
    ) {

   }

  ngOnInit(): void {

    //console.log(this.init, 'Init');
    this.form = this.fb.group({

      tjmHt : [this.init.tjmtHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [this.init.client, Validators.required], //requis sinon invalide
      comment: [this.init.comment],

    })
  }

  ngOnChanges(): void {

    //console.log(this.init);
  }

  public onSubmit() {

    //console.log(this.form.value, "valide");


    if(this.form.status === "VALID") {
      this.submitted.emit(this.form.value);

      }else {

        alert(" ! WARNING, you can't add this order.")
      }
  }

}
