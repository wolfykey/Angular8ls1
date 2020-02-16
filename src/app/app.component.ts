import {Component} from '@angular/core';

export interface Post {
  id?: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Title 1',
      text: 'Description 1',
      id: 1
    },
    {
      title: 'Title 2',
      text: 'Description 2',
      id: 2
    },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
