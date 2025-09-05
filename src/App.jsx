import './App.css'
import Navigation from './components/Navigation'
import {  HashRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
function App() {
  return (
    <HashRouter>
      <Navigation/>
      <div className='page'>
        <AppRouter/>
      </div>
    </HashRouter>
  )
}

export default App
