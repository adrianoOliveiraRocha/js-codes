const PDFKit = require('pdfkit')
const fs = require('fs')

var text = `
I can create a text more beaultful?
`
var text2 = "\nI Hope"

try {
  const pdf = new PDFKit()
  pdf
    .fontSize(13)
    .fillColor('#6155a4')
    .text(text + text2, {
      align: 'center'
    })
pdf.pipe(fs.createWriteStream('output.pdf'))
pdf.end()
} catch (error) {
  console.error(error)
}
