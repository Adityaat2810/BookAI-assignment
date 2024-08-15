import { Header } from "./components/header"
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/hi" element={<div>ho</div>} />

      </Routes>
    </div>
  )
}