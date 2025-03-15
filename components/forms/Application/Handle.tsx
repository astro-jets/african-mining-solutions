"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Application } from "@/types/Application";
import SucessModal from "@/components/popups/SuccessModal";
import ErrorModal from "@/components/popups/ErrorModal";


const HandleApplication = ({ application }: { application: Application }) => {


    const router = useRouter();
    const [maintenaceStatus, setStatus] = useState<string>();

    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errMsg, setErrMsg] = useState('')
    const [showErrModal, setShowErrModal] = useState(false);


    const handleSubmit = async (status: string) => {
        const data = new FormData();
        data.append('id', application?._id as string);
        data.append('status', status);

        setStatus(status)

        setLoading(true)
        const res = await fetch(`http://localhost:3000/api/applications/handle`, {
            method: "PATCH",
            body: data,
        });

        const result = await res.json();


        if (result.applications) {
            setLoading(false)
            setShowModal(true);
        } else {
            setShowErrModal(true);
            setLoading(false)
        }
    }

    return (
        <>
            <SucessModal
                message={`Succefully ${maintenaceStatus} the application request.`}
                title="Message sent"
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false);
                    router.push('/admin/applications');
                }}
                url=""
            />
            <ErrorModal
                message={errMsg}
                title={`Failed to ${maintenaceStatus} the request.`}
                isOpen={showErrModal}
                onClose={() => {
                    setShowErrModal(false);
                    router.refresh();
                }}
                url=""
            />
            <div className="flex justify-between space-x-4 w-full">
                <p
                    onClick={() => { handleSubmit('approved') }}
                    className="w-2/3  cursor-pointer p-2 text-white bg-blue-500 rounded-2xl text-center">
                    Approve
                </p>
                <p
                    onClick={() => { handleSubmit('rejected') }}
                    className="w-2/3  cursor-pointer p-2 text-white bg-primary rounded-2xl text-center">
                    Reject
                </p>
            </div>
        </>
    );
}

export default HandleApplication;