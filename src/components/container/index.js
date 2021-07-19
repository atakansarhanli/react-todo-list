import React from 'react'
import { Context } from '../context'
import Card from '../card'
function Container(props) {
  const context = React.useContext(Context)
  return (
    <div>
      {context.data &&
        context.data.map((item) => {
          return (
            <Card
              title={item.konu}
              sideTitle='?'
              content={item.yapilicaklar}
              category={item.oncelik}
              createDate='3 min ago'
              id={item.id}
            />
          )
        })}
    </div>
  )
}

export default Container
