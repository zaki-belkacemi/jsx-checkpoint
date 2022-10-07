import { useState } from 'react'
import './App.css'
import {ProfilePhoto} from './components/Profile/ProfilePhoto'
import {FullName} from './components/Profile/FullName'
import {Adress} from './components/Profile/Adress'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  )
}

export default App
