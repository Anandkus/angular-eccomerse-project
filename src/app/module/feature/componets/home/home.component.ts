import { Component } from '@angular/core';
import { menshirt } from 'src/data/men/men_shirt';
import { menjeansData } from 'src/data/men/menjeans';
import { sareePage1 } from 'src/data/saree/sari';
import { mensShoesPage1 } from 'src/data/shoes/shoes';
import { women_dress } from 'src/data/women/women_dress';
import { women_jeans } from 'src/data/women/women_jeans';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  MenJeansData: any;
  womendressData: any;
  menShirtData: any;
  womenjeansData: any;
  ngOnInit() {
    this.MenJeansData = menjeansData.splice(0, 5);
    this.menShirtData = menshirt.splice(0, 5);
    this.womenjeansData = women_jeans.splice(0, 5)
    this.womendressData =women_dress.splice(0, 5);
  }
}
