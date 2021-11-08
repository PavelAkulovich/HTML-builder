const fs = require('fs')
const path = require('path')

fs.readdir(path.join(__dirname, 'styles'), (err, files) => {
    if (err)
            console.log(err)
    for (let i = 0; i < files.length; i++) {
        fs.stat(path.join(path.join(__dirname, 'styles'), files[i]), (err, stats) => {
            if (err)
            console.log(err)
          
          if (stats.isFile() && path.extname(path.join(path.join(__dirname, 'styles'), files[i])) == '.css') {
            fs.readFile(path.join(path.join(__dirname, 'styles'), files[i]), 'utf-8', (err, files) => {
                if (err)
                console.log(err)
              fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), files, (err) => {
                if (err)
                console.log(err)
                }
              )
            })
          }
        })
    }
})