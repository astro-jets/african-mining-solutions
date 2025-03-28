"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
// Components
import Image from "next/image";
import { BsEnvelope } from "react-icons/bs";
import Link from "next/link";
import ErrorModal from "@/components/popups/ErrorModal";


const Signup = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const [modalMsg, setModalMsg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoader, setShowLoader] = useState(false);
    const router = useRouter()


    const handleSubmit = async (formData: FormData) => {
        setShowLoader(true);
        if (!formData) { return; setShowLoader(false); }
        if (!email || !password) {
            setModalMsg("All credentials must be provided.")
            setModalStatus(true)
            setShowLoader(false);
            return;
        }
        try {
            const res = await signIn("credentials", { email, password, redirect: false })
            if (res?.ok) {
                console.log(res)
                setShowLoader(false);
                router.push("/admin/dashboard")
            } else {
                setModalMsg("Incorrect email or password.")
                setModalStatus(true)
                setShowLoader(false);
            }
        } catch (err) {
            setModalMsg(err as string)
            setModalStatus(true)
            setShowLoader(false);
        }
    }

    return (
        <>
            <ErrorModal
                message={modalMsg}
                title="Could'nt sign you in!"
                isOpen={modalStatus}
                url="/"
                onClose={() => setModalStatus(false)}
            />
            {/* {showLoader && <Loader />} */}
            <div className="font-[sans-serif]">
                <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                    <Image
                        width={561}
                        height={113}
                        src={"/images/logo.png"}
                        alt=""
                        className="mb-4 object-cover overflow-hiddden"
                    />
                    <div className="flex justify-center py-6 items-center gap-4 max-w-6xl w-full">
                        <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                            <form action={handleSubmit} className="space-y-4">
                                <div className="mb-8">
                                    <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                                    <p className="text-gray-500 text-sm mt-4 leading-relaxed">Enter your email and password details to sign in to your account.</p>
                                </div>


                                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                <div className="relative flex items-center">
                                    <input name="email" type="email" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-orange-600" placeholder="Enter user name"
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                    <BsEnvelope size={20} color="gray" className="w-[18px] h-[18px] absolute right-4" />
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                    <div className="relative flex items-center">
                                        <input name="password" type="password" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-orange-600" placeholder="Enter password"
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }} />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                            <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" />
                                        <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <Link href="#" className="text-orange-600 hover:underline font-semibold">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>

                                <div className="!mt-8">
                                    <button type="submit" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none">
                                        Log in
                                    </button>
                                </div>

                                <p className="text-sm !mt-8 text-center text-gray-800">
                                    Don't have an account
                                    <Link href="/signup" className="text-orange-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                                        Register here
                                    </Link>
                                </p>
                            </form>
                        </div>
                        {/* <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                            <img src="https://readymadeui.com/login-image.webp" className="w-full h-full max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;