import { Component, AfterViewInit } from '@angular/core';
import { ViewSDKClient } from '../../../services/view-sdk.service';
import { AnalyticsService } from '../../../services/analytics.service';
import { ViewEventListenerService } from '../../../services/view-event-listener.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.css']
})
export class MeditationComponent implements AfterViewInit {

  constructor(private viewSDKClient: ViewSDKClient, private googleAnalyticsService: AnalyticsService) {
  }

  ngAfterViewInit(): void {
    this.viewSDKClient.ready().then(() => {
      const eventService = new ViewEventListenerService(this.googleAnalyticsService, 'Meditative Practices');
      /* Invoke file preview */
      this.viewSDKClient.previewFile('pdf-div-meditation', 'Meditative Practices.pdf',
        '/assets/documents/bjsports-2019-101242.full.pdf', environment.viewerConfig, eventService);
    });
  }

}
