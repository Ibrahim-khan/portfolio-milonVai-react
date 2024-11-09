import './globals.css';

import Contact from '@/componenets/Contact';
import Header from '@/componenets/Header';
import Navbar from '@/componenets/Navbar';
import WhatIDo from '@/componenets/WhatIDo';


export default function Home() {
  return (
      <main>
            <Navbar />  
            <Header />
            <WhatIDo />
            <Contact />
      </main>
  );
}
