import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-[#8ff5ff]/10 shadow-[0_4px_30px_rgba(143,245,255,0.05)]">
      <nav className="flex items-center justify-between px-8 h-20 w-full max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-[#8ff5ff] font-headline uppercase">대학생 공동주문 마켓</Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link className="font-headline tracking-tight text-[#8ff5ff] border-b-2 border-[#8ff5ff] pb-1" to="/">Marketplace</Link>
          <Link className="font-headline tracking-tight text-[#adaaaa] hover:text-[#8ff5ff] transition-colors" to="/">How It Works</Link>
          <Link className="font-headline tracking-tight text-[#adaaaa] hover:text-[#8ff5ff] transition-colors" to="/">Community</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-[#adaaaa] hover:text-[#8ff5ff] transition-colors">search</button>
          <Link to="/login" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:bg-[#00eefc] transition-all duration-300 active:scale-95 font-headline">Get Started</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
