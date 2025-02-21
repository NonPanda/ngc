
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
       <div className="mt-16 w-full max-w-sm md:max-w-4xl items-center justify-center flex">
    <div className="relative w-full md:ml-[25%]">
        <input 
            type="text" 
            placeholder="Search AI models..." 
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <Search 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
        />
    </div>
</div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full max-w-xs sm:max-w-full">
            {[...Array(12)].map((_, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <div className="h-32 bg-gray-300 rounded mb-4"></div>
                    <h3 className="text-lg font-semibold text-gray-800">AI Model {index + 1}</h3>
                    <p className="text-sm text-gray-600">Description of the AI model...</p>
                </div>
            ))}
        </div>
    </div>
    );
}
export default Home;