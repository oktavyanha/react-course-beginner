import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

 function Github() {
  
  const data = useLoaderData() // this props load external data before client acces it

  /*const [data, setData] = React.useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/oktavyanha')
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      setData(data)
      
    })
  }, []) */
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Repositories : {data.public_repos}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async (params) => {
  const response = await fetch('https://api.github.com/users/oktavyanha')

  return response.json()
}