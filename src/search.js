import React, { useState } from 'react'
import './Style.css'
const Search = () => {
   
    const [GetSearch , SetSearch] = useState("");
    //  let Search1 = GetSearch;
    let img =` https://source.unsplash.com/600x400/?${GetSearch}`;
    const GetThings = (e) =>{  
        
        SetSearch(e.target.value);
         
    } 
    //   function Search(){ 
    //      return  {Search1};
         
         
    // }
     
  return (
      <>
      <div className='div1'>
          <input type="text" alt='Search' placeholder='Search here!' onChange={GetThings} value={GetSearch} /> 
          <button onClick={Search}>Search</button>
      </div>
      <div className='div2'>
          <img src={img} alt="image" />
      </div>
      
      </>
    
  )
}

export default Search