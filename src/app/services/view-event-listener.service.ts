import { Injectable } from '@angular/core';
import { AnalyticsService } from './analytics.service';

@Injectable({
  providedIn: 'root'
})
export class ViewEventListenerService {

  private callbackDictionary: any = {};

  constructor(private googleAnalyticsService: AnalyticsService) {

    this.addCallbackFor('DOCUMENT_OPEN',
      (data) => this.googleAnalyticsService.sendAdobeViewSDKEvent('DOCUMENT_OPEN', data));

    this.addCallbackFor('PAGE_VIEW',
      (data) => this.googleAnalyticsService.sendAdobeViewSDKEvent('PAGE_VIEW', data));

    this.addCallbackFor('TEXT_COPY',
      (data) => this.googleAnalyticsService.sendAdobeViewSDKEvent('TEXT_COPY', data));

    this.addCallbackFor('DOCUMENT_DOWNLOAD',
      (data) => this.googleAnalyticsService.sendAdobeViewSDKEvent('DOCUMENT_DOWNLOAD', data));

  }

  addCallbackFor(eventType: string, callback: (eventData) => void): void {
    if (!this.getCallbacksForKey(eventType)) {
      this.callbackDictionary[eventType] = [];
    }

    this.callbackDictionary[eventType].push(callback);
  }

  removeCallbackFor(eventType: string, callback: (eventData) => void): void {
    const arr = this.getCallbacksForKey(eventType);
    if (!!arr && arr.length > 0) {
      const callbackIdx = arr.indexOf(callback);
      if (callbackIdx >= 0) {
        arr.splice(callbackIdx, 1);
      }
    }
  }

  eventProviderCallback(event: any): void {
    console.log(event);
    const callbackList = this.getCallbacksForKey(event.type) || [];
    callbackList.forEach(callback => callback(event.data));
  }

  private getCallbacksForKey(eventType: string): any {
    return this.callbackDictionary[eventType];
  }

}
