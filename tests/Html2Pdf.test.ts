import Html2Pdf from '../lib/Html2Pdf';

describe('Html2Pdf', () => {
    it('convertToBuffer', async () => {
        const html2Pdf = new Html2Pdf();
        const buffer = await html2Pdf.convertToBuffer("<div>Hello world!</div>");
        expect(buffer.slice(0, 4).toString()).toBe("%PDF");
    });
});