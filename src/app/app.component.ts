import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tiny-angelical';
  freteImg = '.\\assets\\img\\fretegratis.png'

  logoImg = '.\\assets\\img\\tinyangelicallogo.png'
  options: any[] = [{ title: 'Início', link: '/' }, { title: 'Categorias', link: null }, { title: 'Contato', link: 'contato' }, { title: 'Parcerias', link: 'parcerias' }]
  paintSearchIcon: boolean = false;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute) {
    this.matIconRegistry.addSvgIcon(
      `instagram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/instagram-logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `facebook`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/facebook-logo.svg")
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
