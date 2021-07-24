import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  product: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    this.route.paramMap.subscribe(params => {
        this.http.get(`api/products/${params.get('id')}`).subscribe(res => {
          this.product = res;
        });
      }); 
  }

  ngOnInit(): void {
  }

}
