import { Injectable } from '@angular/core';

declare var ga;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  sendAdobeViewSDKEvent(eventCategory: string, eventType: string, eventData: any): void {
    const tracker = ga.getAll()[0];
    if (tracker) {
      tracker.send('event', {
        eventCategory,
        eventAction: eventType,
        eventLabel: JSON.stringify(eventData),
      });
    }
  }
}
