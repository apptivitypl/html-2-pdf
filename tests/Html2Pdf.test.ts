import Html2Pdf from '../lib/Html2Pdf';
import * as fs from 'fs';

describe('Html2Pdf', function() {
    it('convertToBuffer', async function() {
        let constructorParameters = process.platform === 'darwin' ? {
            headless: true,
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
        } : {};

        let html2Pdf = new Html2Pdf(constructorParameters);

        const buffer = await html2Pdf.convertToBuffer("<div>Hello world!</div>");
        expect(buffer.slice(0, 4).toString()).toBe("%PDF");
    });

    it('convertToFile', async function() {
        let constructorParameters = process.platform === 'darwin' ? {
            headless: true,
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
        } : {};

        let html2Pdf = new Html2Pdf(constructorParameters);

        const inputHtmlPath = "./tests/temp/test.html";
        const outputPdfPath = "./tests/temp/test.pdf";

        await writeFileAsync(inputHtmlPath, '<div>Hello world!</div>');
        await html2Pdf.convertToFile(inputHtmlPath, outputPdfPath);

        let buffer = await readFileAsync(outputPdfPath);

        expect(buffer.slice(0, 4).toString()).toBe("%PDF");

        fs.unlinkSync(inputHtmlPath);
        fs.unlinkSync(outputPdfPath);
    });
});

function readFileAsync(path: string) : Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

function writeFileAsync(path: string, data: any) {
    return new Promise((resolve) => {
        fs.writeFile(path, data, () => {
            resolve();
        });
    });
}