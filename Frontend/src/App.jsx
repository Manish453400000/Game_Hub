import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from "./Pages/signinPage/SigninPage";
import SignUpPage from "./Pages/signupPage/SignUpPage";
import ChessGame from './projects/chessgame/ChessGame';
import HomePage from "./Pages/home/HomePage";
import { Header, Footer } from "./components";
import './sass/main.scss';


function App() {

  return (
    <BrowserRouter>
      {/* <Header /> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/chessgame' element={<ChessGame />} />
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
