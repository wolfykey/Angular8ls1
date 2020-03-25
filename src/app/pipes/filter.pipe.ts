import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: IPost[], search: string = '', field: string = 'title'): IPost[] {
    if (!search.trim()) {
      return  posts;
    }

    return posts.filter(post => {
      return post[field].toLowerCase().includes(search.toLowerCase());
    });
  }

}
