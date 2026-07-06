import {Home} from './components/Home';
import {Footer} from './components/Footer';
import {AnimatedBackground} from './components/AnimatedBackground';

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 relative overflow-hidden">
            <AnimatedBackground/>
            <main className="relative z-10">
                <Home/>
                <Footer/>
            </main>
        </div>
    );
}
