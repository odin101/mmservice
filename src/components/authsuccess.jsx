import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import { useSignIn   } from 'react-auth-kit'
import API from '../config'
import { useState } from 'react';
export default function Authsuccess({navigation,route}) {
    let { token } = useParams();
    const signIn = useSignIn()
    const [login,setLogin] = useState(false)
    const navigate = useNavigate();
  useEffect(() => {

    // alert(token)
    axios.get(API + "/user/dashboard",
    {headers:{Authorization:'JWT ' + token}}
    )
    .then(res => {
        if(!login) {
            setLogin(true)
            signIn(
                    {
                        token:res.data.token,
                        expiresIn:36000,
                        authState:res.data,
                        tokenType: "Bearer",
                    }
                )
                navigate('/')
        }

    }).catch(e => {})
  })

  return (
    <>
    <div data-v-99eddffc className="fixed inset-0 flex items-center justify-center w-full h-full bg-black/50 z-0" style={{"z-index":"999999","position":"absolute","background":"none"}}>
  <div data-v-99eddffc className="lds-ellipsis inline-block relative h-16 w-16">
    <div data-v-99eddffc />
    <div data-v-99eddffc />
    <div data-v-99eddffc />
    <div data-v-99eddffc />
  </div>
</div>
    </>
  );
}
