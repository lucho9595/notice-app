import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @Output() paramsSelect = new EventEmitter<any>();
  categorySelect = 'general';
  countrySelect = 'ar';

  categories: any[] = [
    { values: 'general', name: 'General' },
    { values: 'business', name: 'Business' },
    { values: 'sports', name: 'Sports' },
    { values: 'politics', name: 'Politics' },
    { values: 'entertainment', name: 'Entertainment' },
    { values: 'health', name: 'Health' },
    { values: 'science', name: 'Science' },
    { values: 'technology', name: 'Technology' }
  ];

  countries: any[] = [
    { values: 'ar', name: 'Argentina' },
    { values: 'br', name: 'Brazil' },
    { values: 'eu', name: 'United States' },
    { values: 'fr', name: 'France' },
    { values: 'ch', name: 'China' },
    { values: 'co', name: 'Colombia' },
    { values: 'mx', name: 'Mexico' },
    { values: 've', name: 'Venezuela' },
    { values: 'au', name: 'Australia' },
  ];

  constructor() { }

  ngOnInit(): void {

  };

  searchNotice() {
    // console.log(this.categorySelect)
    // console.log(this.countrySelect)
    const params = {
      category: this.categorySelect,
      country: this.countrySelect
    }
    this.paramsSelect.emit(params)
  }

}
