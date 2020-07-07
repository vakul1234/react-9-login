import {useContext, createContext} from 'react';


// const AuthContext = createContext();

// const useAuth = ()=> {
//   return useContext(AuthContext);
// }

// export default {AuthContext,useAuth};

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}