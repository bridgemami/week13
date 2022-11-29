// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'; // file system package/module
//path
import path from 'path';
//use path to build a filepath data subdirectory
const dataJ = path.join( process.cwd(), 'data');

// console.log(dataJ);
export default function handler(req, res) {
  const filePath = path.join( dataJ, 'author.json' );
//This will give me a string
  const jsonData = fs.readFileSync( filePath, 'utf8' );
//convert string from file into json array object

  const jsonObj = JSON.parse( jsonData);
//below will place the array alphabetical order by author parameter in author.json
  jsonObj.sort(
    function(x, y) {
    return x.author.localeCompare(y.author);
    }
  )
  res.status(200).json({ jsonObj })
}
