import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const gaID = environment.googleAnalyticsID;
    const gtmScriptElement = document.createElement('script');
    gtmScriptElement.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaID;
    gtmScriptElement.type = 'text/javascript';
    gtmScriptElement.async = true;
    document.getElementsByTagName('head')[0].appendChild(gtmScriptElement);

    const gtagScriptElement = document.createElement('script');
    gtagScriptElement.type = 'text/javascript';
    gtagScriptElement.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '` + gaID + `');
    `;
    document.getElementsByTagName('head')[0].appendChild(gtagScriptElement);
  }

}
