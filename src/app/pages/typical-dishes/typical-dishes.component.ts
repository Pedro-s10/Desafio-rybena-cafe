import {Component} from '@angular/core';
import {ModalDetailsCoffeComponent} from "../../dialogs/modal-details-coffe/modal-details-coffe.component";
import {MatDialog} from "@angular/material/dialog";

export interface ICardData {
  pathImage: string
  matTooltip: string
  alt: string
  title: string
  desc: string
  openModal: Function
}

@Component({
  selector: 'app-typical-dishes',
  templateUrl: './typical-dishes.component.html',
  styleUrls: ['./typical-dishes.component.css']
})
export class TypicalDishesComponent {
constructor(
  public dialog: MatDialog
) {
}
  cards: ICardData[] = [
    {
      alt: 'Mousse de café',
      matTooltip: 'Mousse de café',
      title: 'Mousse de café',
      desc: 'Aqui vai a desc',
      pathImage: 'https://reservagourmet.files.wordpress.com/2014/10/recipe2069_mouskafe.jpg?w=604',
      openModal: (res: ICardData) => {
        this.dialog.open(ModalDetailsCoffeComponent, {
          data: {
            ...res
          },
          panelClass: 'custom-dialog-container',
          width: "40rem",
          height: "30rem",
        })
      }
    },

    {
      alt: 'Gelato de café',
      matTooltip: 'Gelato de café',
      title: 'Gelato de café',
      desc: 'Aqui vai a desc',
      pathImage: 'https://f.i.uol.com.br/guia/bares/images/15294750.jpeg',
      openModal: (res: ICardData) => {
        this.dialog.open(ModalDetailsCoffeComponent, {
          data: {
            ...res
          },
          panelClass: 'custom-dialog-container',
          width: "40rem",
          height: "30rem",
        })
      }
    },

    {
      alt: 'Filé ao molho de café',
      matTooltip: 'Filé ao molho de café',
      title: 'Filé ao molho de café',
      desc: 'Aqui vai a desc',
      pathImage: 'https://www.boqnews.com/wp-content/uploads/2021/08/receita_de_fil_mignon_ao_molho_madeira_2020-06-09.jpeg',
      openModal: (res: ICardData) => {
        this.dialog.open(ModalDetailsCoffeComponent, {
          data: {
            ...res
          },
          panelClass: 'custom-dialog-container',
          width: "40rem",
          height: "30rem",
        })
      }
    },

    {
      alt: 'Gelatina de café',
      matTooltip: 'Gelatina de café',
      title: 'Gelatina de café',
      desc: 'Aqui vai a desc',
      pathImage: 'https://gelialgas.com.br/wp-content/uploads/2020/06/3a.jpg',
      openModal: (res: ICardData) => {
        this.dialog.open(ModalDetailsCoffeComponent, {
          data: {
            ...res
          },
          panelClass: 'custom-dialog-container',
          width: "40rem",
          height: "30rem",
        })
      }
    },

  ]
}
