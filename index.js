// pdfjs
import 'core-js';
import PDFJS from 'pdfjs-dist/lib/pdf'
window.PDFJS = PDFJS
window.PDFJS.workerSrc = new URL('pdfjs-dist/lib/pdf.worker.js', import.meta.url).pathname

// source
import './src/pdf-viewer-delegate.js';
import './src/pdf-ctrl.js';
import './src/pdf-viewer-toolbar.js';
import './src/pdf-viewer.js';
