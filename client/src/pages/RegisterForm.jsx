import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function RegisterForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formDataToSend = new FormData();
    // formData.append('data', formData);
    console.log("SENDING", formData);

    await axios.post("http://localhost:3000/api/company/create", formData)
    .then(response => {
        console.log('Data successfully posted:', response.data);
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <div className="p-3 flex flex-col justify-center items-center border-r border-[#1f1f21]">
      <div className="my-4 mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
        Register your Company
        {/* Add Different Language State */}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-[#e2e2e2]">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Company Name"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="address" className="text-[#e2e2e2]">
              Company Address
            </label>
            <input
              type="text"
              placeholder="Company Address"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="address"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[#e2e2e2]">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-start gap-8 mt-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-[#e2e2e2]">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="phone"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="address" className="text-[#e2e2e2]">
              Website URL
            </label>
            <input
              type="text"
              placeholder="URL"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="url"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[#e2e2e2]">
              Logo
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-72 h-24 border-2 border-white/30 border-dashed rounded-lg cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="w-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Company Logo
                  </p>
                </div>
                <input id="file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-[#e2e2e2]">
              Industry Domain
            </label>
            <input
              type="text"
              placeholder="Domain"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="domain"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="address" className="text-[#e2e2e2]">
              Description
            </label>
            <input
              type="text"
              placeholder="Description"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="description"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-start gap-8 mt-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[#e2e2e2]">
              Founders Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="founders"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[#e2e2e2]">
              Founding Date
            </label>
            <input
              type="text"
              placeholder="22/2/2024"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="date"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-[1px] bg-white/20 w-96"></div>
        </div>
        <div className="flex flex-col gap-8">
        <div className="flex items-start gap-8 mt-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[#e2e2e2]">
              Environmental Score
            </label>
            <input
              type="text"
              placeholder="Environmental Score"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="envscore"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[#e2e2e2]">
              Social Score
            </label>
            <input
              type="text"
              placeholder="Social Score"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="socialscore"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-start gap-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[#e2e2e2]">
              Company Size
            </label>
            <input
              type="text"
              placeholder="Company Size"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="size"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[#e2e2e2]">
              Governance Score
            </label>
            <input
              type="text"
              placeholder="Governance Score"
              className="p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              id="govscore"
              onChange={handleChange}
            />
          </div>
        </div>
        </div>
        <div className="mt-4">
          <button type="submit" className='flex w-40 text-md items-center justify-center pb-2.5 inset-x-0 border border-transparent dark:border-white/[0.2] rounded-full bg-gradient-to-r from-green-500 to-green-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-3 py-2 hover:text-white hover:shadow-md'>
              Submit
          </button>
      </div>
      </form>
    </div>
  );
}
