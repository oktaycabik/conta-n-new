import React from 'react'
import blogs from "../data/blog.json"
import Link from 'next/link'
const Blog = () => {
  return (
    <div className="container pl-5 pr-5">
    <div className="row pl-5 pr-5 justify-content-center">
      <div className="p-2 bg-dark mt-3  col-12">
        <h1 className="text-light">Blog</h1>
      </div>
    </div>
    <div className="row pl-5 pr-5 mt-3 mb-4">

    {
    blogs.map(blog=>(
    <>
    <div className='col-lg-4 col-md-6 col-12'>
     <div className='blog-card'>
        <Link href={`/blog/${blog.slug}`}>
       <div className='blog-card-image'>
        <img src={blog.image} className="w-100 blog-image"/>
       </div>
       </Link>
       <div className='blog-card-body'>
        <h3 className='blog-card-title'>{blog.title}</h3>
        <p className='blog-card-desc'>{blog.desc}</p>
        <span className='blog-card-btn'>WEITERLESEN »</span>
       </div>
     </div>
    </div>
    </>
    ))
    }
   
    </div>
  </div>
  )
}

export default Blog