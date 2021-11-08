const fs = require('fs')
const path = require('path')
let fileWay = path.join(__dirname, 'files')
let copyWay = path.join(__dirname, 'files-copy')

fs.mkdir(copyWay, { recursive: true }, (err) => {
    if (err) throw err
  })
  fs.readdir(copyWay, (err, files) => {
    if (err) throw err
    for (let i=0; i<files.length; i++){
      fs.unlink(path.join(copyWay, files[i]), (err) => {
        if (err) throw err
      })
    }
  })
  fs.readdir(fileWay, (err, files) => {
    if (err) throw err
    for (let i=0; i<files.length; i++){
      fs.copyFile(path.join(fileWay,files[i]), path.join(copyWay, files[i]), (err) => {
        if (err) throw err
      })
    }
  })