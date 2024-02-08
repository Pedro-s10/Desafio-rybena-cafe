import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalDetailsCoffeComponent} from "../../dialogs/modal-details-coffe/modal-details-coffe.component";
import {ICardData} from "../../interfaces/ICardData";


@Component({
  selector: 'app-coffee-drinks',
  templateUrl: './coffee-drinks.component.html',
  styleUrls: ['./coffee-drinks.component.css']
})
export class CoffeeDrinksComponent {

  constructor(public dialog: MatDialog) {
  }

  cards: ICardData[] = [
    {
      alt: 'Cappuccino',
      matTooltip: 'Cappuccino',
      title: 'Cappuccino',
      desc: 'Cappuccino, do italiano, é uma bebida italiana preparada com café expresso e leite. Um cappuccino clássico, muito famoso no Brasil, consiste em um terço de café expresso, um terço de leite vaporizado e um terço de espuma de leite vaporizado. Variações populares do cappuccino como o café latte e o macchiato consistem basicamente na alteração destas proporções. O uso de chocolate em pó no cappuccino é uma prática comum no Brasil, mas não faz parte da receita tradicional.',
      pathImage: 'https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-CAPPUCCINO-BANANA-SESAME-SEEDS.jpg',
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
      alt: 'Espresso Martini',
      matTooltip: 'Espresso Martini',
      title: 'Espresso Martini',
      desc: 'A história do Wine Espresso Martini remonta aos anos 80 em Londres, quando a bartender Dick Bradsell criou a receita original deste coquetel. Contudo, sua versão tradicional leva vodka, licor de café e um shot de espresso.',
      pathImage: 'https://claudia.abril.com.br/wp-content/uploads/2022/03/Espresso-Martini.jpg',
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
      alt: 'Latte Macchiato',
      matTooltip: 'Latte Macchiato',
      title: 'Latte Macchiato',
      desc: 'bebida é conhecida nas cafeterias por Latte Macchiato. Isso porque a composição da bebida é o inverso do tradicional Macchiato, que significa “manchar o café com o leite”, visto que no Latte Macchiato “mancha-se o leite com o café” em proporções diferentes.',
      pathImage: 'https://uniquecafes.com.br/wp-content/uploads/2021/08/Destaque-Latte-Macchiato.jpg',
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
      alt: 'Flat White',
      matTooltip: 'Flat White',
      title: 'Flat White',
      desc: 'Um flat white é uma mistura de leite com microespuma derramado sobre uma dose única ou dupla de expresso.',
      pathImage: 'https://methodicalcoffee.com/cdn/shop/articles/Flat_white_sitting_on_a_table_1024x.jpg?v=1695740372',
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
