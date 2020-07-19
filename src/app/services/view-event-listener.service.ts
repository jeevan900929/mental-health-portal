import { Injectable } from '@angular/core';
import { AnalyticsService } from './analytics.service';

@Injectable({
  providedIn: 'root'
})
export class ViewEventListenerService {

  private callbackDictionary: any = {};

  constructor(private googleAnalyticsService: AnalyticsService, private AnalyticsCategory: string) {

    this.addCallbackFor('DOCUMENT_OPEN',
      (data) => this.googleAnalyticsService.sendAdobeViewSDKEvent(AnalyticsCategory, 'DOCUMENTS OPENED', data));

    this.addCallbackFor('PAGE_VIEW',
      (data) => this.googleAnalyticsService.sendAdobeViewSDKEvent(AnalyticsCategory, 'PAGES VIEWED', data));

    this.addCallbackFor('TEXT_COPY',
      (data) => this.googleAnalyticsService.sendAdobeViewSDKEvent(AnalyticsCategory, 'TEXT COPIED', data));

    this.addCallbackFor('DOCUMENT_DOWNLOAD',
      (data) => this.googleAnalyticsService.sendAdobeViewSDKEvent(AnalyticsCategory, 'DOCUMENTS DOWNLOADED', data));

    this.addCallbackFor('HYPERLINK_OPEN',
      (data) => this.googleAnalyticsService.sendAdobeViewSDKEvent(AnalyticsCategory, 'HYPERLINKS OPENED', data));

    this.addCallbackFor('TEXT_SEARCH',
      (data) => this.googleAnalyticsService.sendAdobeViewSDKEvent(AnalyticsCategory, 'TEXT SEARCHED', data));

    this.addCallbackFor('BOOKMARK_ITEM_CLICK',
      (data) => this.googleAnalyticsService.sendAdobeViewSDKEvent(AnalyticsCategory, 'BOOKMARKED ITEMS CLICKED', data));

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
