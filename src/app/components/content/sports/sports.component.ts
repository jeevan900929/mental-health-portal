import { Component, AfterViewInit } from '@angular/core';
import { ViewSDKClient } from '../../../services/view-sdk.service';
import { AnalyticsService } from '../../../services/analytics.service';
import { ViewEventListenerService } from '../../../services/view-event-listener.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements AfterViewInit {

  constructor(private viewSDKClient: ViewSDKClient, private googleAnalyticsService: AnalyticsService) {
  }

  ngAfterViewInit(): void {
    this.viewSDKClient.ready().then(() => {
      const eventService = new ViewEventListenerService(this.googleAnalyticsService, 'Sport Activities');
      /* Invoke file preview */
      this.viewSDKClient.previewFile('pdf-div-sports', 'Sport Activities.pdf',
        '/assets/documents/sports/sports.pdf', environment.viewerConfig, eventService);
    });
  }

}
