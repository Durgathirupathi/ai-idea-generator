import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Generator from './pages/Generator';
import Results from './pages/Results';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-slate-900 text-slate-200">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/generator" element={<Generator />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
