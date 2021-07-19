import Card from './components/card'

function App() {
  return (
    <div className='App' style={{ padding: '10px' }}>
      <Card
        title='Atakan'
        sideTitle='?'
        content='Alışveriş'
        category='urgent'
        createDate='3 min ago'
      />
      <Card
        title='Atakan'
        sideTitle='?'
        content='Alışveriş'
        category='none'
        createDate='3 min ago'
      />
    </div>
  )
}

export default App
