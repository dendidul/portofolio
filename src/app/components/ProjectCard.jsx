import React,{useState} from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ModalImage from "./ModalImage";
import Image from "next/image";


const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {

  const [showModal, setShowModal] = useState(false);
  const imageUrlData = imgUrl;

  const handleModalChange = () => {
    // console.log(imgUrl)
    // console.log(showModal)
    if(showModal == true)
    {
      setShowModal(false);     
    }
    else{
      setShowModal(true);      
   
    }

  }
    

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        onClick={() => handleModalChange()}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
         
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" 
         
            />
     
        
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
<p>
<br></br>
        

         
          {
       
        showModal ? (
          <>
            {/* <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-black font=semibold"><b>{title}</b></h3>
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
                  
                    <Image src={imgUrl} width={500} height={500} />
                  
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
                    
                  </div>
                </div>
              </div>
            </div> */}
<center>
<div id="static-modal" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    {title}
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal"   onClick={() => handleModalChange()}>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
          
            <div class="p-4 md:p-5 space-y-150" >           

                  <Image
                    src={imgUrl}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} // optional
                  />

            </div>
         
          
        </div>
    </div>
</div>
</center>

          </>
        ) : null}
          
         


</p>

      </div>
    </div>
  );
};

export default ProjectCard;
