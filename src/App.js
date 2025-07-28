import React, { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = () => {
  setIsLoggedIn(true); // Skipping credential check for demo
};

  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Client Unified Portal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Portfolio Overview</h2>
          <ul className="text-gray-700">
            <li>Overall Value: ₹1.2 Cr</li>
            <li>Gain/Loss: ₹3.4 L</li>
            <li>Invested Value: ₹1.0 Cr</li>
            <li>Current Value: ₹1.34 Cr</li>
          </ul>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Trends</h2>
          <ul className="text-gray-700">
            <li>Wealth: +7%</li>
            <li>Capital Markets: +3%</li>
            <li>Overseas: +2%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
