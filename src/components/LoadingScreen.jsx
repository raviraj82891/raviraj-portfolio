import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const fullText = "<Raviraj/>";

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                if (prevIndex < fullText.length) {
                    setText(fullText.substring(0, prevIndex + 1));
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        onComplete();
                    }, 1000);
                    return prevIndex;
                }
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]); // Dependency array includes onComplete

    const progress = (index / fullText.length) * 100;

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-6xl font-mono font-bold">
                {text}
                {index < fullText.length && <span className="animate-blink ml-1"> | </span>}
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div
                    className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};