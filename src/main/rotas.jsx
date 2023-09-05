import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../views/login';
import CadastroUsuario from '../views/cadastroUsuario';
import Home from '../views/home'

function Rotas () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/cadastro-usuario' Component={CadastroUsuario}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;