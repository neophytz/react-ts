import { useState, createContext } from "react";

export const UserContext = createContext<{ user: string, setUser: any }>({
  setUser: () => { },
  user: ""
});

// HOCs - high order components.

export const UserProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [user, setUser] = useState("Jesse Hall");

  const providerValue = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  )
}

