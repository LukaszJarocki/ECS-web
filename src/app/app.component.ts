import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecs';

  images: any = [
    {
      imageSrc:
      '../../../assets/photos/Klon zwyczajny - wysokość do 30 m 3.png',
      imageAlt:
      'nnnnn',
      titlePhoto:
      'Strategie biznesowe',
      titleInfo:
      'Nasi specjaliści zadbają o Twoją markę onLine Ty skup się na biznesie.',
      linkInfo:
      'https://drive.google.com/drive/folders/1FShzjnJLm9QO_HcOnjkj74rCxgnKyU90',
      titleText:
      'Prowadzimy kompleksową i  stałą obsługę marketingową dla firm z segmentu MŚP. Sprawdź nasze specjalizacje.',
      titleTextLink:
      'Czytaj więcej',
      imageIcon:
      '../../../assets/icon/right-arrow-2.png'
    },
    {
      imageSrc:
      '../../../assets/photos/Rectangle 57 (1).png',
      imageAlt:
      'iiii',
      titlePhoto:
      'Digital marketing',
      titleInfo:
      'Nasi specjaliści zadbają o Twoją markę onLine Ty skup się na biznesie.',
      linkInfo:
      'https://drive.google.com/drive/folders/1FShzjnJLm9QO_HcOnjkj74rCxgnKyU90',
      titleText:
      'Prowadzimy kompleksową i  stałą obsługę marketingową dla firm z segmentu MŚP. Sprawdź nasze specjalizacje.',
      titleTextLink:
      'Czytaj więcej',
      imageIcon:
      '../../../assets/icon/right-arrow-2.png'
    },
    {
      imageSrc:
      '../../../assets/photos/Rectangle 57.png',
      imageAlt:
      'jjjj',
      titlePhoto:
      'Procesy HR',
      titleInfo:
      'Nasi specjaliści zadbają o Twoją markę onLine Ty skup się na biznesie.',
      linkInfo:
      'https://drive.google.com/drive/folders/1FShzjnJLm9QO_HcOnjkj74rCxgnKyU90',
      titleText:
      'Prowadzimy kompleksową i  stałą obsługę marketingową dla firm z segmentu MŚP. Sprawdź nasze specjalizacje.',
      titleTextLink:
      'Czytaj więcej',
      imageIcon:
      '../../../assets/icon/right-arrow-2.png'
    },
    {
      imageSrc:
      '../../../assets/photos/Rectangle 57 (1).png',
      imageAlt:
      'iiii',
      titlePhoto:
      'Rekrutacje RPO',
      titleInfo:
      'Nasi specjaliści zadbają o Twoją markę onLine Ty skup się na biznesie.',
      linkInfo:
      'https://drive.google.com/drive/folders/1FShzjnJLm9QO_HcOnjkj74rCxgnKyU90',
      titleText:
      'Prowadzimy kompleksową i  stałą obsługę marketingową dla firm z segmentu MŚP. Sprawdź nasze specjalizacje.',
      titleTextLink:
      'Czytaj więcej',
      imageIcon:
      '../../../assets/icon/right-arrow-2.png'
    },
    {
      imageSrc:
      '../../../assets/photos/Rectangle 57.png',
      imageAlt:
      'iiii',
      titlePhoto:
      'Marketing MBO',
      titleInfo:
      'Nasi specjaliści zadbają o Twoją markę onLine Ty skup się na biznesie.',
      linkInfo:
      'https://drive.google.com/drive/folders/1FShzjnJLm9QO_HcOnjkj74rCxgnKyU90',
      titleText:
      'Prowadzimy kompleksową i  stałą obsługę marketingową dla firm z segmentu MŚP. Sprawdź nasze specjalizacje.',
      titleTextLink:
      'Czytaj więcej',
      imageIcon:
      '../../../assets/icon/right-arrow-2.png'
    },
    {
      imageSrc:
      '../../../assets/photos/Rectangle 57 (1).png',
      imageAlt:
      'iiii',
      titlePhoto:
      'WWW dla biznesu',
      titleInfo:
      'Nasi specjaliści zadbają o Twoją markę onLine Ty skup się na biznesie.',
      linkInfo:
      'https://drive.google.com/drive/folders/1FShzjnJLm9QO_HcOnjkj74rCxgnKyU90',
      titleText:
      'Prowadzimy kompleksową i  stałą obsługę marketingową dla firm z segmentu MŚP. Sprawdź nasze specjalizacje.',
      titleTextLink:
      'Czytaj więcej',
      imageIcon:
      '../../../assets/icon/right-arrow-2.png'
    }
  ]

  specialtiesPhotos: any = [
    {
      src: '../../../assets/photos/rafiner.png',
      name: 'Przemysł i produkcja'
    },
    {
      src: '../../../assets/photos/rafiner.png',
      name: 'Branża IT'
    },
    {
      src: '../../../assets/photos/Rectangle 74.png',
      name: 'Retail'
    },
    {
      src: '../../../assets/photos/rafiner.png',
      name: 'Legal i Finanse'
    },
    {
      src: '../../../assets/photos/Rectangle 74.png',
      name: 'Nieruchomości'
    }
  ]

  imagesServ: any = [

    {
      imageServ:'../../../assets/photos/Rectangle 83 (1).png',
      titleServ:'Warsztaty i strategie biznesowe',
      textServ:'Wspólnie z Tobą, wykorzystując własne doświadczenia biznesowe, zastanowimy się nad tym jak najlepiej poukładać procesy, jak komunikować się z klientami a jak z potencjalnymi pracownikami',
      imageIcon:'../../../assets/icon/right-arrows.png'
    },
    {
      imageServ:'../../../assets/photos/Rectangle 83.png',
      titleServ:'Wdrażanie i optymalizacja procesów HR',
      textServ:'Wspólnie z Tobą, wykorzystując własne doświadczenia biznesowe, zastanowimy się nad tym jak najlepiej poukładać procesy, jak komunikować się z klientami a jak z potencjalnymi pracownikami',
      imageIcon:'../../../assets/icon/right-arrows.png'
    },
    {
      imageServ:'../../../assets/photos/Rectangle 83 (1).png',
      titleServ:'Audyty i szkolenia',
      textServ:'Wspólnie z Tobą, wykorzystując własne doświadczenia biznesowe, zastanowimy się nad tym jak najlepiej poukładać procesy, jak komunikować się z klientami a jak z potencjalnymi pracownikami'
    },
    {
      imageServ:'../../../assets/photos/Rectangle 83.png',
      titleServ:'Outsourcing procesów rekrutacyjnych [RPO]',
      textServ:'Wspólnie z Tobą, wykorzystując własne doświadczenia biznesowe, zastanowimy się nad tym jak najlepiej poukładać procesy, jak komunikować się z klientami a jak z potencjalnymi pracownikami'
    },
    
  ]
  imagesServTwo: any = [

    {
      imageServ:'../../../assets/photos/Rectangle 83 (1).png',
      titleServ:'Warsztaty i strategie biznesowe',
      textServ:'Wspólnie z Tobą, wykorzystując własne doświadczenia biznesowe, zastanowimy się nad tym jak najlepiej poukładać procesy, jak komunikować się z klientami a jak z potencjalnymi pracownikami'
    },
    {
      imageServ:'../../../assets/photos/Rectangle 83.png',
      titleServ:'Wdrażanie i optymalizacja procesów HR',
      textServ:'Wspólnie z Tobą, wykorzystując własne doświadczenia biznesowe, zastanowimy się nad tym jak najlepiej poukładać procesy, jak komunikować się z klientami a jak z potencjalnymi pracownikami'
    },
    {
      imageServ:'../../../assets/photos/Rectangle 83 (1).png',
      titleServ:'Audyty i szkolenia',
      textServ:'Wspólnie z Tobą, wykorzystując własne doświadczenia biznesowe, zastanowimy się nad tym jak najlepiej poukładać procesy, jak komunikować się z klientami a jak z potencjalnymi pracownikami'
    },
    {
      imageServ:'../../../assets/photos/Rectangle 83.png',
      titleServ:'Outsourcing procesów rekrutacyjnych [RPO]',
      textServ:'Wspólnie z Tobą, wykorzystując własne doświadczenia biznesowe, zastanowimy się nad tym jak najlepiej poukładać procesy, jak komunikować się z klientami a jak z potencjalnymi pracownikami'
    },
    
  ]
 
}
