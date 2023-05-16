import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "./Task-List-(nome) 1.png";
import logosmall from "./Task-List 1.png";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signup, signin } = useAuth();

  const handleSignup = () => {
    if (!email | !nome | !senha) {
      setError("Preencha todos os campos");
      return;
    } 

    const res = signup(nome, email, senha);
    if (res) {
      setError(res);
      return;
    }
    toast.success("Conta cadastrada com sucesso!");
    signin(email, senha);
    navigate("/home");
  };

 

  return (
    <>
    <C.Page>
    <C.ContentLogo>
      <C.Image>
        <img src={logo} className="App-logo" alt="logo"  />
      </C.Image>
      </C.ContentLogo>
      <C.ContentForm>
       <C.Form>
      <C.Image2>
        <img src={logosmall} className="App-logo" alt="logo" style={{width:100}} />
      </C.Image2>
      <C.Label>Crie sua conta</C.Label>
      <C.LabelImput>
        <div>Nome</div>
      </C.LabelImput>
      
      <C.Entry1>
        <Input
          type="name"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError('')]}
        />
      </C.Entry1>
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
     
      <Button Text="Cadastrar" onClick={handleSignup} style={{background: '#1A202E', marginTop: 40}} />
   
      <C.Strong>
        <Link to="/" style={{textDecoration: 'none'}}>
          <div >Voltar para o login</div>
        </Link>
      </C.Strong>
      </C.Form>
      <Toaster />
      </C.ContentForm>
     
   </C.Page>
   
   </>
  );
};

export default Signup;
