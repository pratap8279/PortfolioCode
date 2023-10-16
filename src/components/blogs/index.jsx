import React from "react";
import './style.scss'
import Section from '../shared/section/index'
import Blog1 from '../../images/blogs/blog-thumb-1.jpg'
import Blog2 from '../../images/blogs/blog-thumb-2.jpg'
import Blog3 from '../../images/blogs/blog-thumb-3.jpg'
import BlogCard from "./blog-card";
const Blog=()=>{
    return(
        <div>
             <Section id="blogs" title="Projects " >
                <div className="blog-content-wrapper">
                 <BlogCard 
                 user="Ecommerce Web App "
                 date=" Mar 2 2020"
                 image= {Blog1}
                 title="Ecommerce Website with cart function"
                 description=' You Can Buy Anything from This Website Juat Go And Add Some Items '
                 />
                   <BlogCard 
                 user="Porfolio WebSite "
                 date=" November 2 2020"
                 image= {Blog2}
                 title="Portfolio  Website As A online Resume"
                 description=' You Can Check My Skills Or My Project or Read any Technology BLogs '
                 />
                   <BlogCard 
                 user="Blog  Web Aplication"
                 date=" jan 3 2021"
                 image= {Blog3}
                 title="Blog Application WebSite for News"
                 description=' You Can  Can Read Latest News from This Web Application  '
                 />
                </div>
                 </Section>
        </div>
    )
}

export default Blog;