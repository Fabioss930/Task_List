import { useContext } from "react";
import { Authcontext } from "../contexts/auth";

const useAuth = () => {
  const context = useContext(Authcontext);

  return context;
};

export default useAuth;