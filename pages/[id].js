import Link from 'next/link';
//getAllIds is a function from lib/data.js
import { getAllIds, getData, getSortedList } from '../lib/data';
import Layout from '../components/layout';
import CharacterList from '../components/author';

//create an instance of the getStaticPaths() to report next all possible dynamic urls
export async function getStaticPaths() {
    const paths =  await getAllIds();
  
    console.log(paths);
    return {
      paths,
      fallback: false
    };
  }

//create an instance of the getStaticProps() to return data for one person
export async function getStaticProps({ params }) {
    const itemData = await getData(params.id);
    // console.log(itemData);
    return {
      props: {
        itemData
      }
    };
}


// make a react component to display all details about a person when a dynamic route matches, like id 1 or id 2
export default function NoStarWars ({itemData}) {
    return (
        <Layout home>
        <h1 className="text-center mb-4">The Post List</h1>
      <div className="list-group">
     {allData.map(({id, title, content, link, date, modify} ) => 
     <>
     <ul key={id}>
     <li>The post id is <strong>{id}</strong>.</li>
     <li>The title is <strong>{title.rendered}</strong>.</li>
     <li>The post is <em>{content.rendered}</em></li>
     <li>Date created: <strong>{date}</strong></li>
     <li>Last modified: {modify}</li>
     <li><Link href={id}><a>More Information</a></Link></li>

     </ul>
     {/* <button><li><a href=`/{id}`>More Info</a></li></button> */}
     </>
)
     }
    </div>    
  </Layout>
    );
}