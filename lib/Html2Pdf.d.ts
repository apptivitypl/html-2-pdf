/// <reference types="node" />
import * as puppeteer from 'puppeteer';
export default class Html2Pdf {
    private launchOptions?;
    constructor(launchOptions?: puppeteer.LaunchOptions | undefined);
    convertToFile(inputHtmlPath: string, outputPdfPath: string, options?: puppeteer.PDFOptions): Promise<void>;
    convertToBuffer(content: string, options?: puppeteer.PDFOptions): Promise<Buffer>;
    private readFileAsync;
    private writeFileAsync;
}
