// import router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import pages
import * as pages from "./pages"

// import base css
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<pages.Home />}></Route>
          <Route path='/about' element={<pages.About />}></Route>
          <Route path='/projects' element={<pages.Projects />}></Route>
          <Route path='/contact' element={<pages.Contact />}></Route>
          <Route path='/terminal' element={<pages.Terminal />}></Route>
          <Route path='/*' element={<pages.NotFound404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
