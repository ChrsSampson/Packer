import pb from "./pb.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useUser() {
    const navigate = useNavigate();

    const [user, setUser] = useState(pb.authStore.model || null);

    function handleLogout() {
        pb.authStore.clear();
        setUser(null);
    }

    useEffect(() => {
        if (!user) {
            navigate("login");
        }
    }, [user]);

    return [user, handleLogout];
}

export default useUser;
