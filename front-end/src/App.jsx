import React from 'react';
import Navbar from './components/Navbar'; 
function App() {
  return (
    <>
      <Navbar/>
      <div className="h-screen bg-gray-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-500">
          Welcome to MyApp!
        </h1>
      </div>
    </>
  );
}
export default App;
