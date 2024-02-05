import { Component } from '@angular/core';
import { NoticeApisService } from './services/notice-apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias-app';
  listsNotices: any[] = [];
  loading = false;

  constructor(private _api: NoticeApisService) {

  }

  searchNotice(params: any) {
    this.loading = true;
    this.listsNotices = []
    setTimeout(() => {
      this._api.getNotices(params).subscribe(result => {
        this.loading = false;
        this.listsNotices = result.articles;
      })
    }, 1000)
  }
}
