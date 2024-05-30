import useUser from "../lib/useUser";
import CaseList from "../components/CaseList";

export default function HomePage() {
    const [user] = useUser();

    return (
        <p>
            <CaseList />
            <h1>Home Page</h1>
        </p>
    );
}
