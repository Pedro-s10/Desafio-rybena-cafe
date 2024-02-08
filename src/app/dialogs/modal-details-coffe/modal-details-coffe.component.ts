import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {IModalData} from "../../interfaces/IModalData";


@Component({
  selector: 'app-modal-details-coffe',
  templateUrl: './modal-details-coffe.component.html',
  styleUrls: ['./modal-details-coffe.component.css']
})
export class ModalDetailsCoffeComponent {
  data!: IModalData
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public res: any,
  ) {

  }

  ngOnInit() {
      this.data = this.res
  }

}
