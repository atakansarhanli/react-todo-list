import React, { useState } from 'react'
import Modal from '../modals/createModal'
import { Context } from '../context'
function Header(props) {
  const context = React.useContext(Context)
  const [show, setShow] = useState(false)

  return (
    <div className='ui fluid container'>
      <div className='ui large secondary pointing menu'>
        <button
          onClick={() => {
            setShow(true)
          }}
          style={{ margin: 3 }}
          className='ui orange icon button'
        >
          <i className='plus icon'></i>
        </button>
        <Modal show={show} setShow={setShow} />
        <a className='active item'>Atakan's To-Do App</a>
        <div className='right item'>
          <a
            className='ui red button'
            onClick={() => {
              context.removeAll()
            }}
          >
            Exit
          </a>
        </div>
      </div>
    </div>
  )
}
export default Header
