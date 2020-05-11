import Html2Pdf from '../lib/Html2Pdf';

describe('Html2Pdf', function() {
    it('convertToBuffer', async function() {
        let html2Pdf = new Html2Pdf();
        const buffer = await html2Pdf.convertToBuffer("<div>Hello world!</div>");
        expect(buffer.slice(0, 4).toString()).toBe("%PDF");
    });
});