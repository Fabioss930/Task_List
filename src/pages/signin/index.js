import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FiLock, FiMail } from "react-icons/fi";
import logo from "./Task-List-(nome) 1.png";
import logosmall from "./Task-List 1.png";
import toast, { Toaster } from "react-hot-toast";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);
    if (res) {
      toast.error("Usuário não cadastrado!");
      return;
    }
    navigate("/home");
  };

  return (
    <C.Page>
      <C.ContentLogo>
        <C.Image>
          <img src={logo} className="App-logo" alt="logo" width={350} />
        </C.Image>
      </C.ContentLogo>
      <C.ContentForm>
        <C.Label>Faça seu Login</C.Label>
        <C.Form>
          {/* <C.Image2>
            <img
              src={logosmall}
              className="App-logo"
              alt="logo"
              style={{ width: 100 }}
            />
          </C.Image2> */}

          {/* <C.LabelImput>
            <div>Email</div>
          </C.LabelImput> */}

          <Input
            type="email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
            placeholder={"Email"}
            icon={FiMail}
          />

          {/* <C.LabelImput>
            <div>Senha</div>
          </C.LabelImput> */}

          <Input
            type="password"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
            placeholder={"Senha"}
            icon={FiLock}
          />

          <C.LabelError>{error}</C.LabelError>

          <Button
            Text="Entrar"
            onClick={handleLogin}
            style={{ background: "#1A202E", marginTop: 7 }}
          />

          <C.Strong>
            <Link to="/signup" style={{ textDecoration: "none", fontSize: 14 }}>
              <div>Criar conta</div>
            </Link>
          </C.Strong>
        </C.Form>
      </C.ContentForm>
      <Toaster />
    </C.Page>
  );
};

export default Signin;
