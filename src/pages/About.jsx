import queryString from 'query-string'

export default function About(props) {
  const searchParams = props.location.search;
  console.log(searchParams, typeof searchParams)
  // const obj = new URLSearchParams(searchParams);
  // console.log(obj.get("name"))
  const query = queryString.parse(searchParams)
  console.log(query);
  return ( 
    <div> 
      <h2>This is About Page</h2>
      {query.name && <p>name is {query.name}</p>}
    </div>
  )
}