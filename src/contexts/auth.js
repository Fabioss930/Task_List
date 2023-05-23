import { createContext, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import toast from 'react-hot-toast';

export const Authcontext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [user_id, setUser_Id] = useState();
  const [nameUser, setNameUser] = useState('');
  const [taskEdit, setTaskEdit] = useState({});
  const [taskFilter, setTaskFilter] = useState([]);
  const [openModalEdit, setOpenModalEdit] = useState(true);
  const [openModal, setOpenModal] = useState(true);
  const [openModalDelete, setOpenModalDelete] = useState(true);

  useEffect(() => {
    const userToken = localStorage.getItem('user_token');
    const usersStorage = localStorage.getItem('users_db');

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage).filter(
        (user) => user.email === JSON.parse(userToken).email,
      );
      console.log('hasUser', hasUser);
      const id_user = hasUser.find((item) => item);
      setUser_Id(id_user.id);
      if (hasUser) setUser(hasUser);
      const name = hasUser.find((user) => user);
      const firstName = name.name.split(' ');
      setNameUser(firstName[0]);
    }
  }, []);

  useEffect(() => {}, [user_id]);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db'));
    const hasUser = usersStorage.find((user) => user.email === email);
    setUser_Id(hasUser.id);
    if (hasUser) {
      if (hasUser.email === email && hasUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem('user_token', JSON.stringify({ email, token }));
        setUser({ email, password });

        const firstName = hasUser.name.split(' ');
        setNameUser(firstName[0]);
        return;
      } else {
        return 'E-mail ou senha incorretos';
      }
    } else {
      return 'Usuário não cadastrado';
    }
  };

  const signup = (name, email, password) => {
    try {
      const usersStorage = JSON.parse(localStorage.getItem('users_db'));
      const hasUser = usersStorage?.filter((user) => user.email === email);

      if (hasUser?.length) {
        return 'Já tem uma conta com esse E-mail';
      }
      let newUser;
      let firstName;
      if (usersStorage) {
        newUser = [
          ...usersStorage,
          { id: String(uuid()), name, email, password },
        ];
        firstName = name.split(' ');
        setNameUser(firstName[0]);
      } else {
        newUser = [{ id: String(uuid()), name, email, password }];
        firstName = name.split(' ');
        setNameUser(firstName[0]);
      }
      localStorage.setItem('users_db', JSON.stringify(newUser));
    } catch (error) {
      console.log(error);
    }

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('user_token');
  };

  const notify = () => {
    const sleep = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    toast.promise(sleep, {
      loading: 'Salvando...',
      success: <b>Salvo com sucesso!</b>,
      error: <b>Não foi possivel salvar, favor tente novamente!</b>,
    });
  };

  const notifyEdit = () => {
    const sleep = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    toast.promise(sleep, {
      loading: 'Editando...',
      success: <b>Editado com sucesso!</b>,
      error: <b>Não foi possivel editar este item, favor tente novamente!</b>,
    });
  };

  const handleSaveForm = (form) => {
    const dataKey = `task_user${user_id}`;
    const data = new Date();
    const formatData = Intl.DateTimeFormat('pt-br', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(data));
    const newForm = {
      id: String(uuid()),
      title: form.title,
      description: form.description,
      data: formatData,
      status: form.status,
    };

    try {
      const data = localStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
      const dataFormatted = [...currentData, newForm];
      localStorage.setItem(dataKey, JSON.stringify(dataFormatted));
      notify();
    } catch (error) {
      notify();
      console.log(error);
      alert('Atenção!', 'Não foi possível salvar, favor tente novamente');
    } finally {
      setOpenModal(false);
    }
  };

  const handleDeleteTask = (id) => {
    try {
      const dataKey = `task_user${user_id}`;
      const data = localStorage.getItem(dataKey);
      const response = data ? JSON.parse(data) : [];
      const newData = response.filter((item) => item.id !== id);
      localStorage.setItem(dataKey, JSON.stringify(newData));
      toast.success('Item excluído com sucesso!');
    } catch (error) {
      console.log(error);
      toast.error('Desculpe! Não foi possível excluir este item');
    } finally {
      setOpenModalDelete(false);
    }
  };

  const handleEditTask = (id) => {
    try {
      const dataKey = `task_user${user_id}`;
      const data = localStorage.getItem(dataKey);
      const response = data ? JSON.parse(data) : [];
      const newData = response.find((item) => item.id === id);
      setTaskEdit(newData);
    } catch (error) {
      console.log(error);
      toast.error('Desculpe! Erro ao tentar editar este item, tente novamente');
    }
    return;
  };

  const handleEditTaskSave = (form) => {
    try {
      const dataKey = `task_user${user_id}`;
      const data = localStorage.getItem(dataKey);
      const response = data ? JSON.parse(data) : [];
      const newData = response.map((item) => {
        if (item.id === taskEdit.id) {
          return {
            ...item,
            title: form.title,
            description: form.description,
            status: form.status,
          };
        }
        return item;
      });
      const dataFormatted = JSON.stringify(newData);
      localStorage.setItem(dataKey, dataFormatted);
      notifyEdit();
    } catch (error) {
      console.log(error);
      toast.error('Desculpe! Erro ao tentar editar este item, tente novamente');
    } finally {
      setOpenModalEdit(false);
    }
  };

  const handleFilterTask = (status) => {
    const dataKey = `task_user${user_id}`;
    let newData = '';
    try {
      const data = localStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
     
      if (status === 'pendente') {
        newData = currentData.filter((item) => item.status === 'Pendente');
        setTaskFilter(newData);
      } else if (status === 'progresso') {
        newData = currentData.filter((item) => item.status === 'Em progresso');
        setTaskFilter(newData);
      } else if (status === 'concluido') {
        newData = currentData.filter((item) => item.status === 'Concluído');
        setTaskFilter(newData);
      } else {
        newData = currentData;
        setTaskFilter(newData);
      }
    } catch (error) {
      console.log(error);
      toast.error('Desculpe! Ocorreu um erro, tente novamente');
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
        openModalDelete,
        setOpenModalDelete,
        handleDeleteTask,
        handleEditTask,
        taskEdit,
        setTaskEdit,
        handleEditTaskSave,
        openModalEdit,
        setOpenModalEdit,
        nameUser,
        user_id,
        handleFilterTask,
        taskFilter
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};
