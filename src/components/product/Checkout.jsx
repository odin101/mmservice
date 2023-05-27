import React,{useEffect,useState} from 'react';
import PaypalIcon from '../../img/icons/paypal.png'
import CryptoIcon from '../../img/icons/crypto.png'
import ClockIcon from '../../img/icons/clock.svg'
export default function Checkout() {
  const [load, setLoad] = useState(true);



 






  return (
    <>
    <div className="g-dialog-frame g-dialog-frame--active" style={{"z-index":"1002"}}>
  <div className="g-dialog-content g-dialog-content--fullscreen" style={{"--889a571a":"var(--content-bg)","--023a843a":"var(--content-border-radius)"}}>
    <div data-v-299c9395 className="text-white" style={{"background":"rgb(23, 29, 41)","min-height":"100vh"}}>
      <div data-v-299c9395 className="relative z-2" style={{"background":"rgb(31, 35, 50)","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 34px"}}>
        <div data-v-299c9395 className="container flex items-center h-20 sm:h-16">
   
          <div data-v-299c9395 className="grow" />
          <div data-v-1fb46fc5 data-v-299c9395 className="btn text-center cursor-pointer secondary font-bold cursor-pointer" style={{"padding":"5px 14px","font-size":"14px"}}>Back</div>
        </div>
      </div>
      <div data-v-299c9395 style={{"background":"rgb(13, 18, 38)"}}>
        <div data-v-299c9395 className="container flex items-center justify-between gap-8 py-8 sm:flex-col sm:items-stretch sm:py-4">
          <div data-v-299c9395 className="flex flex-col gap-4 sm:hidden">
            <div data-v-299c9395 className="text-3xl font-extrabold">Checkout</div>
          </div>
          <div data-v-299c9395 className="flex items-center w-full grow" style={{"max-width":"600px"}}>
            <div data-v-299c9395 className="icon-wrapper flex items-center justify-evenly w-full no-wrap">
              <div data-v-299c9395 className="flex flex-col items-center gap-2 text-center">
                <div data-v-299c9395 className="picture-border flex items-center justify-center">
                  <svg data-v-299c9395 width={28} height={26} viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path data-v-299c9395 fillRule="evenodd" clipRule="evenodd" d="M11.4958 19.7285C10.0963 19.7285 8.94971 20.875 8.94971 22.2745C8.94971 23.674 10.0963 24.8207 11.4958 24.8207C12.6998 24.8207 13.7157 23.9719 13.9764 22.8437H18.2898C18.5504 23.9719 19.5664 24.8207 20.7703 24.8207C22.1699 24.8207 23.3164 23.674 23.3164 22.2745C23.3164 20.875 22.1699 19.7285 20.7703 19.7285C19.5588 19.7285 18.5375 20.5879 18.2848 21.7265H13.9813C13.7286 20.5879 12.7073 19.7285 11.4958 19.7285V19.7285ZM11.4958 20.8457C12.2915 20.8457 12.9246 21.4788 12.9246 22.2745C12.9246 23.0703 12.2915 23.7035 11.4958 23.7035C10.7001 23.7035 10.067 23.0703 10.067 22.2745C10.067 21.4788 10.7001 20.8457 11.4958 20.8457ZM20.7703 20.8457C21.5661 20.8457 22.1992 21.4788 22.1992 22.2745C22.1992 23.0703 21.5661 23.7035 20.7703 23.7035C19.9746 23.7035 19.3415 23.0703 19.3415 22.2745C19.3415 21.4788 19.9746 20.8457 20.7703 20.8457Z" fill="#FFA300" stroke="#FFA300" strokeWidth="0.8" />
                    <path data-v-299c9395 fillRule="evenodd" clipRule="evenodd" d="M1.55859 1.1792C1.25013 1.1792 1.00006 1.42923 1 1.73769C0.999951 2.04619 1.24999 2.29633 1.55849 2.29639L3.77264 2.29658C4.39992 4.80534 5.02671 7.31424 5.65392 9.82292L7.25165 16.2137C7.54219 17.3759 8.59245 18.196 9.79041 18.196H22.4755C23.6735 18.196 24.7238 17.3759 25.0144 16.2137L26.9532 8.45867C27.2013 7.46621 26.4306 6.4792 25.4076 6.47919H6.85839C6.55247 6.4792 6.27002 6.56893 6.02972 6.71922L4.75077 1.60251C4.68858 1.35385 4.46516 1.17941 4.20884 1.1794L1.55859 1.1792ZM6.85839 7.59638H25.4076C25.7307 7.59638 25.9477 7.87429 25.8693 8.18771L23.9305 15.9429C23.7629 16.6133 23.1666 17.0788 22.4755 17.0788H9.79041C9.09935 17.0788 8.50312 16.6133 8.33551 15.9429C7.68923 13.3575 7.04279 10.7722 6.3966 8.18691C6.31882 7.87382 6.53561 7.59638 6.85839 7.59638L6.85839 7.59638Z" fill="#FFA300" stroke="#FFA300" strokeWidth="0.8" />
                    <path data-v-299c9395 fillRule="evenodd" clipRule="evenodd" d="M19.6607 10.1022C19.5602 10.092 19.4593 10.1187 19.3803 10.1764L15.1237 13.2853L12.6511 11.028C12.6157 10.9957 12.5736 10.97 12.5274 10.9525C12.4811 10.935 12.4315 10.926 12.3814 10.926C12.3313 10.926 12.2817 10.935 12.2354 10.9525C12.1892 10.97 12.1471 10.9957 12.1117 11.028C12.0763 11.0603 12.0482 11.0987 12.029 11.1409C12.0099 11.1832 12 11.2285 12 11.2742C12 11.3199 12.0099 11.3652 12.029 11.4074C12.0482 11.4497 12.0763 11.4881 12.1117 11.5204L14.8257 13.9981C14.8921 14.0587 14.9806 14.0948 15.0743 14.0996C15.168 14.1043 15.2603 14.0773 15.3336 14.0238L19.8569 10.7202C19.9359 10.6625 19.9865 10.5785 19.9977 10.4867C20.0088 10.3949 19.9796 10.3029 19.9164 10.2308C19.8532 10.1587 19.7612 10.1124 19.6607 10.1022V10.1022Z" fill="#FFA300" stroke="#FFA300" />
                  </svg>
                </div>
                <div data-v-299c9395 className="label">Checkout</div>
              </div>
              <div data-v-299c9395 className="grow bg-white/10 h-0.5 sm:hidden" />
              <div data-v-299c9395 className="flex flex-col items-center gap-2 text-center">
                <div data-v-299c9395 className="picture-border flex items-center justify-center">
                  <svg data-v-299c9395 width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path data-v-299c9395 d="M18.6665 14H20.9998V18.6667H18.6665V14Z" fill="white" />
                    <path data-v-299c9395 d="M23.3335 8.16667V5.83333C23.3335 4.5465 22.287 3.5 21.0002 3.5H5.8335C3.90383 3.5 2.3335 5.07033 2.3335 7V21C2.3335 23.5678 4.4265 24.5 5.8335 24.5H23.3335C24.6203 24.5 25.6668 23.4535 25.6668 22.1667V10.5C25.6668 9.21317 24.6203 8.16667 23.3335 8.16667ZM5.8335 5.83333H21.0002V8.16667H5.8335C5.5331 8.15323 5.24947 8.02444 5.04165 7.80712C4.83383 7.5898 4.71785 7.30069 4.71785 7C4.71785 6.69931 4.83383 6.4102 5.04165 6.19288C5.24947 5.97556 5.5331 5.84677 5.8335 5.83333ZM23.3335 22.1667H5.8475C5.3085 22.1527 4.66683 21.9392 4.66683 21V10.2842C5.03316 10.416 5.42166 10.5 5.8335 10.5H23.3335V22.1667Z" fill="white" />
                  </svg>
                </div>
                <div data-v-299c9395 className="label">Payment</div>
              </div>
              <div data-v-299c9395 className="grow bg-white/10 h-0.5 sm:hidden" />
              <div data-v-299c9395 className="flex flex-col items-center gap-2 text-center">
                <div data-v-299c9395 className="picture-border flex items-center justify-center">
                  <svg data-v-299c9395 width={31} height={18} viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path data-v-299c9395 d="M27.24 1H7.4C5.992 1 4.84 2.152 4.84 3.56V4.52C4.84 4.872 5.128 5.16 5.48 5.16C5.832 5.16 6.12 4.872 6.12 4.52V3.56C6.12 3.432 6.152 3.304 6.184 3.176L13.352 9.32L6.184 15.464C6.152 15.336 6.12 15.208 6.12 15.08V14.12C6.12 13.768 5.832 13.48 5.48 13.48C5.128 13.48 4.84 13.768 4.84 14.12V15.08C4.84 16.488 5.992 17.64 7.4 17.64H27.24C28.648 17.64 29.8 16.488 29.8 15.08V3.56C29.8 2.152 28.648 1 27.24 1ZM7.144 2.312C7.208 2.28 7.304 2.28 7.4 2.28H27.24C27.336 2.28 27.432 2.28 27.496 2.312L17.736 10.664C17.48 10.856 17.16 10.856 16.904 10.664L7.144 2.312ZM27.24 16.36H7.4C7.304 16.36 7.208 16.36 7.144 16.328L14.344 10.152L16.072 11.656C16.424 11.976 16.872 12.136 17.32 12.136C17.768 12.136 18.216 11.976 18.568 11.656L20.296 10.152L27.496 16.328C27.432 16.36 27.336 16.36 27.24 16.36ZM28.52 15.08C28.52 15.208 28.488 15.336 28.456 15.464L21.288 9.32L28.456 3.176C28.488 3.304 28.52 3.432 28.52 3.56V15.08ZM2.92 7.72C2.92 7.368 3.208 7.08 3.56 7.08H7.4C7.752 7.08 8.04 7.368 8.04 7.72C8.04 8.072 7.752 8.36 7.4 8.36H3.56C3.208 8.36 2.92 8.072 2.92 7.72ZM7.4 11.56H1.64C1.288 11.56 1 11.272 1 10.92C1 10.568 1.288 10.28 1.64 10.28H7.4C7.752 10.28 8.04 10.568 8.04 10.92C8.04 11.272 7.752 11.56 7.4 11.56Z" fill="white" stroke="white" strokeWidth="0.5" />
                  </svg>
                </div>
                <div data-v-299c9395 className="label">Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-v-299c9395 className="container flex gap-8 py-8 items-start sm:flex-col">
        <div data-v-299c9395 className="grow sm:w-full">
          <div data-v-299c9395 className="text-sm mb-4 font-light text-white/60">Select payment method</div>
          <div data-v-299c9395 className="rounded-xl p-8 grow" style={{"background":"rgb(31, 35, 50)","box-shadow":"rgba(0, 0, 0, 0.14) 0px 8px 75px"}}>
            <div data-v-299c9395 className="cursor-pointer">
              <div data-v-299c9395 className="py-4 flex items-center gap-2 justify-between">
                <div data-v-299c9395 className="flex items-center gap-2">
                  <svg data-v-299c9395 width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle data-v-299c9395 cx={8} cy={8} r="3.5" fill="#FFA300" stroke="#FFA300" strokeOpacity={1} fillOpacity={1} />
                    <circle data-v-299c9395 cx={8} cy={8} r="7.5" stroke="#FFA300" />
                  </svg>
                  <div data-v-299c9395 className="capitalize xs:hidden">Crypto</div>
                </div>
                <div data-v-299c9395 className style={{"max-height":"40px"}}><img data-v-299c9395 src={CryptoIcon} fit="contain" height={0} /></div>
              </div>
              <div data-v-299c9395 className="w-full h-0.5" style={{"background":"rgba(47, 50, 64, 0.6)"}} />
            </div>
            <div data-v-299c9395 className="cursor-pointer">
              <div data-v-299c9395 className="py-4 flex items-center gap-2 justify-between">
                <div data-v-299c9395 className="flex items-center gap-2">
                  <svg data-v-299c9395 width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle data-v-299c9395 cx={8} cy={8} r="3.5" fill="#FFA300" stroke="#FFA300" strokeOpacity={0} fillOpacity={0} />
                    <circle data-v-299c9395 cx={8} cy={8} r="7.5" stroke="#2F3240" />
                  </svg>
                  <div data-v-299c9395 className="capitalize xs:hidden">Paypal</div>
                </div>
                <div data-v-299c9395 className="opacity-60" style={{"max-height":"40px"}}><img data-v-299c9395 src={PaypalIcon} fit="contain" height={0} /></div>
              </div>
              <div data-v-299c9395 className="w-full h-0.5" style={{"background":"rgba(47, 50, 64, 0.6)"}} />
            </div>
          </div>
        </div>
        <div data-v-299c9395 className="grow max-w-xl sm:max-w-full">
          <div data-v-299c9395 className="text-sm mb-4 font-light text-white/60">Order summary</div>
          <div data-v-299c9395 className="rounded-xl p-8" style={{"background":"rgb(31, 35, 50)","box-shadow":"rgba(0, 0, 0, 0.14) 0px 8px 75px"}}>
            <div data-v-299c9395 className="flex items-center gap-4 mb-8">
              <div data-v-299c9395 className="shrink-0"><img data-v-299c9395 src="https://assets.igitems.com/files/uhMnP39FKJzgnMfKW6ZNPxEwHuofoqXa.png" format="webp" loading="lazy" className="mx-auto w-full rounded-lg" style={{"object-fit":"cover","height":"90px","width":"120px"}} /></div>
              <div data-v-299c9395 className="font-extrabold text-xl sm:text-xs">2 Huge:  Huge Mosaic Corgi Huge Mosaic Griffin | Pet Simulator X | PSX</div>
            </div>
            <div data-v-299c9395 className="flex items-center justify-between mt-4">
              <div data-v-299c9395 className="text-sm text-white/70">Quantity</div>
              <div data-v-299c9395 className="font-bold">1</div>
            </div>
            <div data-v-299c9395 className="flex items-center justify-between mt-4">
              <div data-v-299c9395 className="text-sm text-white/70">Delivery time</div>
              <div data-v-299c9395 className="font-bold flex items-center gap-2">
                <img data-v-299c9395 className="opacity-50" src={ClockIcon} />
                <div data-v-299c9395>12 hours</div>
              </div>
            </div>
            <div data-v-299c9395 className="w-full my-6 h-0.5" style={{"background":"rgba(47, 50, 64, 0.6)"}} />
            <div data-v-1fb46fc5 data-v-299c9395 className="btn text-center cursor-pointer mb-2 flex items-center justify-center" style={{"border-radius":"4px","height":"40px"}}>Pay $24.99</div>
            <div data-v-299c9395 className="block w-full" id="payment-request-button" />
            <div data-v-299c9395 className="mt-8">
              <label data-v-6ad32518 data-v-299c9395 className="flex items-center">
                <input data-v-6ad32518 type="checkbox" />
                <div data-v-6ad32518 className="checker inline-block cursor-pointer" />
                <div data-v-6ad32518 className="checkbox-label cursor-pointer text-sm text-white px-1 leading-5">
                  <div data-v-6ad32518
                  style={{paddingLeft:20}}
                  >I confirm that all the entered information is accurate and I agree to your <a href="/legal/terms-of-use" target="_blank" className="text-secondary">Terms of Use.</a></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
