import delegateService from './delegate-service.js';

angular.module('pdf', [])
  .service('pdfDelegate', delegateService([
    'prev',
    'next',
    'zoomIn',
    'zoomOut',
    'zoomTo',
    'rotate',
    'getPageCount',
    'getCurrentPage',
    'goToPage',
    'load'
  ]));
