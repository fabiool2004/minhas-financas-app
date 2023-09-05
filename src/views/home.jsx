import { useEffect, useState } from 'react';
import axios from 'axios';


function Home() {

  const [controller, setController] = useState({ saldo: 0 });

  useEffect(() => {
    axios.get('/api/usuarios/5/saldo')
      .then((response) => {
        setController({saldo: response.data});
      })
      .catch(error => {
        console.log(error.response.data);
      } )
  }, [])

  return (
    <div className="jumbotron" style={{ padding: '10px', backgroundColor: '#f8f8f8', borderRadius: '10px', border: '1px solid #dee2e6' }}>
      <h1 className="display-3">Bem vindo!</h1>
      <p className="lead">Esse é seu sistema de finanças.</p>
      <p className="lead">Seu saldo para o mês atual é de R$ {controller.saldo}</p>
      <hr className="my-4" />
      <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="cadastro-usuario" role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
        <a className="btn btn-danger btn-lg" href="lancamentos" role="button"><i className="fa fa-users"></i>  Cadastrar Lançamento</a>
      </p>
    </div>
  )
}

export default Home;