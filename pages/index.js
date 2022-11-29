import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';
// import PersonSWChar from "../components/list"
import styles from '../styles/Home.module.css'
import CharacterList from "../components/list"

export async function getStaticProps() {
  const allData = await getSortedList();
  // const notStarWars= await getSortedList(false);
  return {
    props: {
       allData: allData,
    }
  }
}
export default function Home({ allData }) {
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
         </ul>
         <Link href={`/${id}`} key={id}><a>More Info</a></Link>
         </>
  )
         }
        </div>    
      </Layout>
  );
}
// {sw.map( ({id, author}) => <CharacterLink key={"pl"+id} tag={tag} id={id} author={author} /> )}
