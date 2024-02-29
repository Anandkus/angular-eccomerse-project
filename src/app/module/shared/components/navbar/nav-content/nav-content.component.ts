import { Component, Input } from '@angular/core';
import { navigation } from './nav-data';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent {
  category: any;
  getdata: any = [];
  @Input() selectedSection: any;
  ngOnInit() {
    this.getdata = navigation;
    const result = this.getdata.categories.filter((data: any) => data.name == this.selectedSection);
     this.category=result[0].sections;

  }
}
