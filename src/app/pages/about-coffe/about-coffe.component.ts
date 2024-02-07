import { Component } from '@angular/core';

export interface ICardData {
  pathImage: string
  matTooltip: string
  alt: string
  title: string
  openModal: Function
}

@Component({
  selector: 'app-about-coffe',
  templateUrl: './about-coffe.component.html',
  styleUrls: ['./about-coffe.component.css']
})
export class AboutCoffeComponent {
  cards: ICardData[] = [
    {
      alt: 'Café Arábica',
      matTooltip: 'Café Arábica',
      title: 'Café Arábica',
      pathImage: 'https://www.graogourmet.com/wp-content/uploads/2022/02/Capas-blog-cafe-arabica.jpg',
      openModal: ()=>{

      }
    },

    {
      alt: 'Café Bourbon',
      matTooltip: 'Café Bourbon',
      title: 'Café Bourbon',
      pathImage: 'https://www.graogourmet.com/wp-content/uploads/2016/02/bourbon-amarelo-oficial.jpg',
      openModal: ()=>{

      }
    },

    {
      alt: 'Café Kona',
      matTooltip: 'Café Kona',
      title: 'Café Kona',
      pathImage: 'https://img.freepik.com/fotos-premium/graos-de-cafe-havaianos-kona-red-na-arvore-que-cresce-na-plantacao-em-kauai_539233-5338.jpg',
      openModal: ()=>{

      }
    },

    {
      alt: 'Café Geisha',
      matTooltip: 'Café Geisha',
      title: 'Café Geisha',
      pathImage: 'https://dailycoffeenews.com/wp-content/uploads/2017/11/Geisha-Cherries-01-Chispita-Costa-Rica.jpg',
      openModal: ()=>{

      }
    },

  ]
}
