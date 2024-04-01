import React from 'react'
import useFetch from '../CustomHooks/useFetch'

const CustomHook = () => {
    const [data]=useFetch('https://jsonplaceholder.typicode.com/users');
    console.log(data);
    
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.name}  --- {item.email}</p>;
        })}
    </>
  )
}

export default CustomHook
