import Image from "next/image";
import Login from "@/components/login";

export default function Home() {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <Login />
        </div>
    );
}
