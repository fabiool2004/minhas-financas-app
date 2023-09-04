import { useState } from "react";
import Card from "../components/card";
import FormGroup from "../components/formGroup";

function CadastroUsuario() {

  const [controller, setController] = useState({ nome: '', email: '', senha: '', confirmaSenha: '' });

  const cadastrar = () => {
    console.log('Nome: ', controller.nome)
    console.log('Email: ', controller.email)
    console.log('Senha: ', controller.senha)
    console.log('Confirma a Senha: ', controller.confirmaSenha)
  }

  return (
    <Card title='Cadastro de Usuário'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='bs-component'>
            <FormGroup label='Nome: *' htmlFor='inputNome'>
              <input className='form-control'
                type='text'
                id='inputNome'
                name='nome'
                value={controller.nome}
                onChange={(e) => setController({ ...controller, nome: e.target.value })}>
              </input>
            </FormGroup>
            <FormGroup label='Email: *' htmlFor='inputEmail'>
              <input className='form-control'
                type='email'
                id='inputEmail'
                name='email'
                value={controller.email}
                onChange={(e) => setController({ ...controller, email: e.target.value })}>
              </input>
            </FormGroup>
            <FormGroup label='Senha: *' htmlFor='inputSenha'>
              <input className='form-control'
                type='password'
                id='inputSenha'
                name='senha'
                value={controller.senha}
                onChange={(e) => setController({ ...controller, senha: e.target.value })}>
              </input>
            </FormGroup>
            <FormGroup label='Confirme a Senha: *' htmlFor='inputConfirmaSenha'>
              <input className='form-control'
                type='password'
                id='inputConfirmaSenha'
                name='confirmaSenha'
                value={controller.confirmaSenha}
                onChange={(e) => setController({ ...controller, confirmaSenha: e.target.value })}>
              </input>
            </FormGroup>
            <button className='btn btn-success col-md-6' onClick={cadastrar}>Salvar</button>
            <button className='btn btn-danger col-md-6'>Cancelar</button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CadastroUsuario;