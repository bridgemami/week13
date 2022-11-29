import Link from 'next/link';

export function CharacterLink ( { tag, id, author }) {
  return <Link key={"link"+ id} href={tag+id}>
            <a key={id} className="list-group-item list-group-item-action">{author}</a>
         </Link>
}

export function PersonSWChar ( { isNotSW } ) {
  let text = (isNotSW) ? "Not Star Wars" : "From Star Wars";
  return <h2>{text}</h2>
}

export default function CharacterList ( { sw, isNotSW } ) {
    let tag = (isNotSW) ? '/notSW/' : '/SW/';
    return <article className="col-md-4 col-12 bg-secondary m-auto border border-4 rounded">
      <PersonSWChar isNotSW={isNotSW} />
      <div className="list-group">
        {sw.map( ({id, author}) => <CharacterLink key={"pl"+id} tag={tag} id={id} author={author} /> )}
      </div>
    </article>
    
}