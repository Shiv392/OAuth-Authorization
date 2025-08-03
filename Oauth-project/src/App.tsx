import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import {CookiesProvider} from 'react-cookie'

function App() {
  return (
    <>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
       <BrowserRouter>
     <AppRoutes />
     </BrowserRouter>
    </CookiesProvider>
    </>
  )
}

export default App
