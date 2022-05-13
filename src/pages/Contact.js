import { useLocation } from 'react-router-dom'

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")
  console.log(name);

  return (
   <div>
      <h2>Hello {name}, Why don't you contact us?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi quae possimus officiis iure incidunt, doloribus provident libero voluptate nobis recusandae sint id ducimus deleniti ad accusamus, rem natus corrupti!</p>
   </div>
  )
}
