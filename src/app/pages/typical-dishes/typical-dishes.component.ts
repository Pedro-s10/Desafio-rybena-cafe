import {Component} from '@angular/core';
import {ModalDetailsCoffeComponent} from "../../dialogs/modal-details-coffe/modal-details-coffe.component";
import {MatDialog} from "@angular/material/dialog";
import {ICardData} from "../../interfaces/ICardData";


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
      desc: 'Vamos começar com uma receitinha de mousse de café fácil e simples de ser feita. Você vai precisar de apenas três ingredientes: uma caixinha de creme de leite, uma de leite condensado e, é claro, café coado (250 ml).Coloque tudo em um liquidificador ou mixer, e bata até ficar homogêneo. Em seguida, coloque na geladeira ou freezer até formar uma consistência cremosa.',
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
      desc: 'Em um recipiente, triture de forma manual os biscoitos cream cracker, adicione o mix de granola, a cobertura Esquimó Caramelo e a Pasta Chocolat Caramelo Salgado. Misture bem. Pegue uma forma ou bandeja, forre com papel-manteiga e sobre ela coloque a mistura do crocante. Leve ao freezer para congelar, por aproximadamente 1 hora. Depois, quebre grosseiramente e reserve.',
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
      desc: 'Tempere o filé-mignon com sal e pimenta. Em seguida, em uma panela, adicione o azeite, deixe aquecer e coloque a carne. Deixe dourar de todos os lados até ficar “torradinho” por fora. Tire o filé da panela e reserve. Na mesma panela, adicione o café coado, o chocolate, o vinho tinto e o creme de leite. Mexa até perceber que o sabor da carne que estava no fundo da panela juntou-se ao molho. Deixe ferver até engrossa. Em uma assadeira, coloque a carne, um pouco de molho por cima e leve ao forno médio por 10 minutos para cozinhar um pouco mais por dentro.Tire do forno, passe a carne para um prato, corte em fatias e coloque o molho que restou por cima. Sirva com saladas de sua preferência.',
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
      desc: 'Dissolva a gelatina em água quente em um bowl pequeno.Coloque a gelatina, o café e o adoçante em uma panela. Leve para ferver em fogo alto. Distribua em quatro taças. Leve para gelar até firmar por cerca de seis horas.',
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
