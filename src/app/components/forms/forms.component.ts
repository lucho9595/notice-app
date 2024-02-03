import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  categories: any[] = [
    { values: 'general', name: 'General' },
    { values: 'business', name: 'Business' },
    { values: 'sports', name: 'Sports' },
    { values: 'politics', name: 'Politics' },
  ];

  countries: any[] = [
    { values: 'ar', name: 'Argentina' },
    { values: 'br', name: 'Brazil' },
    { values: 'eu', name: 'United States' },
    { values: 'es', name: 'Spain' },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
