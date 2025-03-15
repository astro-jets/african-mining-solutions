"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsPlus, BsX } from "react-icons/bs";
import SucessModal from "@/components/popups/SuccessModal";
import ErrorModal from "@/components/popups/ErrorModal";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const initialApplication: any = {
    mineral: '', company: '', message: ''
}
const NewApplication = () => {
    const [file, setFile] = useState<File>();
    const [isLoading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errMsg, setErrMsg] = useState('')
    const [showErrModal, setShowErrModal] = useState(false);
    const [formData, setFormData] = useState(initialApplication);
    const router = useRouter();

    const handleSubmit = async () => {
        if (!formData.mineral) {
            setShowErrModal(true)
            setErrMsg("Please enter the asset mineral.")
            return
        }
        if (!formData.company) {
            setShowErrModal(true)
            setErrMsg("Please enter the asset company.")
            return
        }
        const data = new FormData();
        data.append('mineral', formData.mineral);
        data.append('company', formData.company);
        data.append('message', formData.message);
        console.log("Req => ", data)
        setLoading(true)
        const res = await fetch(`http://localhost:3000/api/applications/new`, {
            method: "POST",
            body: data,
        });
        console.log("Res => ", res)
        const result = await res.json();
        if (result.status) {
            setFormData(initialApplication);
            setLoading(false)
            setShowModal(true);
        } else {
            setErrMsg(result.message)
            setShowErrModal(true);
            setLoading(false)
        }
    }

    return (
        <DefaultLayout>
            <>
                <SucessModal
                    message="Succefully saved the application."
                    title="Application created"
                    isOpen={showModal}
                    onClose={() => {
                        setShowForm(false)
                        setShowModal(false);
                        router.refresh();
                    }}
                    url=""
                />
                <ErrorModal
                    message={errMsg}
                    title="Failed to create the application"
                    isOpen={showErrModal}
                    onClose={() => {
                        setShowErrModal(false);
                        router.refresh();
                    }}
                    url=""
                />

                <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark flex justify-between items-center">
                        <h3 className="font-medium text-black dark:text-white">
                            Add a new application
                        </h3>
                    </div>
                    <form >
                        <div className="p-6.5">
                            <div className="w-full flex justify-between mb-4">
                                <div className="flex flex-col w-full">
                                    <div className="mb-4.5">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Application Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Application Name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    mineral: e.target.value
                                                })
                                            }}
                                            value={formData.mineral}
                                        />
                                    </div>

                                    <div className="mb-4.5">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Application Company
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Application Company"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    company: e.target.value
                                                })
                                            }}
                                            value={formData.company}
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Message
                                        </label>
                                        <textarea
                                            rows={6}
                                            placeholder="Type your message"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    message: e.target.value
                                                })
                                            }
                                            }
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                onClick={handleSubmit}>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </>
        </DefaultLayout>
    );
}

export default NewApplication;