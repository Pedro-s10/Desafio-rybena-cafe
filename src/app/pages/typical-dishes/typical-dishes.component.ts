import {Component} from '@angular/core';

export interface ICardData {
  pathImage: string
  matTooltip: string
  alt: string
  title: string
}

@Component({
  selector: 'app-typical-dishes',
  templateUrl: './typical-dishes.component.html',
  styleUrls: ['./typical-dishes.component.css']
})
export class TypicalDishesComponent {

  cards: ICardData[] = [
    {
      alt: 'Mousse de café',
      matTooltip: 'Mousse de café',
      title: 'Mousse de café',
      pathImage: 'https://reservagourmet.files.wordpress.com/2014/10/recipe2069_mouskafe.jpg?w=604'
    },

    {
      alt: 'Gelato de café',
      matTooltip: 'Gelato de café',
      title: 'Gelato de café',
      pathImage: 'https://f.i.uol.com.br/guia/bares/images/15294750.jpeg'
    },

    {
      alt: 'Filé ao molho de café',
      matTooltip: 'Filé ao molho de café',
      title: 'Filé ao molho de café',
      pathImage: 'https://www.boqnews.com/wp-content/uploads/2021/08/receita_de_fil_mignon_ao_molho_madeira_2020-06-09.jpeg'
    },

    {
      alt: 'Gelatina de café',
      matTooltip: 'Gelatina de café',
      title: 'Gelatina de café',
      pathImage: 'https://gelialgas.com.br/wp-content/uploads/2020/06/3a.jpg'
    },

  ]
}
