import Link from 'next/link';
//getAllIds is a function from lib/data.js
import { getAllIds, getData, getSortedList } from '../lib/data';
import Layout from '../components/layout';
import CharacterList from '../components/author';

//create an instance of the getStaticPaths() to report next all possible dynamic urls
export async function getStaticPaths() {
  const paths = await getAllIds();
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
export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.post_title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.user_login}</h6>
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.post_content}} />
        </div>
      </article>
    </Layout>
  );
}