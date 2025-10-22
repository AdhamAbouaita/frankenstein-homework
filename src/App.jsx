import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Connections from './pages/Connections'
import Reflection from './pages/Reflection'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}> 
          <Route index element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="connections" element={<Connections />} />
          <Route path="reflection" element={<Reflection />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
