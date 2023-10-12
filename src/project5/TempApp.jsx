import React, { useEffect, useState } from 'react'

const TempApp = () => {

  const [city , setCity] = useState();
  const [search , setSearch] = useState("Mumbai");
  
  useEffect(() => {
    const fetchApi = async () => {
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1b21e1b59bc41273c1a071ec219cc9c4`
        const response = await fetch(url)
        const resJson = await response.json();
        console.log(resJson);
        setCity(resJson.main);
    }
    fetchApi();
  },[search] )
   
  return (
    <>
       <div className="box">
          <div className='inputData'>
            <input 
               value={search}
               type='seaech'
               className='inputFeild'
               onChange={(event)=> {
                     setSearch(event.target.value)
               }}
            />
          </div>
          {!city ? (
            <p>No Data Found</p>
          ): (
            <div>
            <div className='info'>
            <h2 className='location'>
            <i className="fa-solid fa-street-view"></i>{search}
            </h2>
            <h1 className='temp'>
                {city.temp}
            </h1>
            <h3 className="tempmin_max">
                  Min : {city.temp_min} | Max : {city.temp_max}
            </h3>
           </div>
           <div className='wave-one'></div>
           <div className='wave-two'></div>
           <div className='wave-three'></div>
           </div>
          )}
       
      

       </div>
    </>
  )
}

export default TempApp