import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import GallerySection from '../components/GallerySection';
import EventsSection from '../components/EventsSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';



export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <EventsSection />
      <InfoSection />
      <Footer />
    </div>
  );
}