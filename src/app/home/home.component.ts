import { InMemoryDatabase } from './../in-memory-database';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: any[] = [];

  constructor(private config: NgbCarouselConfig, private http: HttpClient) {
    // customize default values of carousels used by this component tree
    this.config.interval = 10000;
    this.config.wrap = false;
    this.config.keyboard = false;
    this.config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.http.get<any>('api/products').subscribe(res => {
      this.images = res;
    });
  }
}
