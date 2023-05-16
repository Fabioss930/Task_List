import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "./Task-List-(nome) 1.png";
import logosmall from "./Task-List 1.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);
    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso");
    navigate("/");
  };

  return (
    <C.Page>
    <C.Image><img src={logo} className="App-logo" alt="logo" /></C.Image>
    <C.Image2><img src={logosmall} className="App-logo" alt="logo" /></C.Image2>
      <C.Label>Crie sua conta</C.Label>
      <C.Label1>Nome</C.Label1>
      <C.Label2>Email</C.Label2>
      <C.Label3>Senha</C.Label3>
      <C.Entry1>
        <Input
        type="email"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}/>
      </C.Entry1>
      <C.Entry2>
        <Input
        type="email"
        value={emailConf}
        onChange={(e) => [setEmailConf(e.target.value), setError("")]}/>
      </C.Entry2>

      <C.Entry3>
        <Input
        type="password"
        value={senha}
        onChange={(e) => [setSenha(e.target.value), setError("")]}/>
      </C.Entry3>
        <C.LabelError>{error}</C.LabelError>
        <C.Button>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        </C.Button>
          <C.Strong>
            <Link to="/">Voltar para o login</Link>
          </C.Strong>
   </C.Page>
  );
};

export default Signup;
