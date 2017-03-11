import { Component, OnInit } from '@angular/core';
import { WpEndpoint } from 'ng2-wp-api';

@Component({
  selector: 'app-specifications',
  styleUrls: ['./specifications.component.scss'],
  template: `
    <div class="single-page" [wpModel]="endpoint" [wpId]="10" (wpResponse)="page = $event.data">
      <h1 [innerHtml]="page?.title?.rendered"></h1>
      <div [innerHtml]="page?.content?.rendered"></div>
    </div>
  `
})
export class SpecificationsComponent {
  endpoint = WpEndpoint.pages;

}
