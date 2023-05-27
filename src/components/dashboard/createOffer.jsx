import React, { Component,useState } from 'react'
import OverviewOffer from './offerGame';
import OfferPrice from './OfferPrice'
import UploadAgree from './UploadAgree';
import OfferDescreption from './descOffer';
import DeliveryOffer from './deliveryOffer';
import OfferDuration from './OfferDuration';

 const CreateOffer = () => {

  const [offerStep, setOfferStep] = useState(6);


    return (
      <>
      {
        offerStep == 1 && (
        <div>
  <div>
    <div className="create-offer text-white" style={{"min-height":"300px"}}>
      <div className="container text-white py-8" style={{"margin":"0px"}}>
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <div className="font-extrabold text-3xl sm:text-2xl">Create an offer</div>
        </div>
      </div>
      {/**/}
      <div className="flex-col flex justify-center items-center w-full">
        <div className="text-xl text-white font-bold p-6">Fill out your personal details to start selling</div>
        <form className="xs:max-w-[90%] max-w-3xl p-8 gap-4 flex flex-col" style={{"background":"rgb(31, 35, 50)","border-radius":"10px"}}>
          <div className="grid grid-cols-2 gap-4">
            <label data-v-a158f60f className>
              <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">First name</div>
              <input data-v-a158f60f className="w-full outline-none text-white" autoComplete="first-name" placeholder style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />{/**/}
            </label>
            <label data-v-a158f60f className>
              <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">Last name</div>
              <input data-v-a158f60f className="w-full outline-none text-white" autoComplete="last-name" placeholder style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />{/**/}
            </label>
          </div>
     
          <div className="grid grid-cols-2 gap-4">
            <label data-v-a158f60f className>
              <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">UserName</div>
              <input data-v-a158f60f className="w-full outline-none text-white" autoComplete="city" placeholder style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />{/**/}
            </label>
            <label data-v-a158f60f className>
              <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">ZIP</div>
              <input data-v-a158f60f className="w-full outline-none text-white" autoComplete="postal-code" placeholder style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />{/**/}
            </label>
          </div>
          <div data-v-1fb46fc5 className="btn text-center cursor-pointer mt-6 w-full">Submit</div>
        </form>
      </div>
      {/**/}
    </div>
  </div>
</div>

        ) 
      }
{
  offerStep == 2 && (
    <OverviewOffer />
  )
}


{
  offerStep == 3 && (
    <OfferPrice />
  )
}


{
  offerStep == 4 && (
    <OfferDescreption />
  )
}


{
  offerStep == 5 && (
    <DeliveryOffer />
  )
}


{
  offerStep == 6 && (
    <OfferDuration />
  )
}

      </>
    )
}

export default CreateOffer