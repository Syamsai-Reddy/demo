import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi2";
import { useState } from "react";
import { images, texts } from "../data"; // Ensure you have the images and texts in a data file

function App() {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent((current + 1) % length);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + length) % length);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    const getSlideIndex = (index) => {
        return (current + index) % length;
    };

    return (
        <div className="min-h-screen bg-yellow-500 flex flex-col items-center justify-center">
            <div className=" bg-blue-950 text-white rounded-3xl overflow-hidden w-full max-w-5xl m-8">
                <header className="flex justify-between items-center p-4 bg-gray-900">
                    <div className="text-orange-500 text-xl font-bold">Pherico</div>
                    <nav className="space-x-20 flex justify-center items-center">
                        <a href="#about" className="hover:text-gray-400">About</a>
                        <a href="#career" className="hover:text-gray-400">Career</a>
                        <a href="#blogs" className="hover:text-gray-400">Blogs</a>
                    </nav>
                    <div className="bg-white border-2 rounded-3xl p-4 m-2"></div>
                </header>
                <main className="relative p-8 text-center flex flex-col items-center">
                    <div className="absolute w-1/2  mt-10 top-0 left-0 m-8  text-left">
                        <h1 className="text-white text-2xl md:text-5xl">{texts[getSlideIndex(1)]}</h1>
                    </div>
                    <div className="relative w-full h-96 flex justify-between items-center mb-8">
                        <img
                            src={images[getSlideIndex(0)]}
                            alt="carousel slide"
                            className="absolute w-52 h-52 -mb-40 -ml-6"
                            style={{ bottom: '16px', left: '16px' }}
                        />
                        <img
                            src={images[getSlideIndex(1)]} 
                            alt="carousel slide"
                            className="absolute w-96 h-96 mt-12"
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        />
                        <img
                            src={images[getSlideIndex(2)]}
                            alt="carousel slide"
                            className="absolute w-52 h-52  -mt-26 -mr-6"
                            style={{ top: '16px', right: '16px' }}
                        />
                    </div>
                    <div className="p-4 flex gap-32 text-center text-sm">
                    <button 
                    onClick={prevSlide} 
                    className="cursor-button mx-10 p-4 w-12 h-12 flex items-center justify-center border-2 border-yellow-400 text-yellow-400  rounded-full">
                    <HiOutlineArrowLeft size={24} />
                </button>
                <button 
                    onClick={nextSlide} 
                    className="cursor-button mx-10 p-4 w-12 h-12 flex items-center justify-center border-2 border-yellow-400 text-yellow-400  rounded-full">
                    <HiOutlineArrowRight size={24} />
                </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
