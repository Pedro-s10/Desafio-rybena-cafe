import {Component, Injectable, Input, Output} from '@angular/core';
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
  selector: 'app-about-coffe',
  templateUrl: './about-coffe.component.html',
  styleUrls: ['./about-coffe.component.css']
})

export class AboutCoffeComponent {
  teste: any
  cards: ICardData[] = [
    {
      alt: 'Café Arábica',
      matTooltip: 'Café Arábica',
      title: 'Café Arábica',
      desc: 'O café arábica (Coffea arábica) é uma espécie originária da Etiópia e foi uma das primeiras espécies de café a ser produzida. Atualmente, a espécie é cultivada no mundo todo. No Brasil, a sua produção está mais concentrada em Minas Gerais, São Paulo, Paraná e Bahia. Já o Espírito Santo, embora também produza em menor quantidade, segue acompanhando Rondônia em uma produção maior de café robusta. A espécie arábica é mais sensível e, portanto, mais sujeita a pragas e intempéries. Além disso, os pés de café se desenvolvem melhor em altitudes superiores a 800 m, em temperaturas amenas e condições consideradas ideais para a produção de cafés de qualidade superior. Por isso, resultam em grãos de café de maior valor de mercado.',
      pathImage: 'https://www.graogourmet.com/wp-content/uploads/2022/02/Capas-blog-cafe-arabica.jpg',
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
      alt: 'Café Bourbon',
      matTooltip: 'Café Bourbon',
      title: 'Café Bourbon',
      desc: 'A origem do café Bourbon começa em um lugar paradisíaco no leste de Madagascar, mais especificamente na Ilha de Bourbon (hoje, chamada de Ilha de Reunião). O cultivo dessa variedade prosperou bastante na região, que mais tarde deu o nome a esse tipo de grão.No Brasil, o café Bourbon só chegou em 1859, quando o país já era referência na cafeicultura, mas buscava inovar a sua capacidade produtiva. Atualmente, a variedade é altamente cultivado no país, em especial na região cafeeira do Cerrado Mineiro, em Minas Gerais.',
      pathImage: 'https://www.graogourmet.com/wp-content/uploads/2016/02/bourbon-amarelo-oficial.jpg',
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
      alt: 'Café Kona',
      matTooltip: 'Café Kona',
      title: 'Café Kona',
      desc: 'Café Hawaiian Kona, junto com o indonésio Kopi Luwak e o Jamaica Blue Mountain, é um dos tipos de café mais caros e exclusivos do mundo. O café Kona é caracterizado por um aroma encorpado que remonta às suas condições especiais de produção. Explicaremos as características especiais do café Kona para você.Os grãos de café foram levados para o Havaí no século 18 por um jardineiro que chegou a Oahu de navio com o oficial britânico Lord Byron. Ele havia comprado as plantas no Brasil. Infelizmente, suas tentativas de cultivo não tiveram sucesso, mas ele abriu caminho para as primeiras plantações na área de Honolulu. Mais tarde, missionários britânicos levaram mudas de café e outras safras para as ilhas de Hilo, Kauai, Maui e Ilha Grande.',
      pathImage: 'https://img.freepik.com/fotos-premium/graos-de-cafe-havaianos-kona-red-na-arvore-que-cresce-na-plantacao-em-kauai_539233-5338.jpg',
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
      alt: 'Café Geisha',
      matTooltip: 'Café Geisha',
      title: 'Café Geisha',
      desc: 'Coffea arabica, originário da Etiópia, aportou há pouco no Panamá, onde começou a ganhar fama. Foi apenas em 2004, quando a produção bateu recordes em provas e em leilões, que ganhou notoriedade entre especialistas e público mundo afora.',
      pathImage: 'https://dailycoffeenews.com/wp-content/uploads/2017/11/Geisha-Cherries-01-Chispita-Costa-Rica.jpg',
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

  constructor(
    public dialog: MatDialog
  ) {
    this.teste = this.cards.push()
  }

  ngOnInit() {

  }

}
