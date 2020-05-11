# html-2-pdf

> Node module that converts HTML to PDF.

[![Build Status](https://travis-ci.org/bluewavesolutions/html-2-pdf.svg?branch=master)](https://travis-ci.org/bluewavesolutions/html-2-pdf)

---

### v0.1.0
Project initialization.

---

### Example usage

```typescript
import { Html2Pdf } from 'html-2-pdf';

const execute = async () => {
    let html2Pdf = new Html2Pdf();
    return await html2Pdf.convertToBuffer("<div>Hello world!</div>");
}

try {
    execute().then(buffer => {
        console.log(buffer);
    });
} catch(err) {
    console.log(err);
}
```

---

## Html2Pdf

### constructor

Name: `launchOptions`
Type: [`puppeteer.LaunchOptions`](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)
Default value: `null`

### convertToFile

Name: `inputHtmlPath`
Type: `String`

Name: `outputPdfPath`
Type: `String`

Name: `options`
Type: [`puppeteer.PDFOptions`](https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#pagepdfoptions)
Default value: `null`

### convertToBuffer

Name: `content`
Type: `String`

Name: `options`
Type: [`puppeteer.PDFOptions`](https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#pagepdfoptions)
Default value: `null`