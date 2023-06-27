import React,{useState,useEffect} from 'react';
import NoResult from '../../img/icons/no-search-results'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './wallet.css'
import CurrencyInput from 'react-currency-input-field';
import API from '../../config.js'
import axios from 'axios'
import Select from 'react-select'
import {useAuthUser} from 'react-auth-kit'


export default function Wallet() {
    const [open, setOpen] = useState(false);
    const [payoutMethod, setPayoutMethod] = useState("Paypal");
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
	const [gotData,setGotData] = useState(false)

  const auth = useAuthUser()

  return (
    <>
    <div>
  <div>
    <div className="container py-8 text-white max-w-full" style={{"margin":"0px"}}>
      <div className="grid grid-cols-2 gap-8 mb-8 sm:grid-cols-1">
        <div className="px-6 py-4" style={{"background":"rgb(31, 35, 50)","border-radius":"10px"}}>
          <div className="flex justify-between font-bold items-center q-px-sm">
            <div>My balance</div>
            <div 
            onClick={() => onOpenModal()}
            data-v-1fb46fc5 className="btn text-center cursor-pointer text-secondary text-sm cursor-pointer" style={{"padding":"5px 14px","font-size":"14px"}}>Withdraw</div>
          </div>
          <div className="mt-4 mb-6 w-full h-0.5 bg-white/10" />
          <div className="flex justify-between items-center q-px-sm gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-md font-weight-light">Available</div>
              <div className="font-bold text-3xl">${auth()?.wallet?(auth().wallet):('0,00')}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xs font-weight-light">Pending</div>
              <div className="text-xl">$0.00</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xs font-weight-light">Rolling</div>
              <div className="text-xl">$0.00</div>
            </div>
            <a href="/dashboard/penalties" className>
              <div className="flex flex-col gap-2">
                <div className="text-xs font-weight-light">Charges &amp; Credits</div>
                <div className="text-xl">$0.00</div>
              </div>
            </a>
          </div>
        </div>
        <div style={{"background":"rgb(31, 35, 50)","border-radius":"10px"}}>
          <div className="px-6 py-4" style={{"background":"rgb(24, 33, 56)","border-radius":"10px 10px 0px 0px"}}>
            <div className="flex justify-between font-bold items-center q-px-sm">
              <div>Payout method</div>
              <div data-v-1fb46fc5 className="btn text-center cursor-pointer cursor-pointer text-secondary text-sm" style={{"padding":"5px 14px","font-size":"14px"}}>Edit</div>
            </div>
          </div>
          <div className="mb-6 w-full h-0.5 bg-white/10" />
          <div className="px-6 pb-4">
            <div className="flex justify-between items-center sm:flex-col sm:items-start sm:gap-4">
              <div className="flex flex-col gap-2">
                <div className="text-xs font-weight-light">Method</div>
                <div className="text-xl" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xs font-weight-light">Account</div>
                <div className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 sm:flex-col sm:items-start">
        <div className="font-extrabold text-2xl sm:text-xl">Payments</div>
        <div className="grow" />
        <div className="col-auto sm:order-3">
          <div data-v-1ebfcef2 className="flex items-center q-gutter-x-xl">
            <div data-v-1ebfcef2 className="id-search-container flex items-center no-wrap px-4">
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full">
          <div className="flex flex-col items-center text-center py-8">
            <NoResult />
            <div className="font-bold text-xl mb-2">Nothing here.</div>
            <div className="opacity-70">You do not have any payments.</div>
          </div>
          {/**/}
        </div>
      </div>
      <div className="font-extrabold text-3xl mt-8 sm:text-2xl">Withdrawals</div>
      <div className="w-full">
        <div className="w-full">
          <div className="flex flex-col items-center text-center py-8">
            <NoResult />
            <div className="font-bold text-xl mb-2">Nothing here.</div>
            <div className="opacity-70">You do not have any withdrawals.</div>
          </div>
          {/**/}
        </div>
      </div>
      {/**/}
    </div>
  </div>
</div>
<Modal open={open} onClose={onCloseModal} center  classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}>
    <div style={{color:'#FFF'}} >
        <h1>Withdraw funds</h1>
        <h2>Choose Payout method</h2>
        <select 
value={payoutMethod}
        onChange={(e) => setPayoutMethod(e.target.value)}
        style={{width:'100%',height:40,
        marginTop:20,
        background:'rgb(25,33,57)',
        padding:8,
        borderRadius:10}}>
  <option value="Paypal">Paypal</option>
  <option value="Crypto">Crypto</option>
</select>
{
 
 payoutMethod == "Paypal" && (
    <input 
        placeholder='Enther your Paypal email'
        style={{
            paddingLeft:10,
            padding:10,
            width:'100%',
            background:'rgb(25,33,57)',height:50,marginTop:50,borderRadius:10}} />
 )
}


 


{
 payoutMethod == "Crypto" &&(
    <select 
    value={payoutMethod}
            // onChange={(e) => setPayoutMethod(e.target.value)}
            style={{width:'100%',height:40,
            marginTop:20,
            background:'rgb(25,33,57)',
            padding:8,
            borderRadius:10}}>
      <option value="BTC">BTC</option>
      <option value="ETH">ETH</option>
    </select>)
}
{
 payoutMethod == "Crypto" &&(
    <input 
        placeholder='Enther your BTC address'
        style={{
            paddingLeft:10,
            padding:10,
            width:'100%',
            background:'rgb(25,33,57)',height:50,marginTop:50,borderRadius:10}} />
 )
}

 <h1 style={{marginTop:20}}>How much you want to withdraw?</h1>

<CurrencyInput
  id="input-example"
  name="input-name"
  prefix="$"
  placeholder="Please enter a number"
  defaultValue={1000}
  style={{paddingLeft:10,
    padding:10,
    width:'100%',
    background:'rgb(25,33,57)',height:50,marginTop:20,borderRadius:10}}
  decimalsLimit={2}
  onValueChange={(value, name) => console.log(value, name)}
/>

    <h1 style={{marginTop:20}}>You will receive your funds within 24 hours upon submitting a withdrawal request.</h1>


     <div style={{display:'flex',height:170,flexDirection:'column',alignItems:'flex-end',justifyContent:'flex-end'}} >
         <div data-v-1fb46fc5 className="btn text-center cursor-pointer text-secondary text-sm cursor-pointer" style={{"padding":"5px 14px","font-size":"14px",height:35}}>Request Withdraw</div>
    </div>

    </div>
      </Modal>
    </>
  );
}
