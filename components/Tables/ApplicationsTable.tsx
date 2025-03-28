"use client"
import moment from "moment";
import { Application } from "@/types/Application";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { useState } from "react";
import SucessModal from "../popups/SuccessModal";
import ErrorModal from "../popups/ErrorModal";
import { useRouter } from "next/navigation";


const ApplicationsTable = ({ applications }: { applications: Application[] }) => {
  const [maintenaceStatus, setStatus] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const [msg, setMsg] = useState('')
  const [showErrModal, setShowErrModal] = useState(false);
  const router = useRouter()

  if (!applications) { return }

  const handleApplication = async (application: any, status: string) => {
    const data = new FormData();
    data.append('id', application._id);
    data.append('status', status);
    data.append('user', application.user._id);

    setStatus(status)

    const res = await fetch(`http://localhost:3000/api/applications/handle`, {
      method: "PATCH",
      body: data,
    });

    const result = await res.json();


    if (result.applications) {
      setMsg(result.message)
      setShowModal(true);
    } else {
      setMsg(result.message)
      setShowErrModal(true);
    }
  }


  return (
    <>
      <SucessModal message={msg} title={`Sucessfully ${maintenaceStatus} the application`}
        isOpen={showModal}
        onClose={() => { setShowModal(false); router.refresh() }}
        url={""}
      />
      <ErrorModal
        message={msg} title={`Failed to ${maintenaceStatus}  the applicatio`}
        isOpen={showErrModal}
        onClose={() => { setShowModal(false); router.refresh() }}
        url={""}
      />
      <div className=" rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  Company Name
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Company Description
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Application Status
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Application date
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application, key) => (
                <tr key={key}>
                  <td className="border-b space-y-2 border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                    <div className="h-20 w-40 rounded-md">
                      <img
                        src={`/uploads/companies/${application.image}`}
                        className="h-full w-full object-cover"
                        alt="Product"
                      />
                    </div>
                    <h5 className="font-medium text-black dark:text-white">
                      {application.name}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {application.description}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p
                      className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium 
                      ${application.status === "accepted"
                          ? "bg-success text-success"
                          : application.status === "rejected"
                            ? "bg-danger text-danger"
                            : "bg-warning text-warning"
                        }`}
                    >
                      {application.status}
                    </p>
                  </td>

                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {moment(application.createdAt).calendar()}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5 cursor-pointer">
                      <BsCheckCircle size={25} color="green" onClick={() => { handleApplication(application, 'approved') }} />
                      <BsXCircle size={25} color="red" onClick={() => { handleApplication(application, 'rejected') }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ApplicationsTable;
