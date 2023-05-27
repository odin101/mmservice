import React,{useCallback} from 'react';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

import {useDropzone} from 'react-dropzone';
export default function UploadModal(props) {
   const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        props.photoUploaded(acceptedFiles[0])
        props.close()

      }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <>
      <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
    <div className="g-dialog-frame g-dialog-frame--active" style={{"z-index":"1002"}}>
      <div className="g-dialog-content" style={{"max-width":"800px","--889a571a":"var(--content-bg)","--023a843a":"var(--content-border-radius)"}}>
        <div data-v-21aceeff className="p-6">
          <div data-v-21aceeff className="flex w-full justify-between">
            <div data-v-21aceeff className="font-bold text-white text-lg">Uploading Image</div>
            <div data-v-1fb46fc5 data-v-21aceeff className="btn text-center cursor-pointer"
            onClick={() => {props.close()}}
            style={{"padding":"5px 14px","font-size":"14px"}}>Close</div>
          </div>

          <div data-v-21aceeff className="flex justify-center items-center full-height">
            <div data-v-21aceeff className="w-full">
          <div {...getRootProps()}>

              <div data-v-21aceeff className="w-full rounded-md py-16 mt-8 cursor-pointer" tabIndex={0} style={{"border":"2px dashed rgb(255, 163, 0)"}}>
                <input data-v-21aceeff accept="image/*" multiple type="file" autoComplete="off" tabIndex={-1} style={{"display":"none"}} />
                <div data-v-21aceeff className="text-center text-white font-bold">Drop the files here ...</div>
            <input {...getInputProps()} />

              </div>
            </div>
          </div>


          {/**/}
        </div>
      </div>
    </div>
    </div>
</Animate>
<div
 onClick={() => {props.close()}}
 className="g-dialog-overlay g-dialog-overlay--active" style={{"z-index":"1001","--6eaca59a":"var(--overlay-bg)"}} />
    </>
  );
}
