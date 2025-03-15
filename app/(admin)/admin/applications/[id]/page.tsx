import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import moment from "moment";
import Image from "next/image";
import { fetchApplicationById } from "@/services/applications";
import { Application } from "@/types/Application";

type paramProps = {
    params: Params
}

const SingleApplication = async ({ params }: paramProps) => {
    const id = params.id;
    const application: Application = await fetchApplicationById(id);
    return (
        <DefaultLayout >
            {application ?
                <>
                    <Breadcrumb pageName={`Application Request | ${application.mineral}`} />
                    <div className="w-full flex justify-center">
                        <div className="w-full h-full flex justify-between bg-boxdark p-2 rounded-2xl shadow-3 shadow-boxdark">
                            <div className="flex items-center text-white space-y-2 flex-col text-2xl">
                                <div className="flex flex-col w-11/12 space-y-2">
                                    <p className="text-3xl font-bold">Company</p>
                                    <p className="text-3xl font-bold">{application.company}</p>
                                    <p>Requested On: {moment(application.createdAt).calendar()}</p>
                                    <p className="text-3xl font-bold">Message</p>
                                    <p className="mt-8 text-md">
                                        {application.message}
                                    </p>

                                    {/* <HandleMaintenance application={application} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </> :
                <div className="px-4 mx-auto max-w-screen-xl justify-center items-center h-full flex flex-col">
                    <Image
                        width={561}
                        height={113}
                        src={"/images/logo.png"}
                        alt=""
                        className="mb-4 object-cover overflow-hiddden"
                    />
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-primary">Unrecognized application.</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that application. Get back to the dashboard. </p>
                        <a href="/admin/dashboard" className="inline-flex text-primary bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to the dashboard</a>
                    </div>
                </div>
            }
        </DefaultLayout>
    );
}

export default SingleApplication;