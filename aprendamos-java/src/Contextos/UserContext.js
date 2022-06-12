import { createContext, useState } from "react";

const UserContext = createContext();

function UsuariosContext({children}) {
    const [User, setUser] = useState(window.localStorage.getItem("aprendamos-java:User"));
    const handlerSetUser = (newUser) => {
        setUser(newUser);
        window.localStorage.setItem("aprendamos-java:User", newUser);
    };
    const handlerUpdateNameUser = (newUser) => {
        setUser(newUser);
        window.localStorage.removeItem("aprendamos-java:User");
        window.localStorage.setItem("aprendamos-java:User", newUser);
    }
    const dataProvides = {
        User,
        handlerSetUser,
        handlerUpdateNameUser,
    }
    return ( 
        <UserContext.Provider value={dataProvides}>
            {children}
        </UserContext.Provider>
     );
}

export {UsuariosContext};
export default UserContext;