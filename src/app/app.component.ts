import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tiny-angelical';
  images = ['.\\assets\\img\\product_1.png', '.\\assets\\img\\product_2.png', '.\\assets\\img\\product_3.png'];
  options: string[] = ['Início', 'Categorias', 'Contato', 'Temas']
  paintSearchIcon: boolean = false;

  constructor(private config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    this.config.interval = 10000;
    this.config.wrap = false;
    this.config.keyboard = false;
    this.config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

  searchOnFocus() {
    this.paintSearchIcon = true;
  }

  searchOnBlur() {
    this.paintSearchIcon = false;
  }
}
