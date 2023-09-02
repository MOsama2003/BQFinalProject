import React from 'react'
import './home.scss'
import Share from '../../Components/Share/Share'
import Stories from '../../Components/Stories/Stories'
import Posts from '../../Components/Post/Posts'
export default function Home() {
  return (
     <div className="home">
     <Stories/>
     <Share/>
     <Posts/>
     </div>
    );
} 
