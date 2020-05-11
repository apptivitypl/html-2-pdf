import * as puppeteer from 'puppeteer';
import * as fs from 'fs';

export default class Html2Pdf {
    constructor(
        private launchOptions?: puppeteer.LaunchOptions) 
    {
    }

    public async convertToFile(inputHtmlPath: string, outputPdfPath: string, options?: puppeteer.PDFOptions) {
        let inputData = await this.readFileAsync(inputHtmlPath);
        let buffer = await this.convertToBuffer(inputData, options);
        await this.writeFileAsync(outputPdfPath, buffer);
    }

    public async convertToBuffer(content: string, options?: puppeteer.PDFOptions) : Promise<Buffer> {
        const browser = await puppeteer.launch(this.launchOptions ?? undefined);
        const page = await browser.newPage();

        await page.setContent(content);
        
        const buffer = await page.pdf(options ?? undefined);

        await browser.close();

        return new Promise((resolve) => {
            resolve(buffer);
        });
    }

    private async readFileAsync(path: string) : Promise<string> {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }

    private async writeFileAsync(path: string, data: any) {
        return new Promise((resolve) => {
            fs.writeFile(path, data, () => {
                resolve();
            });
        });
    }
}