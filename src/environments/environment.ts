// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  googleAnalyticsID: 'UA-166009929-1',

  /* Control the viewer customization.
* It lists down all supported variables with default values.
**/
  viewerConfig: {
    /* If true, tools such as sticky note, highlight, and so on appear in the upper toolbar. */
    showAnnotationTools: true,

    /* If true, a download button appears in the overflow menu on the top bar. */
    showDownloadPDF: true,

    /* If true, then a print PDF option appears in the overflow menu on the top bar. */
    showPrintPDF: true,

    /* If true, the page control toolbar displays. */
    showPageControls: true,

    /* 	If true, the page control toolbar is locked to the bottom bar and expands to the page width.
    End users can still dock/undock via the dock button on the page control toolbar. */
    dockPageControls: true,

    /* Allowed possible values are 'FIT_PAGE', 'FIT_WIDTH' or ''.
    FIT_WIDTH expands the page horizontally to the full width of the document pane; with this setting,
    the full page is unlikely to display on a single screen. Scrolling may be required.
    FIT_PAGE displays the entire page in the current view pane so that no scrolling is required.
    Note that end users can toggle the mode via the Fit Width button on the page controls bar (if present). */
    defaultViewMode: 'FIT_PAGE'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
