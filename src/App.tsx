import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Achievements } from './pages/Achievements'
import { PageTransition } from './components/PageTransition'
import { MainLayout } from './layouts/MainLayout'

function App() {
  return (
    <Router>
      <MainLayout>
        <PageTransition>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
        </PageTransition>
      </MainLayout>
    </Router>
  )
}

export default App
