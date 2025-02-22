import React from "react";

function ErrorMessage({ message }) {
  return (
    <div className="min-h-screen bg-[#1F1E24] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-center p-8 bg-[#252525] rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
        <p>{message}</p>
      </motion.div>
    </div>
  );
}

export default ErrorMessage;
