import React, {useState} from "react";

import UserContext from "./userContext";

const UserContextProvider = ({children}) => { 
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{user, setUser}}> 
      {/* the 'Provider' feature comes in because we declare 'createContext' */}
      {children}
    </UserContext.Provider>
  )
}

 export default UserContextProvider