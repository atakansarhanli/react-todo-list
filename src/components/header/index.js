import React, { useState } from 'react'
import Modal from '../modals/createModal'
import { Context } from '../context'
function Header(props) {
  const context = React.useContext(Context)
  const [show, setShow] = useState(false)

  return (
    <div className='ui fluid container'>
      <div className='ui small secondary pointing menu'>
        <div className='item'>
          <button
            onClick={() => {
              setShow(true)
            }}
            className='ui orange icon button'
          >
            <i className='plus icon' style={{ paddingRight: '20px' }}></i>
            New Card
          </button>
        </div>

        <Modal show={show} setShow={setShow} />
        <div
          style={{
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          Atakan's To-Do App
        </div>
        <div className='item'>
          <a
            className='ui red button'
            onClick={() => {
              context.removeAll()
            }}
          >
            Clear All
          </a>
        </div>
      </div>
    </div>
  )
}
export default Header
