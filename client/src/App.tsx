import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Index from './pages/Index.tsx';
import Demo from './pages/Demo.tsx';

function App() {

  return (
    <div className='text-app-yellow-50 font-app-regular object-cover'>
      <Navbar />
      <Routes>
        <Route index element={<Index />} />
        {/* <Route index path='/home' element={<Home />} /> */}
        <Route index path='/demo' element={<Demo />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  )
}

export default App
