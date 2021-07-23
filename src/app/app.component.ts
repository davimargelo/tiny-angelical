import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tiny-angelical';
  freteImg = '.\\assets\\img\\fretegratis.png'
  images = [
    { path: '.\\assets\\img\\product_1.png', title: 'Pijaminha kawaii', description: 'Já deu uma passadinha na nossa seção kawaii? Corre lá e surpreenda-se! Muitas novidades e preços incríveis.' },
    { path: '.\\assets\\img\\product_2.png', title: 'Brincos da vitalidade + Brinde Choker', description: 'Promoção: Leve 2, pague 1! Na compra de um par de brincos ganhe um choker combinando!' },
    { path: '.\\assets\\img\\product_3.png', title: 'Manto Demonslayer Feminino', description: 'Nossa loja tem uma seção exclusiva de roupas para Cosplayers, com tendências sempre em alta e preços super em baixa. Aproveite.' }
  ];
  logoImg = '.\\assets\\img\\tinyangelicallogo.png'
  options: any[] = [{ title: 'Início', link: '/' }, { title: 'Categorias', link: null }, { title: 'Contato', link: 'contato' }, { title: 'Temas', link: 'temas' }]
  paintSearchIcon: boolean = false;

  constructor(private config: NgbCarouselConfig, private router: Router, private route: ActivatedRoute, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // customize default values of carousels used by this component tree
    this.config.interval = 10000;
    this.config.wrap = false;
    this.config.keyboard = false;
    this.config.pauseOnHover = true;

    this.matIconRegistry.addSvgIcon(
      `instagram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/instagram-logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `twitter`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/twitter-logo.svg")
    );
  }

  ngOnInit(): void {
  }

  searchOnFocus() {
    this.paintSearchIcon = true;
  }

  searchOnBlur() {
    this.paintSearchIcon = false;
  }

  clickedOption(option: any): void {
    if (option.link !== null)
      this.router.navigate([option.link], { relativeTo: this.route });
  }
}
