
const fs = require('fs')

const data = fs.readFileSync('./file.txt', 'utf', (err)=>{
 if(err) throw err
   console.log(err)
})



function Showmessage(){
	console.log('Finished')
}

Showmessage();