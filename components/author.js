import Link from 'next/link';

export function SwLink ( { author, isStarWars, id } ) {
  let tag = (isStarWars) ? "/SW/" : "/notSW/";
  console.log(id +" " + author +" " + isStarWars);
  return <div className="p-2 border border-danger border-5 rounded mt-5">
      <h6>Their friend from another universe:</h6>
    <div className="list-group">
          <Link key={"link" + id} href={tag + id}>
            <a key={id} className="list-group-item list-group-item-action">{author}</a>
          </Link>
    </div>  
  </div>
}


export default function CharacterList ( { info } ) {
  console.log(info);
    return ( <>
     <div className="row text-center">
        <h1>Quote from Character {info.author}</h1>
      </div>
      <article className="card col-6 m-auto my-3">
        <div className="card-body">
            <h5 className="card-title">{info.quote}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{info.author}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{
                (info.sw) ? "Star Wars" : "Not Star Wars"
            }</h6>
            <button className="btn btn-primary"><a href={info.youtube}>{info.youtubeTitle}</a></button>
            <SwLink name={info.notSWData.author} isStarWars={!info.sw} id={info.notSWData.id}></SwLink>
        </div>
      </article>
      </>
    );
}