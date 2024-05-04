import React from "react";

export interface User {
  name: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = React.createContext<UserContextType | null>(null);

export default UserContext;
