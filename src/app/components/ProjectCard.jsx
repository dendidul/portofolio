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
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {/* <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link> */}
          {/* <Link
            href=""
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          > */}
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" 
           onClick={() => handleModalChange()}
            />
           
          {/* </Link> */}
        
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
<p>
<br></br>
          {/* <button type="button"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full" 
              onClick={() => handleModalChange('./images/about-image.png')}>buka coy</button> */}

         
          {
        //     showModal?(
        //       <>
       
        //      <ModalImage
        //      showModalProject = {showModal}
        //       urlImage={imageUrlData}
              
        //      ></ModalImage>
           
        // </>
        //       ) : null}

        showModal ? (
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
                    <Image src={imgUrl} width={500} height={500} />
                    {/* <p>{imgUrl}</p>
                  */}
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
          
         


</p>

      </div>
    </div>
  );
};

export default ProjectCard;
