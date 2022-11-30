//Before using got must DO: npm install Got
import got from 'got';
// define the url for rest endpoint
const dataUrl = 'https://dev-srjc-fall-2022-cs55.pantheonsite.io/wp-json/twentytwentyone-child/v1/special';


// function returns ids for all json objects in array
export async function getAllIds() {
let jsonString;
try {
    //next line uses got synchronmously to retrieve via https our json from wp site 
    jsonString = await got(dataUrl)
    console.log(jsonString.body)
}
catch (error) {
jsonString.body =[]
console.log(error)
}

const jsonObj = JSON.parse( jsonString.body);
const returnData = jsonObj.map(item => {
    return {
        params: {
            id: item.ID.toString()
        }
    }
}
);

console.log(returnData);
return returnData;
}


export async function getSortedList() {

let jsonString;
try {
    //next line uses got synchronmously to retrieve via https our json from wp site 
    jsonString = await got(dataUrl)
    // console.log(jsonString.body)
}
catch (error) {
jsonString.body =[]
console.log(error)
}
const jsonObj = JSON.parse( jsonString.body);
jsonObj.sort(function(x,y) {
        return x.post_title.localeCompare(y.post_title);
    });

    return jsonObj.map(item => {
            return {
                id: item.ID.toString(),
                title: item.post_title,
               content: item.post_content,
               link: item.guid,
                 date: item.post_date,
                 type: item.post_type,
              //   modify: item.modified,
            }
        })
}

// used by getStaticProps() in [id].js
export async function getData(idRequested) {
    let jsonString;
try {
    //next line uses got synchronmously to retrieve via https our json from wp site 
    jsonString = await got(dataUrl)
    console.log(jsonString.body)
}
catch (error) {
jsonString.body =[]
console.log(error)
}
 const jsonObj = JSON.parse(jsonString.body);
    
const objMatch = jsonObj.filter(
  obj => {
    return obj.ID.toString() === idRequested;
  }
);

    
// const objMatch2 = jsonObj.filter(
//   obj => {
//     return obj.ID.toString() === idRequested;
//   }
// );

//extract obj value in array if any exist
let objReturned;
if (objMatch.length > 0)
{
  objReturned = objMatch[0];
}
else
{
  objReturned = {};
}

    //extract obj value in array if any exist
// let objReturned2;
// if (objMatch2.length > 0)
// {
//   objReturned2 = objMatch2[0];
// }
// else
// {
//   objReturned2 = {};
// }

return objReturned;
}