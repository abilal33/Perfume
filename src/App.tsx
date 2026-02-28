import { useState, useEffect } from 'react';
import Home1 from './Home1';
import Home2 from './Home2';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const isHome2 = currentPath === '#/home2';

  return (
    <>
      {isHome2 ? <Home2 /> : <Home1 />}

      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[100] flex gap-2 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-zinc-200">
        <button
          onClick={() => window.location.hash = '#/'}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!isHome2 ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100'}`}
        >
          Home 1 Let's Compare
        </button>
        <button
          onClick={() => window.location.hash = '#/home2'}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isHome2 ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100'}`}
        >
          Home 2 Aura Mist
        </button>
      </div>
    </>
  );
}
