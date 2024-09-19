import { Hotels } from "./pages/hotels";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./pages/start/Header";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Header />}>
            <Route path="/hotels/all" element={< Hotels />} />
          </Route>
          <Route path="*" element={<h1>Error 404, No existe esa direccion :( </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
