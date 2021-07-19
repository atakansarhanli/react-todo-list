import React from 'react'
import { Context } from '../context'
function Card(props) {
  let cardLiteral = {
    none: 'grey',
    waiting: 'green',
    urgent: 'orange',
    critical: 'red',
  }
  const context = React.useContext(Context)
  return (
    <div className={`ui card ${cardLiteral[props.category]}`}>
      <div className='content'>
        <i
          className='right floated close icon close-icon'
          onClick={() => {
            context.removeOne(props.id)
          }}
        />
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
