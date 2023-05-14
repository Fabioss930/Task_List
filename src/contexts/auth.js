import { createContext, useEffect, useState } from "react";
import uuid from "react-uuid";
import toast, { Toaster } from "react-hot-toast";

export const Authcontext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_db");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );
      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse E-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }

    localStorage.setItem("users_db", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  const notify = () => {
    const sleep = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    toast.promise(sleep, {
      loading: "Salvando...",
      success: <b>Salvo com sucesso!</b>,
      error: <b>Não foi possivel salvar, favor tente novamente!</b>,
    });
  };

  const handleSaveForm = (form) => {
    const data = new Date();
    const formatData = Intl.DateTimeFormat("pt-br", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(data));
    const newForm = {
      id: String(uuid()),
      title: form.title,
      description: form.description,
      data: formatData,
      status: form.status,
    };

    try {
      const data = localStorage.getItem("task");
      const currentData = data ? JSON.parse(data) : [];
      const dataFormatted = [...currentData, newForm];
      localStorage.setItem("task", JSON.stringify(dataFormatted));
      notify();
    } catch (error) {
      notify();
      console.log(error);
      alert("Atenção!", "Não foi possível salvar, favor tente novamente");
    } finally {
      setOpenModal(false);
    }
  };

  return (
    <Authcontext.Provider
      value={{
        user,
        signed: !!user,
        signin,
        signup,
        signout,
        handleSaveForm,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};
