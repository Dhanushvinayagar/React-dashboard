import './App.css'
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Container from './components/Container';

function App() {

  return (
    <>
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <Container />
      </div>
    </>
  )
}

export default App
