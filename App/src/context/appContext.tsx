import React, { createContext, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { IUser } from '../models/User'

interface IAppContext{
    User: IUser;
    Signed : boolean;
    SignIn: (user : IUser) => void;// Verificar retorno
    SignOut: () => void;
}

const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppProvider: React.FC = ({ children } : any) => {
  const [signed, setSigned] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>({} as IUser)

  const signIn = (loginUser:IUser) => { setUser(loginUser); setSigned(true) }

  const signOut = () => {}

  return (
    <AppContext.Provider value={{
      User: user, Signed: signed, SignIn: signIn, SignOut: signOut
    }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
