import React, { useState } from 'react'
import Select from 'react-select'
import { Context } from '../../context'
const options = [
  { value: 'none', label: 'Onemsiz' },
  { value: 'waiting', label: 'bekleyebilir' },
  { value: 'urgent', label: 'acil' },
  { value: 'critical', label: 'kritik' },
]
function idGenerator() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
function Modal(props) {
  const context = React.useContext(Context)
  const [konu, setKonu] = useState('')
  const [oncelik, setOncelik] = useState('')
  const [yapilicaklar, setYapilicaklar] = useState('')
  if (props.show) {
    return (
      <div className='ui active tiny modal create-modal'>
        <i className='close icon'></i>
        <div className='header'>Card Olusturma</div>
        <div className='content'>
          <form className='ui form'>
            <div className='field'>
              <label>Konu</label>
            </div>
            <div className='field'>
              <input
                value={konu}
                onChange={(event) => {
                  setKonu(event.target.value)
                }}
              />
            </div>
            <div className='field'>
              <label>Oncelik</label>
            </div>
            <div className='field'>
              <Select
                options={options}
                onChange={(value) => {
                  setOncelik(value)
                }}
                value={oncelik}
              />
            </div>
            <div className='field'>
              <label>Yapilicaklar</label>
            </div>
            <div className='field'>
              <textarea
                value={yapilicaklar}
                onChange={(event) => {
                  setYapilicaklar(event.target.value)
                }}
              />
            </div>
          </form>
        </div>
        <div className='actions'>
          <div
            className='ui button'
            onClick={() => {
              props.setShow(false)
            }}
          >
            Cancel
          </div>
          <div
            className='ui button'
            onClick={() => {
              const data = {
                konu: konu,
                oncelik: oncelik.value,
                yapilicaklar: yapilicaklar,
                id: idGenerator(),
              }
              context.addData(data)
              props.setShow(false)
            }}
          >
            OK
          </div>
        </div>
      </div>
    )
  } else return null
}

export default Modal
