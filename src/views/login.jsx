import { useState } from 'react';
import Card from '../components/card';
import FormGroup from '../components/formGroup';

function Login () {
  
  const [controller, setController] = useState({ email: '', senha: ''});

  const entrar = () => {
    console.log('Email: ', controller.email)
    console.log('Senha: ', controller.senha)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6' style={{position: 'relative', left: '300px'}}>
          <div className='bs-docs-section'>
            <Card title={'Login'}>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='bs-component'>
                    <fieldset>
                      <FormGroup htmlFor='inputEmail' label='Email: *'>
                        <input type='email'
                          className='form-control'
                          id='inputEmail'
                          aria-describedby='emailHelp'
                          placeholder='Digite o email'
                          value={controller.email}
                          onChange={(e) => setController({...controller, email: e.target.value})}/>
                      </FormGroup> 
                      <FormGroup htmlFor='inputSenha' label='Senha: *'>
                        <input type='password'
                          className='form-control'
                          id='inputSenha'
                          placeholder='Digite a senha'
                          value={controller.senha}
                          onChange={(e) => setController({...controller, senha: e.target.value})}/>
                      </FormGroup>
                      <button className='btn btn-success col-md-6' onClick={entrar}>Entrar</button> 
                      <button className='btn btn-danger col-md-6'>Cadastrar</button> 
                    </fieldset>  
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;