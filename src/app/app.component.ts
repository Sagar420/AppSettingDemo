import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from './app-settings.service';
import {AppSettings} from './AppSettings'
import {Product} from './Product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private appSettingsService: AppSettingsService) {
      console.log("Test");
  }

  product: Product;
  private price:number;
  private url:string;
  private settings: AppSettings;
  
  ngOnInit(): void {
    this.appSettingsService.getSettings()
      .subscribe(settings =>
             this.settings = settings,
        () => null,
        () => {
          this.product = new Product();
          this.product.price =
            this.settings.defaultPrice;
          this.product.url =
            this.settings.defaultUrl;
        });
  }
}
