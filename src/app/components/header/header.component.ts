import { Component, OnInit } from '@angular/core';
import { Iheader } from './model/iheader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerContent: Iheader;

  constructor() { 
    ///ANTES DE AÑADIR VALORES
    this.headerContent = {
      logo: {
        title: "Akira",
        img: "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWOaOWDAdoXzvGwLtoQ9VLd87m_m8OQ9Tok_fRWPC4PqbD58H_MkVF3lQsUj7HNJtMvm_6GMgpIqsLQjLbxyBt-nmgteaJXqm1v_.png?r=1c8"
      },
      links: ["Characters", "Manga", "Movie"]
    }
  ////DESPUES DE AÑADIR VALORES
  }

  ngOnInit(): void {
  ////VALOR PARA RENDERIZAR
  }

}
