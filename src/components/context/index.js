import React from 'react'

export const Context = React.createContext({})

export class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
    this.addData = this.addData.bind(this)
    this.removeAll = this.removeAll.bind(this)
    this.removeOne = this.removeOne.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  componentDidMount() {
    let items = localStorage.getItem('list')
    let a = JSON.parse(items)
    this.setState({ list: a })
  }

  removeAll() {
    this.setState({ list: [] }, () => {
      localStorage.setItem('list', JSON.stringify(this.state.list))
    })
  }

  removeOne(id) {
    let copyArr = [...this.state.list]
    let index = copyArr.findIndex((item) => {
      return item.id == id
    })
    if (index > -1) {
      copyArr.splice(index, 1)
    }
    this.setState(
      {
        list: copyArr,
      },
      () => {
        localStorage.setItem('list', JSON.stringify(this.state.list))
      }
    )
  }
  changeState(id, delta) {
    let copyArr = [...this.state.list]
    let index = copyArr.findIndex((item) => {
      return item.id == id
    })
    if (
      delta + copyArr[index].durum <= 2 &&
      delta + copyArr[index].durum >= 0
    ) {
      copyArr[index].durum = delta + copyArr[index].durum
      this.setState(
        {
          list: copyArr,
        },
        () => {
          localStorage.setItem('list', JSON.stringify(this.state.list))
        }
      )
    }
  }
  addData(element) {
    this.setState(
      (prevState) => {
        if (prevState.list) {
          return { list: [...prevState.list, element] }
        } else return { list: [element] }
      },
      () => {
        localStorage.setItem('list', JSON.stringify(this.state.list))
      }
    )
  }

  render() {
    return (
      <Context.Provider
        value={{
          data: this.state.list,
          addData: this.addData,
          removeAll: this.removeAll,
          removeOne: this.removeOne,
          changeState: this.changeState,
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}
