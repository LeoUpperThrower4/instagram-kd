import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainFeedComponent } from './main-feed/main-feed.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, MainFeedComponent],
  template: '<app-main-feed></app-main-feed>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'instagram-kd';
}
