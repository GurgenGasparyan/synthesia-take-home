import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const Edit = lazy(() => import('./pages/Edit'));

function App() {
  return (
    <div className="container">
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
