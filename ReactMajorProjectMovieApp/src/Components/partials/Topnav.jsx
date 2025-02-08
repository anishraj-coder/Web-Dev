import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Topnav() {
    const [query,setQuery]=useState('');
    const [search,setSearch]=useState(null);
    const getSearch=async()=>{
        try {
            const {data} =await axios.get(`/search/multi?query=${query}`);
            setSearch(data.results);
            // console.log(data.results);
        } catch (error) {
            console.log("Error:\t"+error);
        }
    }
    useEffect(()=>{
        getSearch();
    },[query])
  return (
    <div className='w-full h-[10vh] flex items-center justify-center p-10 relative mb-3'>
        <form  action="" className='text-zinc-400 w-[40vw] flex items-center  bg-zinc-600 rounded-full px-6 hover:outline-2 outline-[#6556CD]'>
        <i className="text-2xl ri-search-2-line transition-all duration-500"></i>
        <input onChange={(e)=>setQuery(e.target.value)} value={query} type="text" className='p-5 bg-transparent  outline-none font-g-medium text-left text-xl text-zinc-300 w-full' placeholder='Search Anything'/>
        {query&&<i className="ri-close-fill text-2xl" onClick={()=>setQuery('')} ></i>}
        
        </form>
        {search&&<div className='absolute bg-zinc-200 top-[110%] rounded-xl overflow-x-hidden overflow-y-auto w-1/2 max-h-[50vh]'>
           
          {
            search.map((s,idx)=>{
                const imageUrl=s.poster_path || s.profile_path || s.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${s.poster_path || s.profile_path || s.backdrop_path}`
                : 'https://static-00.iconduck.com/assets.00/no-image-icon-2048x2048-2t5cx953.png'; 
                return (<Link key={idx} className='text-zinc-600 text-xl flex items-start p-5 w-full hover:text-black border-b-2 border-zinc-100'>
           <img className='w-25 mr-5 shadow-xl rounded-xl'src={imageUrl} alt="" /> <span>{s.original_title||s.title||s.name}</span></Link>)
            })
          }
        </div>}
    </div>
  )
}

export default Topnav