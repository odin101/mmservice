import React, {Component} from 'react'
import google from '../img/icons/google.svg'
import apple from '../img/icons/apple.svg'
import discord from '../img/icons/discord.svg'

const RegModal = (props) => {
  return ( <> <div
    onClick={() => props.backClick()}
    className="g-dialog-overlay g-dialog-overlay--active"
    style={{
    "z-index": "1031",
    "--6eaca59a": "var(--overlay-bg)"
  }}/> < div className = "g-dialog-frame g-dialog-frame--active" style = {{"z-index":"1032"}} > <div
    className="g-dialog-content"
    style={{
    "max-width": "550px",
    "--889a571a": "var(--content-bg)",
    "--023a843a": "14px"
  }}>
    <div
      className="text-white"
      style={{
      "background": "rgb(31, 35, 50)"
    }}>
      <div>{/**/}
        <div>
          <div className="px-12 my-8 sm:px-6">
            <div className="text-center">
              <div className="text-3xl font-bold">Create an account</div>
              <div className="text-xs flex gap-1 justify-center">
                <span>Already have an account?</span>
                <span className="font-bold text-secondary cursor-pointer">Log in</span>
              </div>
              <div className="my-8 grid grid-cols-3 gap-2">
                <div data-v-5e610566 className="g-btn-wrapper">{/*v-if*/}
                  <div
                    data-v-1fb46fc5
                    data-v-5e610566-s
                    className="btn text-center cursor-pointer w-full flex justify-center items-center gap-4"
                    style={{
                    "background": "rgb(255, 255, 255)"
                  }}>
                    <img
                      src={google}
                      style={{
                      "height": "20px"
                    }}/></div>
                </div>
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=949362889192538193&redirect_uri=https://igitems.com/auth/discordAuth&response_type=code&scope=identify%20email">
                  <div
                    data-v-1fb46fc5
                    className="btn text-center cursor-pointer w-full flex justify-center items-center gap-4"
                    style={{
                    "background": "rgb(86, 98, 246)"
                  }}>
                    <img
                      src={discord}
                      style={{
                      "height": "19px"
                    }}/>
                  </div>
                </a>
                <div className="cursor-pointer" id="apple-btn">
                  <div
                    data-v-1fb46fc5
                    className="btn text-center cursor-pointer w-full flex justify-center items-center gap-4"
                    style={{
                    "background": "rgb(0, 0, 0)"
                  }}>
                    <img
                      src={apple}
                      style={{
                      "height": "20px"
                    }}/></div>
                </div>
              </div>
              <div className="hidden">
                <div
                  id="appleid-signin"
                  data-mode="logo-only"
                  data-type="sign in"
                  data-color="black"
                  data-border="true"
                  data-radius={15}
                  data-width="100%"
                  data-height="100%"
                  data-logo-size="medium"
                  data-logo-position={0}
                  data-label-position={0}
                  className="vue-apple-signin">
                  <div
                    style={{
                    "font-synthesis": "none",
                    "-moz-font-feature-settings": "kern",
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale",
                    "width": "100%",
                    "height": "100%",
                    "min-width": "30px",
                    "max-width": "64px",
                    "min-height": "30px",
                    "max-height": "64px",
                    "position": "relative"
                  }}
                    role="button"
                    tabIndex={0}
                    aria-label="Sign in with Apple">
                    <div
                      style={{
                      "position": "absolute",
                      "box-sizing": "border-box",
                      "width": "100%",
                      "height": "100%"
                    }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                        "overflow": "visible"
                      }}
                        width="100%"
                        height="100%"
                        viewBox="6 6 44 44">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill="#fff"
                            fillRule="nonzero"
                            d="M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z"/>
                        </g>
                      </svg>
                    </div>
                    <div
                      style={{
                      "padding": "1px",
                      "width": "100%",
                      "height": "100%",
                      "box-sizing": "border-box"
                    }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                        "overflow": "visible"
                      }}
                        width="100%"
                        height="100%"
                        viewBox="0 0 50 50"
                        preserveAspectRatio="xMidYMin meet"><rect
                        width="100%"
                        height="100%"
                        ry="15%"
                        fill="#000"
                        stroke="black"
                        strokeWidth={1}
                        strokeLinecap="round"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full relative my-8 bg-white/10"
              style={{
              "height": "2px"
            }}>
              <span
                className="absolute w-12 h-5 flex items-center justify-center uppercase font-bold text-sm tracking-widest left-1/2 top-1/2"
                i18n="@@services.or"
                style={{
                "background": "rgb(31, 35, 50)",
                "-webkit-transform": "translate(-50%, -50%)",
                "-ms-transform": "translate(-50%, -50%)",
                "transform": "translate(-50%, -50%)"
              }}>or</span>
            </div>
            <div className="my-4 text-center">Sign up with Email</div>
            <form>
              <label data-v-a158f60f className>
                <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">Email address</div><input
                  data-v-a158f60f
                  className="w-full outline-none text-white"
                  type="email"
                  placeholder
                  style={{
    "background": "rgb(13, 18, 38)",
    "border-radius": "14px",
    "padding": "11px 22px",
    "border": "1px solid transparent"
  }}/>{/**/}</label>
              <div className="mt-4">
                <label data-v-a158f60f className>
                  <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">Username</div><input
                    data-v-a158f60f
                    className="w-full outline-none text-white"
                    type="text"
                    placeholder
                    style={{
    "background": "rgb(13, 18, 38)",
    "border-radius": "14px",
    "padding": "11px 22px",
    "border": "1px solid transparent"
  }}/>{/**/}</label>
              </div>
              <div className="mt-4">
                <label data-v-a158f60f className>
                  <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">Password</div><input
                    data-v-a158f60f
                    className="w-full outline-none text-white"
                    type="password"
                    placeholder
                    style={{
    "background": "rgb(13, 18, 38)",
    "border-radius": "14px",
    "padding": "11px 22px",
    "border": "1px solid transparent"
  }}/>{/**/}</label>
              </div><div
                className="w-full bg-white opacity-10 my-4"
                style={{
    "height": "2px"
  }}/>
              <label data-v-6ad32518 className="flex items-center"><input data-v-6ad32518 type="checkbox"/><div data-v-6ad32518 className="checker inline-block cursor-pointer"/>
                <div
                  data-v-6ad32518
                  className="checkbox-label cursor-pointer text-sm text-white px-1 leading-5">
                  <div data-v-6ad32518>I accept the Terms &amp; Conditions and Privacy Policy</div>
                </div>
              </label>
              <button className="w-full" type="submit">
                <div
                  data-v-1fb46fc5
                  className="btn text-center cursor-pointer my-4 w-full block">Start Trading</div>
              </button>
         
            </form>
          </div>
        </div>{/**/}</div>{/**/}</div>
  </div> </div>
                 </ >)
}
export default RegModal