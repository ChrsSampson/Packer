import { UserProvider, useUser } from "../lib/useUser";
import { useContext } from "react";

export default function HomePage() {
    const hi = useUser();

    console.log(hi);

    return (
        <UserProvider>
            <p>
                <h1>Home Page</h1>
            </p>
        </UserProvider>
    );
}
