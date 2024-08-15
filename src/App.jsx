import { Header } from "./components/header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./pages/pricing";


export default function App() {
  return (
    <div>
      <Header/>

      <Routes>

        <Route path="/" element={<div>Home</div>} />
        <Route path="/overview" element={<div>ho</div>} />
        <Route path="/authentication" element={<div>ho</div>} />
        <Route path="/endpoints" element={<div>ho</div>} />
        <Route path="/tutorial" element={<div>ho</div>} />
        <Route path="/pricing" element={<Pricing/>} />


      </Routes>
    </div>
  )
}