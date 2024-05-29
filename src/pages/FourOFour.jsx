import { Button } from "antd";

export default function FourOFour() {
    return (
        <div classNam="grid place-items-center text-cetner h-[100vh] w-[100vw]">
            <div classNam="flex flex-col gap-2 text-center">
                <h1 className="text-red-500 text-bold">404 Not Found</h1>
                <a className="" href="/">
                    <Button type="primary">Go Home</Button>
                </a>
            </div>
        </div>
    );
}
