// import Outlet from react-router-dom para 
// exibir as rotas no componente pai da aplicação 'App.jsx'.
import { Outlet } from 'react-router-dom';

// import my components 
import Navbar from "./components/Navbar/Navbar";

// import CSS
import './App.css'

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <p>All rights reserved for João Victor Parreiras e Matheus Battisti.</p>
      </footer>
    </div>
  )
}

export default App;