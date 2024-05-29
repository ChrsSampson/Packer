import pb from "./pb.js";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

function UserProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(pb.authStore.model || null);

    function signOut() {
        setUser(null);
    }

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
        console.log(user.token);
    }, [user]);

    return (
        <UserContext.Provider value={{ user, signOut }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider };
export const useUser = () => useContext(UserContext);
