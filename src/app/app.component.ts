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
      '../../../assets/photos/homepage_ecs_slajder_strategia.png',
      imageAlt:
      'nnnnn',
      titlePhoto:
      'Tytuł nr 1',
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
      '../../../assets/photos/pexels-tom-fisk-10407692.jpg',
      imageAlt:
      'iiii',
      titlePhoto:
      'Tytuł nr 2',
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
      '../../../assets/photos/office.jpg',
      imageAlt:
      'jjjj',
      titlePhoto:
      'Tytuł nr 3',
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
}
