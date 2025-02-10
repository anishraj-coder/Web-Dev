import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import Loader from './partials/Loader';
import Topnav from './partials/Topnav';
import DropDown from './partials/DropDown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './Cards';

function Popular() {
    const [popular, setPopular] = useState([]);
    const [category, setCategory] = useState('movie');
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    document.title='MovieApp | Popular  '+ category.toUpperCase();
    const getPopular = async (pageNum = 1) => {
        if (loading) return;
        
        try {
            setLoading(true);
            const response = await axios.get(`/${category}/popular?page=${pageNum}`);
          
            if (!response.data || !response.data.results || response.data.results.length === 0) {
                setHasMore(false);
                return;
            }
    
            if (pageNum === 1) {
                setPopular(response.data.results);
            } else {
                setPopular(prev => [...prev, ...response.data.results]);
            }
            setPage(pageNum + 1);
        } catch (error) {
            console.log("Error:\t" + error);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    };

    const fetchMoreData = () => {
        if (!loading && hasMore) {
            getPopular(page);
        }
    };
    
    useEffect(() => {
        getPopular(1);
        
        return () => {
            setPopular([]);
            setPage(1);
            setHasMore(true);
        };
    }, [category]); // Add category as dependency
    
    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setCategory(newCategory);
    };
    
    return (
        <>
            {popular && popular.length > 0 ? (
                <div 
                    className="w-screen h-screen bg-[#1F1E24] p-8 overflow-x-hidden overflow-y-auto"
                    id="scrollableDiv"
                >
                    <div className="flex justify-start items-center">
                        <i
                            className="text-zinc-400 hover:text-[#6556CD] mr-3 font-black text-2xl ri-arrow-left-line cursor-pointer"
                            onClick={() => navigate(-1)}
                        ></i>
                        <h1 className="text-zinc-400 text-3xl font-g-bold">Popular</h1>
                        <Topnav />
                        <DropDown 
                            onChange={handleCategoryChange} 
                            title="Category" 
                            option={["movie", "tv"]} 
                            value={category}
                        />
                    </div>

                    <InfiniteScroll
                        dataLength={popular.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={
                            <h1 className="text-white text-3xl font-g-bold text-center my-5">
                                Loading...
                            </h1>
                        }
                        endMessage={
                            <p className="text-white text-center my-5">
                                <b>You have seen it all!</b>
                            </p>
                        }
                        scrollableTarget="scrollableDiv"
                    >
                        <div className="w-full flex flex-wrap justify-center gap-5">
                            <Cards data={popular} />
                        </div>
                    </InfiniteScroll>
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
}

export default Popular