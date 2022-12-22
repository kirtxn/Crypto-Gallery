import React from 'react'
import './Pagination.css'
function Pagination({totalPosts,postsPerPage,currentPage,setCurrentPage}) {

    let pages=[];

    for(let i=1;i<Math.ceil(totalPosts/postsPerPage);i++){
        pages.push(i);
    }
  return (
    <div className='pagination'>
        {pages.map((page,index)=>{
            return(
                <button className={page==currentPage?"active":"button"} key={index} onClick={()=>{setCurrentPage(page)}}>
                   {page}
                </button>
            )
        })}
    </div>
  )
}

export default Pagination
