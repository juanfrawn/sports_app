import './App.css'
import { Routes, Route } from "react-router-dom";
import SportPicker from './components/SportPicker'
import MLB from './components/MLB'
import NFL from './components/NFL'

function App() {
  return (
      <div className="bg-zinc-900 ">
      <Routes>
        <Route path="/" element={<SportPicker />} />
        <Route path="/mlb" element={<MLB />} />
        <Route path="/nfl" element={<NFL />} />
      </Routes>
    </div>
  )
}

export default App
