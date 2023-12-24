import React from 'react'
import './AllmembersStyles'

export default function AllMeberCard(props) {
  return (
    <div className='box'>
        <div className='details'>
          <div className='img'>
            <img src={props.picture.medium} alt=''/>
          </div>
          <div className='names'>
            <h4>{props.names}</h4>
            <span>{props.grade}</span>
          </div>
        </div>
      </div>
  )
}