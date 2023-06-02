import React,{useCallback, useState} from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import {useDropzone} from 'react-dropzone';
import UploadModal1 from './uploadModal';
import DefaultAvatar from '../../img/icons/avatar-placeholder.svg'
import {isMobile} from 'react-device-detect';
import MissingImg from '../../img/icons/missingImg.webp'
import {useAuthUser} from 'react-auth-kit'
import { useEffect } from 'react';
import storage from "../../firebaseConfig.js"
import {ref} from "firebase/storage"

import {
  getDownloadURL,
  uploadBytesResumable 
} from "firebase/storage";



export const OfferDescreption = (props) => {

   const auth = useAuthUser()
   const [percent, setPercent] = useState(0);

   const [UploadModal,setUploadModal] = useState(false)
   const [photo,setUploadedPhoto] = useState(false)
   const [title,setTitle] = useState("")
   const [desc,setDesc] = useState("")
  const [hd,setHd] = useState(false)
  const [PhotoURL,setPhotoUrl] = useState(false)

   useEffect(() => {
    if(!hd) {
        if(props?.allData?.desc){
          setHd(true)
           setDesc(props?.allData?.desc)
        }
    }





// const storageRef = ref(storage,`/users/${auth()._id}/productImages/${props.allData._id}`)

//     getDownloadURL(storageRef).then(data => {
//       alert(data)
//    })



   },[desc])


   function handleUpload(file) {
       
          if (!file) {
            alert("Please choose a file first!")
        }

        const storageRef = ref(storage,`/users/${auth()._id}/productImages/${props.allData._id}`)
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                props.uploadPhoto(url)
                });
            }
        ); 
}


  return (
<>

    <div className="container flex flex-col">
         <div className="container text-white py-8" style={{"margin":"0px"}}>
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <div className="font-extrabold text-3xl sm:text-2xl">Create an offer</div>
        </div>
      </div>
  <div className="flex gap-4 items-center justify-evenly container">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-transparent">1</div>
      <div className="font-bold sm:hidden">Overview</div>
    </div>
    <div>
      <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-transparent">2</div>
      <div className="font-bold sm:hidden">Details and price</div>
    </div>
    <div>
      <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-secondary text-secondary">3</div>
      <div className="font-bold sm:hidden">Description</div>
    </div>
    <div>
      <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-transparent">4</div>
      <div className="font-bold sm:hidden">Delivery</div>
    </div>
    <div>
      <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-transparent">5</div>
      <div className="font-bold sm:hidden">Offer duration</div>
    </div>
    {/**/}
  </div>
  <div className="flex gap-8 my-5 items-start sm:flex-col sm:items-center">
    <div className="rounded-lg p-6 grow sm:w-full" style={{"background":"rgb(31, 35, 50)"}}>
      {/**/}
      {/**/}
      {/**/}
      <div data-v-3ccce441>
        <div data-v-3ccce441 className="text-white flex items-center font-bold text-xl mb-4 gap-2">
          <svg data-v-3ccce441 width={23} height={19} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path data-v-3ccce441 d="M13.75 1V5C13.75 5.26522 13.8685 5.51957 14.0795 5.70711C14.2905 5.89464 14.5766 6 14.875 6H19.375" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path data-v-3ccce441 d="M5.875 14H14.875M5.875 10H14.875M17.125 18H3.625C3.02826 18 2.45597 17.7893 2.03401 17.4142C1.61205 17.0391 1.375 16.5304 1.375 16V3C1.375 2.46957 1.61205 1.96086 2.03401 1.58579C2.45597 1.21071 3.02826 1 3.625 1H13.75L19.375 6V16C19.375 16.5304 19.1379 17.0391 18.716 17.4142C18.294 17.7893 17.7217 18 17.125 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>Description
        </div>
        <label data-v-3ccce441>
          <div data-v-3ccce441 className="input-label flex justify-between items-center gap-1 sm:flex-col sm:items-start">
            <div data-v-3ccce441>Product Title (Characters max: 50)</div>
            <div data-v-3ccce441 className="text-red-500 text-xs">The product title mustn't refer to any website or service outside autoMMservice!</div>
          </div>
          <label data-v-a158f60f data-v-3ccce441 className>
            {/**/}
            <input data-v-a158f60f className="w-full outline-none text-white" 
            onChange={(e) => {
              if(e.target.value.length < 51) {
               setTitle(e.target.value)
              }
            }}
            value={title}
            placeholder="Add words that you think buyers will search for your title for maximum exposure" style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />
            {/**/}
          </label>
        </label>
        <label data-v-3ccce441 className="mt-4 block">
          <div data-v-3ccce441 className="input-label flex justify-between items-center gap-1 sm:flex-col sm:items-start">
            <div data-v-3ccce441>Briefly describe your offer</div>
            <div data-v-3ccce441 className="text-xs text-red-500">The product description mustn't contain any reference to services, websites or entities outside or unrelated to autoMMservice!</div>
          </div>
          <textarea data-v-3ccce441 id="ckeditor" name="ckeditor" label="Product description for buyer" style={{"min-height":"400px","visibility":"hidden","display":"none"}} defaultValue={""} />
          <div id="cke_ckeditor" className="cke_1 cke cke_reset cke_chrome cke_editor_ckeditor cke_ltr cke_browser_webkit" dir="ltr" lang="en" role="application" aria-labelledby="cke_ckeditor_arialbl">

          {/* <Editor editorState={editorState} onChange={setEditorState} /> */}
            <ReactQuill
                theme='snow'
                value={desc}
                onChange={(e)=>{ setDesc(e)}}
                style={{minHeight: '250px',height:250}}
        />
      
          </div>
        </label>
        <div data-v-3ccce441 className="flex justify-between items-center mt-12" style={{
          paddingTop:isMobile?"50px":"0px"
        }}>
          <div data-v-3ccce441 className="text-white flex items-center font-bold text-xl mb-2 gap-2">
            <svg data-v-3ccce441 width={23} height={19} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path data-v-3ccce441 d="M13.75 1V5C13.75 5.26522 13.8685 5.51957 14.0795 5.70711C14.2905 5.89464 14.5766 6 14.875 6H19.375" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path data-v-3ccce441 d="M5.875 14H14.875M5.875 10H14.875M17.125 18H3.625C3.02826 18 2.45597 17.7893 2.03401 17.4142C1.61205 17.0391 1.375 16.5304 1.375 16V3C1.375 2.46957 1.61205 1.96086 2.03401 1.58579C2.45597 1.21071 3.02826 1 3.625 1H13.75L19.375 6V16C19.375 16.5304 19.1379 17.0391 18.716 17.4142C18.294 17.7893 17.7217 18 17.125 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>Pictures (Drag & Drop to change order)
          </div>
          <div data-v-1fb46fc5 data-v-3ccce441
          onClick={() => {setUploadModal(true)}}
           className="btn text-center cursor-pointer">Upload</div>
        </div>
        <div data-v-3ccce441 className="md:grid-cols-1 my-4 gap-4 flex cursor-pointer" />
        {/**/}
      </div>
      {/**/}
      {/**/}

 {
  photo && (
    <div data-v-3ccce441 className="md:grid-cols-1 my-4 gap-4 flex cursor-pointer">
      <div data-v-3ccce441 className="flex flex-col">
        <img data-v-3ccce441 src={window.URL.createObjectURL(photo)} format="webp" loading="lazy" style={{"width":"100px"}} />
        <div
         onClick={() => setUploadedPhoto(null)}
         data-v-3ccce441 className="text-center text-xs uppercase font-bold hover:text-secondary">Remove</div>
      </div>
    </div>
  )
 }




    </div>
  
    <div className="flex flex-col items-start">
      <div className="mb-4 font-bold">Offer preview</div>
      <a data-v-530e65a0 className="flex flex-col h-full w-full relative group" style={{"min-height":"230px","width":"300px"}}>
        <div data-v-530e65a0 className="rounded-xl w-full min-h-full duration-300 z-10" style={{"background":"rgb(31, 35, 50)"}}>
          <div data-v-530e65a0 className="flex flex-col col-grow relative h-full gap-3 py-5">
            <div data-v-530e65a0 className="flex no-wrap items-center gap-4 px-5">
              <div data-v-530e65a0 className="rounded-md shrink-0 flex justify-center items-center w-20 h-20 overflow-hidden" style={{"max-width":"80px","background":"rgb(37, 42, 61)"}}>


                {
                  photo?(
                <img src={window.URL.createObjectURL(photo)} />
                  ):(
                  <div data-v-530e65a0 className="inside-image w-full h-full"
                  style={{
                    background:`url(${DefaultAvatar}) no-repeat`,
                    backgroundPosition:"50% 50%"
                  }} />
                  )
                }

              </div>
              {/**/}
              <div data-v-530e65a0 className="font-bold leading-6 text-ellipsis overflow-hidden float-left w-full" style={{"height":"70px"}}>
                {/**/}
                <div data-v-530e65a0 className="float-none">{title}</div>
              </div>
            </div>
            <div data-v-530e65a0 className="px-5 overflow-hidden" style={{"max-height":"24px"}}>
              <div data-v-2546539f data-v-530e65a0 className="attributes-group flex flex-wrap items-center text-center mb-2 gap-1">
                {/**/}
                {/**/}
              </div>
            </div>
            <div data-v-530e65a0 className="price-group flex items-center justify-between pt-2 px-5">
              <div data-v-530e65a0 className="flex items-center gap-2">
                <div data-v-530e65a0 className="w-4 h-4">
                  <img data-v-530e65a0 src="/img/icons/timer.svg" alt height={16} width={16} />
                </div>
                <div data-v-530e65a0 className="text-xs font-light text-white/70">Duration</div>
              </div>
              <div data-v-530e65a0 className="font-bold text-white/80">${props.allData.price}</div>
            </div>
            <div data-v-530e65a0 className="w-full h-px" style={{"background":"rgb(23, 29, 41)"}} />
            <div data-v-530e65a0 className="flex items-center justify-between text-white/70 px-5">
              <div data-v-530e65a0 className="flex gap-2 items-center relative h-10">
                <div data-v-530e65a0 className="relative">
                  {/**/}
                  <img data-v-530e65a0 
                  
                src={auth().profileImage?auth().profileImage:MissingImg }
                  format="webp" loading="lazy" height={36} width={36} alt="Mr Mrodin ODIN" style={{"width":"36px","height":"36px","border-radius":"100%","border":"3px solid rgba(255, 255, 255, 0.12)"}} />
                </div>
                <div data-v-530e65a0 className="flex flex-col">
                  <div data-v-530e65a0 className="text-sm">{auth().username}</div>
                  <div data-v-530e65a0 className="flex items-center gap-2">
                    {/**/}
                    {/**/}
                  </div>
                </div>
                {/**/}
                {/**/}
              </div>
              {/**/}
            </div>
            {/**/}
          </div>
        </div>
      </a>
      <div className="mt-4">
        <div>Estimated income: <span className="font-bold text-secondary">${(props.allData.price-0.9).toFixed(2)}</span>
        </div>
        <a href="/dashboard/account/Verification" rel="noopener noreferrer" target="_blank">
          <div className="line-through opacity-70 decoration-secondary decoration-2">Estimated income as Verified: <span className="font-bold text-secondary">${props.allData.price}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div className="flex justify-end my-4 w-full gap-4">
    <div data-v-1fb46fc5 className="btn text-center cursor-pointer secondary">Back</div>
    {/**/}
    <div
    onClick={ () =>
      {
         if(!desc) {
            props.error("You need to write description!")
         }else{
          if(!title) {

            props.error("You need to write title!")
          }else{
           if(!photo) {
            props.error("You need to upload photo!")
           }else{
             props.next(desc,title)
           }

          }
         }

      }}
    data-v-1fb46fc5 className="btn text-center cursor-pointer">Save &amp; Continue</div>
  </div>
</div>
{
    UploadModal && (
      <UploadModal1       photoUploaded={(photo) => {
        console.log(photo)
        setUploadedPhoto(photo)
        handleUpload(photo)
      }}
      close={() => {setUploadModal(false)}} 

      />
    )
}

</>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default  OfferDescreption