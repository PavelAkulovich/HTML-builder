const fs = require('fs')
const path = require('path')

const readableStrim = fs.createReadStream(path.join(__dirname, 'text.txt'))
readableStrim.on('data', chunk => console.log(chunk.toString()))

