import { Input, Button } from "antd";
import pb from "../lib/pb.js";

export default function LoginPage() {
    async function handleLogin() {
        const authData = await pb
            .collection("users")
            .authWithOAuth2({ provider: "microsoft" });

        console.log(authData);
    }

    return (
        <div className="h-[100vh] w-[100vw] grid place-items-center bg-slate-700">
            <form className="flex bg-slate-900 flex-col gap-2 max-w-[70%] sm:max-w-[50%] border p-4 rounded-md">
                <h1 className="text-center text-white text-xl">Packer</h1>
                <p className="text-white">Sign in with your Office365 SSO</p>
                <Button onClick={() => handleLogin()} type="primary">
                    Sign in with Microsoft
                </Button>
            </form>
        </div>
    );
}
