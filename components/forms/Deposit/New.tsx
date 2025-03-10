"use client"


import Link from "next/link";
import { useState } from "react";
// import Loader from "../common/Loader";
// import SucessModal from "@/app/components/SuccessModal";
import { useRouter } from "next/navigation";
// import ErrorModal from "@/app/components/ErrorModal";

import { BsPlus, BsX } from "react-icons/bs";

const initialAsset = {
    name: '', country: '', long: '0', lat: '0', path: '', description: ''
}
const NewDeposit = () => {
    const [file, setFile] = useState<File>();
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errMsg, setErrMsg] = useState('')
    const [showErrModal, setShowErrModal] = useState(false);
    const [formData, setFormData] = useState(initialAsset);
    const router = useRouter();

    const handleSubmit = async () => {
        if (!file) {
            setShowErrModal(true)
            setErrMsg("Please attach an image of the mine deposit.")
            return
        }
        if (!formData.name) {
            setShowErrModal(true)
            setErrMsg("Please enter the mine deposit name.")
            return
        }
        if (!formData.lat || !formData.long) {
            setShowErrModal(true)
            setErrMsg("Please enter the mine deposit location.")
            return
        }
        const data = new FormData();
        data.append('file', file);
        data.append('name', formData.name);
        data.append('country', formData.country);
        data.append('description', formData.description);
        data.append('lat', formData.lat.toString());
        data.append('long', formData.long.toString());
        console.log("Req => ", data)
        setLoading(true)
        const res = await fetch(`http://localhost:3000/api/deposits/new`, {
            method: "POST",
            body: data,
        });
        console.log("Res => ", res)
        const result = await res.json();
        if (result.status) {
            setFormData(initialAsset);
            setLoading(false)
            setShowModal(true);
        } else {
            setErrMsg(result.message)
            setShowErrModal(true);
            setLoading(false)
        }
    }

    return (
        <>
            {!showForm &&
                <div
                    className="flex space-x-4 w-full p-2 item-center justify-center hover:cursor-pointer"
                    onClick={() => { setShowForm(!showForm) }}
                >
                    <span className="w-8 h-8 bg-stroke rounded-full p-2 flex items-center justify-center">
                        <BsPlus color="white" size={30} />
                    </span>
                    <p className="text-xl text-graydark dark:text-gray">
                        {showForm ? 'cancel entry' : 'add a new mine deposit'}
                    </p>
                </div>
            }
            {showForm &&
                <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark flex justify-between items-center">
                        <h3 className="font-medium text-black dark:text-white">
                            Add a new deposit
                        </h3>
                        <div className="bg-primary w-9 h-9 p-3 rounded-full flex items-center justify-center cursor-pointer" onClick={() => { setShowForm(false) }}>
                            <BsX size={30} color="white" />
                        </div>
                    </div>
                    <form >
                        <div className="p-6.5">
                            <div className="w-full flex justify-between mb-4">
                                <div className="flex flex-col w-3/5">
                                    <div className="mb-4.5">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Country"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    country: e.target.value
                                                })
                                            }}
                                            value={formData.country}
                                        />
                                    </div>
                                    <div className="mb-4.5">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Deposit Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Deposit Name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value
                                                })
                                            }}
                                            value={formData.name}
                                        />
                                    </div>

                                    <div className="flex justify-between">
                                        <div className="mb-4.5 w-[48%]">
                                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                                Longitude (+)
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Longitude (+)"
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        long: e.target.value
                                                    })
                                                }}
                                                value={formData.long}
                                            />
                                        </div>
                                        <div className="mb-4.5 w-[48%]">
                                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                                Latitude (-)
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Latititude (-) "
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        lat: e.target.value
                                                    })
                                                }}
                                                value={formData.lat}
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Mine Deposit Description
                                        </label>
                                        <textarea id="hs-textarea-with-corner-hint"
                                            className="py-3 px-4 block w-full h-60 shadow-lg border-gray-200 border-[1px] rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-form-input"
                                            placeholder="Description of the mine deposit."
                                            value={formData.description}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    description: e.target.value
                                                })
                                            }}

                                        ></textarea>
                                    </div>
                                </div>

                                <div className="flex flex-col  w-[30%]">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Select deposit image
                                    </label>
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400"> PNG or JPG (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden"
                                            onChange={(e) => { setFile(e.target.files?.[0]) }} />
                                    </label>
                                </div>
                            </div>

                            <button type="button" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                onClick={handleSubmit}>
                                Register
                            </button>
                        </div>
                    </form >
                </div >
            }
        </>
    );
}

export default NewDeposit;