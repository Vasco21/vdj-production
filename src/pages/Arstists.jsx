import React, { useState, useEffect } from 'react';
import {Container} from "../Styles/AllmembersStyles.js"
import Card from '../Styles/AllMeberCard.js';
const url = "https://vasco21.github.io/vjd-api/vdj-artists.json"

const Artists = () => {
    const [loading, setLoading] = useState(true)
  const [members, setJobs] = useState([])

  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
       
      </section>
    )
  }

  return (
    <Container className="section">
      <h1 className="msg">Vdj Production <span className="production">Artists</span></h1>
      <div className='Testimonial mtop'>
        <div className='container grid1'>
        {members.map((value, index) => {
            return <Card key={index} {...value} />
          })}
        </div>
      </div>

          
         
  
      </Container>
      
  );
};

export default Artists;