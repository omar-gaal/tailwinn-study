import './App.css';


function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

const Header = () => (
  <nav className="flex justify-between p-4 bg-gray-200">
    {/* Left Section */}
    <ul className="flex space-x-4 list-none">
      <li className="hover:text-blue-500 cursor-pointer">Home</li>
      <li className="hover:text-blue-500 cursor-pointer">About</li>
      <li className="hover:text-blue-500 cursor-pointer">More</li>
    </ul>

    {/* Right Section (optional, e.g., a button or logo) */}
    <div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Login
      </button>
    </div>
  </nav>
);

export default App;
