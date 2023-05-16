import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from './Task-List-(nome) 1.png';
import logosmall from './Task-List 1.png';
import toast, { Toaster } from "react-hot-toast";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email | !senha) {
      setError('Preencha todos os campos');
      return;
    }

    const res = signin(email, senha);
    if (res) {
      toast.error("Usúario não cadastrado!")
      return;
    }

    navigate('/home');
  };

  return (
    <C.Page>
      <C.ContentLogo>
      <C.Image>
        <img src={logo} className="App-logo" alt="logo" />
      </C.Image>
      </C.ContentLogo>
      <C.ContentForm>
       <C.Form>
      <C.Image2>
        <img src={logosmall} className="App-logo" alt="logo" style={{width:100}}/>
      </C.Image2>
      <C.Label>Faça seu Login</C.Label>
      <C.LabelImput>
        <div>Email</div>
      </C.LabelImput>
      
      <C.Entry1>
        <Input
          type="email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
      </C.Entry1>
      <C.LabelImput>
        <div>Senha</div>
      </C.LabelImput>
      <C.Entry1>
        <Input
          type="password"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError('')]}
        />
      </C.Entry1>
      <C.LabelError>{error}</C.LabelError>
     
        <Button Text="Entrar" onClick={handleLogin} style={{background: '#1A202E', marginTop: 40}} />
   
      <C.Strong>
        <Link to="/signup" style={{textDecoration: 'none'}}>
          <div >Criar conta</div>
        </Link>
      </C.Strong>
      </C.Form>
      </C.ContentForm>
      <Toaster />
    </C.Page>
  );
};

export default Signin;
