import { UserProvider, useUser } from "../lib/useUser";

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
