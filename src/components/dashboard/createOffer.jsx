import React, { Component,useState } from 'react'
import OverviewOffer from './offerGame';
import OfferPrice from './OfferPrice'
import UploadAgree from './UploadAgree';
import OfferDescreption from './descOffer';
import DeliveryOffer from './deliveryOffer';
import OfferDuration from './OfferDuration';
import axios from 'axios'
import API from '../../config'
import { useEffect } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {useAuthUser} from 'react-auth-kit'

import { useNavigate } from "react-router-dom";


 const CreateOffer = () => {

  const navigate = useNavigate();
  const auth = useAuthUser()
  const [offerStep, setOfferStep] = useState(1);
  const [games, setGames] = useState([]);
  const [gotData,setGotData] = useState(false)


  const [selectedGame, selectGame] = useState(null)
 
  const [allData,setAllData] = useState({})



  const next = () => {
    if(offerStep < 5) {
    setOfferStep(offerStep+1)
    }
  }
 
useEffect(() => {
  axios.get(API + "/user/getstep",
  {headers:{'Authorization':auth().token}})
  .then(res => {
     if(res.data.step > 2) {
        axios.get(API + "/user/findOffer",
        {headers:{'Authorization':auth().token}})
        .then(res => {
           setAllData(res.data)
          })
    }
    setOfferStep(res.data.step)
  })
},[offerStep])




 useEffect(() => {
  if(!gotData)  {
    axios.get(API + "/user/getgamelist")
    .then(res => {
      setGames([...res.data.games])
      setGotData(true)
    })
  }

  // setGames(...['worls'])
 },[games])





    return (
      <>
      {
//         offerStep == 1 && (
//         <div>
//   <div>
//     <div className="create-offer text-white" style={{"min-height":"300px"}}>
//       <div className="container text-white py-8" style={{"margin":"0px"}}>
//         <div className="flex justify-between items-center gap-4 flex-wrap">
//           <div className="font-extrabold text-3xl sm:text-2xl">Create an offer</div>
//         </div>
//       </div>
//       {/**/}
//       <div className="flex-col flex justify-center items-center w-full">
//         <div className="text-xl text-white font-bold p-6">Fill out your personal details to start selling</div>
//         <form className="xs:max-w-[90%] max-w-3xl p-8 gap-4 flex flex-col" style={{"background":"rgb(31, 35, 50)","border-radius":"10px"}}>
//           <div className="grid grid-cols-2 gap-4">
//             <label data-v-a158f60f className>
//               <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">First name</div>
//               <input data-v-a158f60f className="w-full outline-none text-white" autoComplete="first-name" placeholder style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />{/**/}
//             </label>
//             <label data-v-a158f60f className>
//               <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">Last name</div>
//               <input data-v-a158f60f className="w-full outline-none text-white" autoComplete="last-name" placeholder style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />{/**/}
//             </label>
//           </div>
     
//           <div className="grid grid-cols-2 gap-4">
//             <label data-v-a158f60f className>
//               <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">UserName</div>
//               <input data-v-a158f60f className="w-full outline-none text-white" autoComplete="city" placeholder style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />{/**/}
//             </label>
//             <label data-v-a158f60f className>
//               <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">ZIP</div>
//               <input data-v-a158f60f className="w-full outline-none text-white" autoComplete="postal-code" placeholder style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />{/**/}
//             </label>
//           </div>
//           <div data-v-1fb46fc5 className="btn text-center cursor-pointer mt-6 w-full">Submit</div>
//         </form>
//       </div>
//       {/**/}
//     </div>
//   </div>
// </div>

//         ) 
      }
{
  offerStep == 1 && (
    <OverviewOffer 
    error={(e) => {
      toast.error(e)
    }}
    selectedGame={(gm) => selectGame(gm)}
    games={games} next={(product) => {
            axios.post(API + "/user/createGameOffer",{
              game:selectedGame,
              product:product
            },{
          headers:{
            'Authorization':auth().token
          }
        })
        .then(res => {
          //console.log(res)
          next()
        })
    }} />
  )
}


{
  offerStep == 2 && (
    <OfferPrice  next={(price,stock) => {
            axios.post(API + "/user/GameOfferNext",{
              price,
              stock
            },{
          headers:{
            'Authorization':auth().token
          }
        })
        .then(res => {
          //console.log(res)
          next()
        })
    }}/>
  )
}


{
  offerStep == 3 && (
    <OfferDescreption

    error={(e) => {
      toast.error(e)
     }}

     uploadPhoto={(url) => {
            axios.post(API + "/user/photo",{
              photo:url,
            
            },{
          headers:{
            'Authorization':auth().token
          }
        })
        .then(res => {
        })
     }}

    allData={allData}
    next={(desc,title) => {
            axios.post(API + "/user/GameOfferNext2",{
              desc,
              title
            },{
          headers:{
            'Authorization':auth().token
          }
        })
        .then(res => {
          next()
        })
    }}
    />
  )
}


{
  offerStep == 4 && (
    <DeliveryOffer 
    allData={allData}
    next={(data,details) => {
            axios.post(API + "/user/GameOfferNext3",{
               delivery:data,
               details
            },{
              headers:{
                'Authorization':auth().token
              }
            })
        .then(res => {
          next()
        })  

    }}/>
  )
}


{
  offerStep == 5 && (
    <OfferDuration  
    allData={allData}
    next={(duration) => {
            axios.post(API + "/user/GameOfferNext4",{
               duration,
            },{
              headers:{
                'Authorization':auth().token
              }
            })
        .then(res => {
        navigate('/product/'  + allData._id)
        })  



    }}/>
  )
}

      </>
    )
}

export default CreateOffer