const fs = require('fs')
const path = require('path')
const folder = path.join(__dirname, 'secret-folder')

fs.readdir(folder, {withFileTypes: true}, (err, files) => {
    if (err)
            console.log(err);
    for (let file of files) {
        if(!file.isDirectory()) {
            fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
                if (err)
            console.log(err);
                const name = path.basename(file.name, path.extname(file.name))
                const ext = path.extname(file.name).slice(1)
                const size = stats.size
                console.log(`${name} - ${ext} - ${size}b`)
            })
        }   
        
    }
})
