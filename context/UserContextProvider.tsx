import React, { useState, ReactNode } from "react";
import UserContext,{User} from "./Usercontext";

interface Props {
  children: ReactNode;
}

const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
