import Card from './components/card'
import Header from './components/header'
import Container from './components/container'
import { Provider } from './components/context'
import './App.css'

function App() {
  return (
    <Provider>
      <Header />
      <div className='App' style={{ padding: '10px' }}>
        <Container />
      </div>
    </Provider>
  )
}

export default App
