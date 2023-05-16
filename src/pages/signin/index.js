import React, { useState} from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import {Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from './Task-List-(nome) 1.png';
import logosmall from './Task-List 1.png';

const Signin = () => {

  const{ signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () =>{
    if(!email | !senha){
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);
    if (res) {
      setError(res);
      return;
    }

    navigate("/home");

  };


  return(
    <C.Page>
      <C.Image><img src={logo} className="App-logo" alt="logo" /></C.Image>
    <C.Image2><img src={logosmall} className="App-logo" alt="logo" /></C.Image2>
      <C.Label>Faça seu Login</C.Label>
      <C.Label2>Email</C.Label2>
      <C.Label3>Senha</C.Label3>
      <C.Entry1>
        <Input
        type="email"
        value={email}
        onChange={(e) =>[setEmail(e.target.value), setError("")]}
        />
        </C.Entry1>
        <C.Entry2>
        <Input
        type="password"
        value={senha}
        onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        </C.Entry2>
        <C.LabelError>{error}</C.LabelError>
        <C.Button>
        <Button Text="Entrar" onClick={handleLogin} />
        </C.Button>
          <C.Strong>
            <Link to="/signup">Criar conta</Link>
          </C.Strong>
    </C.Page>
    
  );
};


export default Signin