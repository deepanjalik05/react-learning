import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
    // const[data, setdata] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/deepanjalik05')
    //   .then(response=> response.json())
    //   .then(data =>{
    //      console.log(data);
    //      setdata(data);
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img className="text-senter" src={data.avatar_url} alt='"git-picture' width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
  const response = await fetch('https://api.github.com/users/deepanjalik05')
  return response.json()
}