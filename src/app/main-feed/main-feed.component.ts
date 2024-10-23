import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CarouselModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { CommonModule } from '@angular/common';

interface Post {
  id: number;
  images: string[];
  title: string;
}

@Component({
  standalone: true,
  selector: 'app-main-feed',
  imports: [CommonModule, HttpClientModule, CarouselModule, ListViewModule],
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss'],
})
export class MainFeedComponent {
  posts: Post[] = [];

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    this.http.get<Post[]>('http://localhost:3000/posts').subscribe((data) => {
      this.posts = data;
    });
  }
}
