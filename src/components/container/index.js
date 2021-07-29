import React from 'react'
import { Context } from '../context'
import Card from '../card'
import Column from '../column'
function Container(props) {
  const context = React.useContext(Context)
  return (
    <div className='ui container'>
      <div class='ui grid'>
        <div class='four column row column-container'>
          <Column
            data={context.data}
            durum={0}
            title={'YAPILACAKLAR'}
            bgColor={'#212d40'}
          />
          <Column
            data={context.data}
            durum={1}
            title={'YAPILIYOR'}
            bgColor={'#364156'}
          />
          <Column
            data={context.data}
            durum={2}
            title={'TAMAMLANMIŞ'}
            bgColor={'#7d4e57'}
          />
        </div>
      </div>
    </div>
  )
}

export default Container
