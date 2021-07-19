import React from 'react'

function Card(props) {
  let cardLiteral = {
    none: 'grey',
    waiting: 'green',
    urgent: 'orange',
    critical: 'red',
  }
  return (
    <div className={`ui card ${cardLiteral[props.category]}`}>
      <div className='content'>
        <i className='right floated star icon'></i>
        <div className='header'>{props.title}</div>
        <div className='meta'>
          <span className='right floated time'>{props.sideTitle}</span>
          <span className='category'>{props.category}</span>
        </div>
        <div className='description'>
          <p>{props.content}</p>
        </div>
      </div>
      <div className='extra content'>
        <div className='right floated author'>{props.createDate}</div>
      </div>
    </div>
  )
}
export default Card
