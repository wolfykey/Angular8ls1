import { Component } from '@angular/core';

export interface Post {
  id?: number;
  text: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  posts: Post[] = [
    {
      id: 1,
      text: 'Description 1',
      title: 'Title 1'
    },
    {
      id: 2,
      text: 'Description 2',
      title: 'Title 2'
    },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
