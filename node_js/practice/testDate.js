let fs = require('fs')

function printDateStr() {
    let date = new Date();
    let dateStr = `${date.getFullYear()}-${date.getDate()}-${date.getMonth()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(dateStr);
}
printDateStr()
//setInterval(printDateStr, 4000);
let file='test/original.txt'

fs.unlink(file, (err) => {
    if (err)
    console.log(`${file} was deleted`);
    else
    console.log(`${file} is not deleted`);
  });


