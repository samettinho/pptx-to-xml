const fs = require('fs');
const JSZip = require('jszip');
const PptxGenJS = require('pptxgenjs');

async function main() {
  try {
    const pptxFilePath = 'slayt1.pptx';

    const data = await fs.readFileSync(pptxFilePath);

    const zip = new JSZip();
    const zipData = await zip.loadAsync(data);

    const xmlFile = zipData.file('ppt/slides/slide1.xml'); 

    if (!xmlFile) {
      console.error('xml dosyası bulunamadı');
      return;
    }

    let xmlString = await xmlFile.async('string');
    console.log('XML dosyası okundu');

  } catch (err) {
    console.error(err);
  }
}

main();
