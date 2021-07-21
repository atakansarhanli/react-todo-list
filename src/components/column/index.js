import React from 'react'
import Card from '../card'
function Column(props) {
  let list = []
  if (props.data) {
    list = props.data.filter((item) => {
      return item.durum === props.durum
    })
  }
  return (
    <div
      className='column card-column'
      style={{ backgroundColor: props.bgColor }}
    >
      <h2 className='ui center aligned header card-column-title'>
        {props.title}
      </h2>
      {list &&
        list.map((item) => {
          return (
            <Card
              title={item.konu}
              content={item.yapilicaklar}
              category={item.oncelik}
              createDate={item.zaman}
              id={item.id}
            />
          )
        })}
    </div>
  )
}
export default Column
