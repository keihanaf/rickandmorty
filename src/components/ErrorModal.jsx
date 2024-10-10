import React from 'react';

function ErrorModal({ message, onClose }) {
    if (!message) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-95 hover:scale-100">
                <h2 className="text-2xl font-bold mb-4 text-red-600 border-b pb-2">Error Occurred</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default ErrorModal;
