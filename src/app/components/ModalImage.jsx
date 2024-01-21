import React, { useState } from "react";
import Image from "next/image";

const ModalImage = (showModalProject,urlImage) => {
  const [showModalImage, setShowModalImage] = useState(true);
 
  //alert(urlImage);
  const myJSON = JSON.stringify(urlImage);
  console.log(myJSON)

  const handleModalChange = () => {
    console.log(showModalImage);
    if(showModalImage == true)
    {
      setShowModalImage(false);     
    }
    else{
      setShowModalImage(true);      
   
    }
  };

  return (
    <>
      {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button> */}
      {showModalProject && showModalImage ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => handleModalChange(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                 
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                  {/* <image src={urlImage} width={100} height={100} className="block text-black text-sm font-bold mb-1">
                     */}
                  {/* <Image src={urlImage} /> */}
                  <p>{urlImage}</p>
               
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => handleModalChange()}
                  >
                    Close
                  </button>
                  {/* <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalImage;
