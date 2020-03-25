import { Component } from '@angular/core';

export interface IPost {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  search = '';

  searchField = 'title';

  posts: IPost[] = [
    {
      title: 'beer',
      text: 'the best beer in the world'
    },
    {
      title: 'bread',
      text: 'the best bread in the world'
    },
    {
      title: 'JS',
      text: 'the best language in the world'
    },
  ];

}
