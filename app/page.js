import React from 'react'
import News from './(components)/News';
import Blogs from "./(components)/Blogs";
function Home() {
  return (
    <div className="container">
        <div className="news-blogs-app">
          {/* <News></News> */}
          <Blogs></Blogs>
        </div>
    </div>
  )
}

export default Home

