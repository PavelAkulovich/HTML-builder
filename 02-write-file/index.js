const { stdin, stdout } = process
const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, 'text.txt')
const writing = fs.createWriteStream(file)
stdout.write('Введите данные\n')
stdin.on('data', data => {
    if(data.toString().trim() == 'exit') {
        
        process.exit()
    }
    else {
        writing.write(data)
        stdout.write('Введите данные\n')
    }
    
})

process.on('SIGINT', function () { process.exit()})
process.on('exit', code => stdout.write('Удачи!'))


