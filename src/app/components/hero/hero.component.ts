import { Component, OnInit } from '@angular/core';
import { Ihero } from './model/ihero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  public heroContent: Ihero[];

  constructor() {
    this.heroContent = [{
      title: 'Tetsuo',
      description: 'Tetsúo en uno de los niños con los que se realizaron experimentos para tratar de resucitar al dios Akira',
      banner:
        'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/07/Akira-Cosplayer-mexicana-convierte-al-monstruoso-Tetsuo-en-una-waifu-cyberpunk-1.png?resize=1280%2C729&quality=80&ssl=1',
    },

    {
      title: 'Kaneda',
      description: 'Kaneda es un motorista del mundo cyberpunk de este comic, y está decidido a recuperar a su amigo Tetsúo ',
      banner:
        'https://w0.peakpx.com/wallpaper/645/952/HD-wallpaper-shotaro-kaneda-akira.jpg',
    },

    {
      title: 'Kaori',
      description: 'Kaori es una chica de Neo-Tokio que está saliendo con Kaneda, se verá envuelta en todo el conflicto',
      banner:
        'https://cdn.myanimelist.net/images/characters/9/114609.jpg',
    },
  
  ];
  }

  ngOnInit(): void {}
}
