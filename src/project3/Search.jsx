import React, { useState } from 'react'
import Sresult from './Sresult';

const Search = () => {
    const [img , setImage] = useState();

    const inputEvent = (event) => {
        setImage(event.target.value);
    }
  return (
    <>
       <div className='searchbar'>
       <input 
       type='text' 
       placeholder='Search Anything' 
       onChange={inputEvent}
       value={img}
       />
       <Sresult name={img}/>
       </div>
    </>
  )
}

export default Search
