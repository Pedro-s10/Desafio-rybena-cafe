import {Component, Inject, Input, Output} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface IModalData {
  title: string
  desc: string
}
@Component({
  selector: 'app-modal-details-coffe',
  templateUrl: './modal-details-coffe.component.html',
  styleUrls: ['./modal-details-coffe.component.css']
})
export class ModalDetailsCoffeComponent {
  data!: IModalData
  constructor(
    @Inject(MAT_DIALOG_DATA) public res: any,
  ) {

  }

  ngOnInit() {
    // recebe os dados do meu component about-coffe, poreḿ so vou utilizar o desc e title
      this.data = this.res
  }
}
