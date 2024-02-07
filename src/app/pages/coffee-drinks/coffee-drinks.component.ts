import { Component } from '@angular/core';


export interface ICardData {
  pathImage: string
  matTooltip: string
  alt: string
  title: string
  openModal: Function
}

@Component({
  selector: 'app-coffee-drinks',
  templateUrl: './coffee-drinks.component.html',
  styleUrls: ['./coffee-drinks.component.css']
})
export class CoffeeDrinksComponent {
  cards: ICardData[] = [
    {
      alt: 'Cappuccino',
      matTooltip: 'Cappuccino',
      title: 'Cappuccino',
      pathImage: 'https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-CAPPUCCINO-BANANA-SESAME-SEEDS.jpg',
      openModal: ()=>{

      }
    },

    {
      alt: 'Espresso Martini',
      matTooltip: 'Espresso Martini',
      title: 'Espresso Martini',
      pathImage: 'https://claudia.abril.com.br/wp-content/uploads/2022/03/Espresso-Martini.jpg',
      openModal: ()=>{

      }
    },

    {
      alt: 'Latte Macchiato',
      matTooltip: 'Latte Macchiato',
      title: 'Latte Macchiato',
      pathImage: 'https://uniquecafes.com.br/wp-content/uploads/2021/08/Destaque-Latte-Macchiato.jpg',
      openModal: ()=>{

      }
    },

    {
      alt: 'Flat White',
      matTooltip: 'Flat White',
      title: 'Flat White',
      pathImage: 'https://methodicalcoffee.com/cdn/shop/articles/Flat_white_sitting_on_a_table_1024x.jpg?v=1695740372',
      openModal: ()=>{

      }
    },

  ]
}
