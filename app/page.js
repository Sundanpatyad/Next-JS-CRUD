import React from 'react';
import Topicslist from './components/Topicslist';

const Page = () => {
  return (

    
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
       <HeroSection/>
      <Topicslist />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl  font-bold mb-6">
        NEXT JS CRUD APP
      </h1>
    </section>
  );
};

export default Page;
