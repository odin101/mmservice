import logo from './logo.svg';
import './App.css';
import accountIcon from './img/icons/account-icon-white.svg'
import itemIconOrange from './img/icons/item-icon-orange.svg'
import Header from './components/header'
import Footer from './components/footer'
import LoginModal from './components/modal'
import Home from './components/Home'
import { AuthProvider } from 'react-auth-kit'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOffer from './components/dashboard/createOffer';
import Product from './components/product/product';
import { useRef } from 'react';
import MyOffers from './components/dashboard/myOffers';
import Accounts from './components/dashboard/account';
import Items from './components/itemsContent/items';


function App() {
  const searchComponent = useRef(null)
  return (
 <>
  <AuthProvider authType = {'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>
     <BrowserRouter>
 
  <meta charSet="utf-8" />
  <title>Roblox Items for Sale - Cheap Roblox Collectibles | AutommService</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta
    name="description"
    content="Want to get the most out of your Roblox adventure? igitems has all types of cheap and safe items and gear for sale. Get them now before they're gone!"
  />
  <link rel="canonical" href="https://igitems.com/roblox-item" />
  <link
    rel="alternate"
    href="https://igitems.com/roblox-item"
    hrefLang="x-default"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/entry.d3bddc8f.js"
  />
  <link rel="preload" as="style" href="/_nuxt/entry.1db94990.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/IgLoading.09954d7f.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/default.0a30bdcb.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/Searchbar.37a3dd36.js"
  />
  <link rel="preload" as="style" href="/_nuxt/Searchbar.9c843636.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/IgBtn.6f1eb27e.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/_gameType_-_productType_.af550fc8.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/AppFooter.4ce9b428.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/FilterDialog.17d040af.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/IgFilterInput.a88731bc.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/PriceFilter.2143ccb8.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/S3Image.d785f7fa.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/Pagination.0a21e722.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/FeaturesSection.2bdb144a.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/ReviewSection.0c23f9d9.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="/_nuxt/Faq.9ffcdc05.js"
  />
  <link rel="stylesheet" href="/_nuxt/entry.1db94990.css" />
  <link rel="stylesheet" href="/_nuxt/Searchbar.9c843636.css" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            @keyframes lds-ellipsis1-99eddffc {\n                0% {\n                    transform: scale(0)\n                }\n\n                to {\n                    transform: scale(1)\n                }\n            }\n\n            @keyframes lds-ellipsis3-99eddffc {\n                0% {\n                    transform: scale(1)\n                }\n\n                to {\n                    transform: scale(0)\n                }\n            }\n\n            @keyframes lds-ellipsis2-99eddffc {\n                0% {\n                    transform: translate(0)\n                }\n\n                to {\n                    transform: translate(19px)\n                }\n            }\n\n            .lds-ellipsis div[data-v-99eddffc] {\n                animation-timing-function: cubic-bezier(0,1,1,0);\n                background: #ffa300;\n                border-radius: 50%;\n                height: 11px;\n                position: absolute;\n                top: 27px;\n                width: 11px\n            }\n\n            .lds-ellipsis div[data-v-99eddffc]:first-child {\n                animation: lds-ellipsis1-99eddffc .6s infinite;\n                left: 6px\n            }\n\n            .lds-ellipsis div[data-v-99eddffc]:nth-child(2) {\n                animation: lds-ellipsis2-99eddffc .6s infinite;\n                left: 6px\n            }\n\n            .lds-ellipsis div[data-v-99eddffc]:nth-child(3) {\n                animation: lds-ellipsis2-99eddffc .6s infinite;\n                left: 26px\n            }\n\n            .lds-ellipsis div[data-v-99eddffc]:nth-child(4) {\n                animation: lds-ellipsis3-99eddffc .6s infinite;\n                left: 45px\n            }\n        "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .main-wrapper[data-v-9f5b85b4] {\n                min-height: 100vh;\n                padding-top: 90px\n            }\n\n            @media screen and (max-width: 1023px) {\n                .main-wrapper[data-v-9f5b85b4] {\n                    padding-top:60px\n                }\n            }\n        "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .scrollDown[data-v-5315b842] {\n                opacity: 0;\n                z-index: -1!important\n            }\n\n            .scrollDown.showHeader[data-v-5315b842] {\n                opacity: 1!important;\n                z-index: 300!important\n            }\n\n            .header[data-v-5315b842] {\n                height: 90px\n            }\n\n            @media screen and (max-width: 1023px) {\n                .header[data-v-5315b842] {\n                    height:60px\n                }\n            }\n        "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .btn[data-v-1fb46fc5] {\n                background-color: #ffa300;\n                border: 2px solid transparent;\n                border-radius: 60px;\n                color: #171d29;\n                font-size: 16px;\n                font-weight: 700;\n                letter-spacing: .3px;\n                line-height: 20px;\n                padding: 12px 20px;\n                text-transform: none;\n                transition-duration: .3s\n            }\n\n            @media (hover) and (pointer: fine) {\n                .btn[data-v-1fb46fc5]:hover {\n                    background-color:#c17c00;\n                    color: #171d29\n                }\n            }\n\n            .btn.secondary[data-v-1fb46fc5] {\n                background-color: transparent;\n                background: rgba(255,163,0,.1);\n                color: #ffa300\n            }\n\n            @media (hover) and (pointer: fine) {\n                .btn.secondary[data-v-1fb46fc5]:hover {\n                    background-color:#ffa300;\n                    color: #171d29\n                }\n            }\n\n            .btn.success[data-v-1fb46fc5] {\n                background-color: #76be2a;\n                color: #fff\n            }\n\n            @media (hover) and (pointer: fine) {\n                .btn.success[data-v-1fb46fc5]:hover {\n                    background-color:#76be2a\n                }\n            }\n\n            .btn.wide[data-v-1fb46fc5] {\n                padding: 12px 30px!important\n            }\n\n            @media screen and (max-width: 599px) {\n                .btn.wide[data-v-1fb46fc5] {\n                    padding:12px 10px!important\n                }\n            }\n        "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .service-tab[data-v-d5ff87d0] {\n                border-radius: 50px;\n                margin: 0 1px\n            }\n\n            .service-tab.active[data-v-d5ff87d0],.service-tab[data-v-d5ff87d0]:hover {\n                background: #232730;\n                color: #ffa300\n            }\n\n            [data-v-d5ff87d0] .text-section {\n                color: hsla(0,0%,100%,.7);\n                font-size: 15px;\n                line-height: 1.5\n            }\n\n            [data-v-d5ff87d0] .text-section p {\n                padding: 8px 0\n            }\n\n            [data-v-d5ff87d0] .text-section ol,[data-v-d5ff87d0] .text-section ul {\n                list-style-type: circle;\n                padding-left: 20px\n            }\n\n            [data-v-d5ff87d0] .text-section ol li,[data-v-d5ff87d0] .text-section ul li {\n                padding: 5px 0\n            }\n\n            [data-v-d5ff87d0] .text-section h2 {\n                color: #fff;\n                font-size: 16px;\n                font-weight: 700;\n                margin: 10px 0\n            }\n\n            [data-v-d5ff87d0] .Page {\n                height: 30px;\n                transition-duration: .3s;\n                width: 30px\n            }\n\n            [data-v-d5ff87d0] .Page:hover {\n                border-color: #ffa300;\n                color: #fff\n            }\n\n            [data-v-d5ff87d0] .Page-active {\n                background-color: #ffa300!important;\n                border: 0;\n                color: #fff;\n                font-size: 16px;\n                font-weight: 700\n            }\n\n            [data-v-d5ff87d0] .Control-active {\n                fill: #fff\n            }\n        "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            @media (hover) and (pointer: fine) {\n                .hover[data-v-d9e45827]:hover {\n                    background:#393d4a;\n                    color: #ffa300\n                }\n            }\n        "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            @media screen and (max-width: 1023px) {\n                [data-v-377cfd5d] .filter-select .multiselect-placeholder,[data-v-377cfd5d] .filter-select .multiselect-single-label {\n                    padding-left:0\n                }\n            }\n        "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .multiselect {\n                align-items: center;\n                background: #fff;\n                background: var(--ms-bg,#fff);\n                border: 1px solid #d1d5db;\n                border: var(--ms-border-width,1px) solid var(--ms-border-color,#d1d5db);\n                border-radius: 4px;\n                border-radius: var(--ms-radius,4px);\n                box-sizing: border-box;\n                cursor: pointer;\n                display: flex;\n                font-size: 1rem;\n                font-size: var(--ms-font-size,1rem);\n                justify-content: flex-end;\n                margin: 0 auto;\n                min-height: calc(2px + 2.375rem);\n                min-height: calc(var(--ms-border-width, 1px)*2 + var(--ms-font-size, 1rem)*var(--ms-line-height, 1.375) + var(--ms-py, .5rem)*2);\n                outline: none;\n                position: relative;\n                width: 100%\n            }\n\n            .multiselect.is-open {\n                border-radius: 4px 4px 0 0;\n                border-radius: var(--ms-radius,4px) var(--ms-radius,4px) 0 0\n            }\n\n            .multiselect.is-open-top {\n                border-radius: 0 0 4px 4px;\n                border-radius: 0 0 var(--ms-radius,4px) var(--ms-radius,4px)\n            }\n\n            .multiselect.is-disabled {\n                background: #f3f4f6;\n                background: var(--ms-bg-disabled,#f3f4f6);\n                cursor: default\n            }\n\n            .multiselect.is-active {\n                border: 1px solid #d1d5db;\n                border: var(--ms-border-width-active,var(--ms-border-width,1px)) solid var(--ms-border-color-active,var(--ms-border-color,#d1d5db));\n                box-shadow: 0 0 0 3px rgba(16,185,129,.188);\n                box-shadow: 0 0 0 var(--ms-ring-width,3px) var(--ms-ring-color,rgba(16,185,129,.188))\n            }\n\n            .multiselect-wrapper {\n                align-items: center;\n                box-sizing: border-box;\n                cursor: pointer;\n                display: flex;\n                justify-content: flex-end;\n                margin: 0 auto;\n                min-height: calc(2px + 2.375rem);\n                min-height: calc(var(--ms-border-width, 1px)*2 + var(--ms-font-size, 1rem)*var(--ms-line-height, 1.375) + var(--ms-py, .5rem)*2);\n                outline: none;\n                position: relative;\n                width: 100%\n            }\n\n            .multiselect-multiple-label,.multiselect-placeholder,.multiselect-single-label {\n                align-items: center;\n                background: transparent;\n                box-sizing: border-box;\n                display: flex;\n                height: 100%;\n                left: 0;\n                line-height: 1.375;\n                line-height: var(--ms-line-height,1.375);\n                max-width: 100%;\n                padding-left: .875rem;\n                padding-left: var(--ms-px,.875rem);\n                padding-right: 3.875rem;\n                padding-right: calc(1.25rem + var(--ms-px, .875rem)*3);\n                pointer-events: none;\n                position: absolute;\n                top: 0\n            }\n\n            .multiselect-placeholder {\n                color: #9ca3af;\n                color: var(--ms-placeholder-color,#9ca3af)\n            }\n\n            .multiselect-single-label-text {\n                display: block;\n                max-width: 100%;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                white-space: nowrap\n            }\n\n            .multiselect-search {\n                -webkit-appearance: none;\n                -moz-appearance: none;\n                appearance: none;\n                background: #fff;\n                background: var(--ms-bg,#fff);\n                border: 0;\n                border-radius: 4px;\n                border-radius: var(--ms-radius,4px);\n                bottom: 0;\n                box-sizing: border-box;\n                font-family: inherit;\n                font-size: inherit;\n                height: 100%;\n                left: 0;\n                outline: none;\n                padding-left: .875rem;\n                padding-left: var(--ms-px,.875rem);\n                position: absolute;\n                right: 0;\n                top: 0;\n                width: 100%\n            }\n\n            .multiselect-search::-webkit-search-cancel-button,.multiselect-search::-webkit-search-decoration,.multiselect-search::-webkit-search-results-button,.multiselect-search::-webkit-search-results-decoration {\n                -webkit-appearance: none\n            }\n\n            .multiselect-tags {\n                align-items: center;\n                display: flex;\n                flex-grow: 1;\n                flex-shrink: 1;\n                flex-wrap: wrap;\n                margin: .25rem 0 0;\n                margin: var(--ms-tag-my,.25rem) 0 0;\n                padding-left: .5rem;\n                padding-left: var(--ms-py,.5rem)\n            }\n\n            .multiselect-tag {\n                align-items: center;\n                background: #10b981;\n                background: var(--ms-tag-bg,#10b981);\n                border-radius: 4px;\n                border-radius: var(--ms-tag-radius,4px);\n                color: #fff;\n                color: var(--ms-tag-color,#fff);\n                display: flex;\n                font-size: .875rem;\n                font-size: var(--ms-tag-font-size,.875rem);\n                font-weight: 600;\n                font-weight: var(--ms-tag-font-weight,600);\n                line-height: 1.25rem;\n                line-height: var(--ms-tag-line-height,1.25rem);\n                margin-bottom: .25rem;\n                margin-bottom: var(--ms-tag-my,.25rem);\n                margin-right: .25rem;\n                margin-right: var(--ms-tag-mx,.25rem);\n                padding: .125rem 0 .125rem .5rem;\n                padding: var(--ms-tag-py,.125rem) 0 var(--ms-tag-py,.125rem) var(--ms-tag-px,.5rem);\n                white-space: nowrap\n            }\n\n            .multiselect-tag.is-disabled {\n                background: #9ca3af;\n                background: var(--ms-tag-bg-disabled,#9ca3af);\n                color: #fff;\n                color: var(--ms-tag-color-disabled,#fff);\n                padding-right: .5rem;\n                padding-right: var(--ms-tag-px,.5rem)\n            }\n\n            .multiselect-tag-remove {\n                align-items: center;\n                border-radius: 4px;\n                border-radius: var(--ms-tag-remove-radius,4px);\n                display: flex;\n                justify-content: center;\n                margin: 0 .125rem;\n                margin: var(--ms-tag-remove-my,0) var(--ms-tag-remove-mx,.125rem);\n                padding: .25rem;\n                padding: var(--ms-tag-remove-py,.25rem) var(--ms-tag-remove-px,.25rem)\n            }\n\n            .multiselect-tag-remove:hover {\n                background: rgba(0,0,0,.063)\n            }\n\n            .multiselect-tag-remove-icon {\n                background-color: currentColor;\n                display: inline-block;\n                height: .75rem;\n                -webkit-mask-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E\");\n                mask-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E\");\n                -webkit-mask-position: center;\n                mask-position: center;\n                -webkit-mask-repeat: no-repeat;\n                mask-repeat: no-repeat;\n                -webkit-mask-size: contain;\n                mask-size: contain;\n                opacity: .8;\n                width: .75rem\n            }\n\n            .multiselect-tags-search-wrapper {\n                display: inline-block;\n                flex-grow: 1;\n                flex-shrink: 1;\n                height: 100%;\n                margin: 0 4px 4px;\n                margin: 0 var(--ms-tag-mx,4px) var(--ms-tag-my,4px);\n                position: relative\n            }\n\n            .multiselect-tags-search-copy {\n                display: inline-block;\n                height: 1px;\n                visibility: hidden;\n                white-space: pre-wrap;\n                width: 100%\n            }\n\n            .multiselect-tags-search {\n                -webkit-appearance: none;\n                -moz-appearance: none;\n                appearance: none;\n                border: 0;\n                bottom: 0;\n                box-sizing: border-box;\n                font-family: inherit;\n                font-size: inherit;\n                left: 0;\n                outline: none;\n                padding: 0;\n                position: absolute;\n                right: 0;\n                top: 0;\n                width: 100%\n            }\n\n            .multiselect-tags-search::-webkit-search-cancel-button,.multiselect-tags-search::-webkit-search-decoration,.multiselect-tags-search::-webkit-search-results-button,.multiselect-tags-search::-webkit-search-results-decoration {\n                -webkit-appearance: none\n            }\n\n            .multiselect-inifite {\n                align-items: center;\n                display: flex;\n                justify-content: center;\n                min-height: calc(2px + 2.375rem);\n                min-height: calc(var(--ms-border-width, 1px)*2 + var(--ms-font-size, 1rem)*var(--ms-line-height, 1.375) + var(--ms-py, .5rem)*2);\n                width: 100%\n            }\n\n            .multiselect-inifite-spinner,.multiselect-spinner {\n                animation: multiselect-spin 1s linear infinite;\n                background-color: #10b981;\n                background-color: var(--ms-spinner-color,#10b981);\n                flex-grow: 0;\n                flex-shrink: 0;\n                height: 1rem;\n                -webkit-mask-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'/%3E%3C/svg%3E\");\n                mask-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'/%3E%3C/svg%3E\");\n                -webkit-mask-position: center;\n                mask-position: center;\n                -webkit-mask-repeat: no-repeat;\n                mask-repeat: no-repeat;\n                -webkit-mask-size: contain;\n                mask-size: contain;\n                width: 1rem;\n                z-index: 10\n            }\n\n            .multiselect-spinner {\n                margin: 0 .875rem 0 0;\n                margin: 0 var(--ms-px,.875rem) 0 0\n            }\n\n            .multiselect-clear {\n                display: flex;\n                flex-grow: 0;\n                flex-shrink: 0;\n                opacity: 1;\n                padding: 0 .875rem 0 0;\n                padding: 0 var(--ms-px,.875rem) 0 0;\n                position: relative;\n                transition: .3s;\n                z-index: 10\n            }\n\n            .multiselect-clear:hover .multiselect-clear-icon {\n                background-color: #000;\n                background-color: var(--ms-clear-color-hover,#000)\n            }\n\n            .multiselect-clear-icon {\n                background-color: #999;\n                background-color: var(--ms-clear-color,#999);\n                display: inline-block;\n                -webkit-mask-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E\");\n                mask-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E\");\n                transition: .3s\n            }\n\n            .multiselect-caret,.multiselect-clear-icon {\n                height: 1.125rem;\n                -webkit-mask-position: center;\n                mask-position: center;\n                -webkit-mask-repeat: no-repeat;\n                mask-repeat: no-repeat;\n                -webkit-mask-size: contain;\n                mask-size: contain;\n                width: .625rem\n            }\n\n            .multiselect-caret {\n                background-color: #999;\n                background-color: var(--ms-caret-color,#999);\n                flex-grow: 0;\n                flex-shrink: 0;\n                margin: 0 .875rem 0 0;\n                margin: 0 var(--ms-px,.875rem) 0 0;\n                -webkit-mask-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\");\n                mask-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\");\n                pointer-events: none;\n                position: relative;\n                transform: rotate(0deg);\n                transition: transform .3s;\n                z-index: 10\n            }\n\n            .multiselect-caret.is-open {\n                pointer-events: auto;\n                transform: rotate(180deg)\n            }\n\n            .multiselect-dropdown {\n                -webkit-overflow-scrolling: touch;\n                background: #fff;\n                background: var(--ms-dropdown-bg,#fff);\n                border: 1px solid #d1d5db;\n                border: var(--ms-dropdown-border-width,1px) solid var(--ms-dropdown-border-color,#d1d5db);\n                border-radius: 0 0 4px 4px;\n                border-radius: 0 0 var(--ms-dropdown-radius,4px) var(--ms-dropdown-radius,4px);\n                bottom: 0;\n                display: flex;\n                flex-direction: column;\n                left: -1px;\n                left: calc(var(--ms-border-width, 1px)*-1);\n                margin-top: -1px;\n                margin-top: calc(var(--ms-border-width, 1px)*-1);\n                max-height: 10rem;\n                max-height: var(--ms-max-height,10rem);\n                outline: none;\n                overflow-y: scroll;\n                position: absolute;\n                right: -1px;\n                right: calc(var(--ms-border-width, 1px)*-1);\n                transform: translateY(100%);\n                z-index: 100\n            }\n\n            .multiselect-dropdown.is-top {\n                border-radius: 4px 4px 0 0;\n                border-radius: var(--ms-dropdown-radius,4px) var(--ms-dropdown-radius,4px) 0 0;\n                bottom: auto;\n                top: 1px;\n                top: var(--ms-border-width,1px);\n                transform: translateY(-100%)\n            }\n\n            .multiselect-dropdown.is-hidden {\n                display: none\n            }\n\n            .multiselect-options {\n                display: flex;\n                flex-direction: column;\n                list-style: none;\n                margin: 0;\n                padding: 0\n            }\n\n            .multiselect-group {\n                margin: 0;\n                padding: 0\n            }\n\n            .multiselect-group-label {\n                align-items: center;\n                background: #e5e7eb;\n                background: var(--ms-group-label-bg,#e5e7eb);\n                box-sizing: border-box;\n                color: #374151;\n                color: var(--ms-group-label-color,#374151);\n                cursor: default;\n                display: flex;\n                font-size: .875rem;\n                font-weight: 600;\n                justify-content: flex-start;\n                line-height: 1.375;\n                line-height: var(--ms-group-label-line-height,1.375);\n                padding: .3rem .75rem;\n                padding: var(--ms-group-label-py,.3rem) var(--ms-group-label-px,.75rem);\n                text-align: left;\n                text-decoration: none\n            }\n\n            .multiselect-group-label.is-pointable {\n                cursor: pointer\n            }\n\n            .multiselect-group-label.is-pointed {\n                background: #d1d5db;\n                background: var(--ms-group-label-bg-pointed,#d1d5db);\n                color: #374151;\n                color: var(--ms-group-label-color-pointed,#374151)\n            }\n\n            .multiselect-group-label.is-selected {\n                background: #059669;\n                background: var(--ms-group-label-bg-selected,#059669);\n                color: #fff;\n                color: var(--ms-group-label-color-selected,#fff)\n            }\n\n            .multiselect-group-label.is-disabled {\n                background: #f3f4f6;\n                background: var(--ms-group-label-bg-disabled,#f3f4f6);\n                color: #d1d5db;\n                color: var(--ms-group-label-color-disabled,#d1d5db);\n                cursor: not-allowed\n            }\n\n            .multiselect-group-label.is-selected.is-pointed {\n                background: #0c9e70;\n                background: var(--ms-group-label-bg-selected-pointed,#0c9e70);\n                color: #fff;\n                color: var(--ms-group-label-color-selected-pointed,#fff)\n            }\n\n            .multiselect-group-label.is-selected.is-disabled {\n                background: #75cfb1;\n                background: var(--ms-group-label-bg-selected-disabled,#75cfb1);\n                color: #d1fae5;\n                color: var(--ms-group-label-color-selected-disabled,#d1fae5)\n            }\n\n            .multiselect-group-options {\n                margin: 0;\n                padding: 0\n            }\n\n            .multiselect-option {\n                align-items: center;\n                box-sizing: border-box;\n                cursor: pointer;\n                display: flex;\n                font-size: 1rem;\n                font-size: var(--ms-option-font-size,1rem);\n                justify-content: flex-start;\n                line-height: 1.375;\n                line-height: var(--ms-option-line-height,1.375);\n                padding: .5rem .75rem;\n                padding: var(--ms-option-py,.5rem) var(--ms-option-px,.75rem);\n                text-align: left;\n                text-decoration: none\n            }\n\n            .multiselect-option.is-pointed {\n                background: #f3f4f6;\n                background: var(--ms-option-bg-pointed,#f3f4f6);\n                color: #1f2937;\n                color: var(--ms-option-color-pointed,#1f2937)\n            }\n\n            .multiselect-option.is-selected {\n                background: #10b981;\n                background: var(--ms-option-bg-selected,#10b981);\n                color: #fff;\n                color: var(--ms-option-color-selected,#fff)\n            }\n\n            .multiselect-option.is-disabled {\n                background: #fff;\n                background: var(--ms-option-bg-disabled,#fff);\n                color: #d1d5db;\n                color: var(--ms-option-color-disabled,#d1d5db);\n                cursor: not-allowed\n            }\n\n            .multiselect-option.is-selected.is-pointed {\n                background: #26c08e;\n                background: var(--ms-option-bg-selected-pointed,#26c08e);\n                color: #fff;\n                color: var(--ms-option-color-selected-pointed,#fff)\n            }\n\n            .multiselect-option.is-selected.is-disabled {\n                background: #87dcc0;\n                background: var(--ms-option-bg-selected-disabled,#87dcc0);\n                color: #d1fae5;\n                color: var(--ms-option-color-selected-disabled,#d1fae5)\n            }\n\n            .multiselect-no-options,.multiselect-no-results {\n                color: #4b5563;\n                color: var(--ms-empty-color,#4b5563);\n                padding: .5rem .75rem;\n                padding: var(--ms-option-py,.5rem) var(--ms-option-px,.75rem)\n            }\n\n            .multiselect-fake-input {\n                background: transparent;\n                border: 0;\n                bottom: -1px;\n                font-size: 0;\n                height: 1px;\n                left: 0;\n                outline: none;\n                padding: 0;\n                position: absolute;\n                right: 0;\n                width: 100%\n            }\n\n            .multiselect-fake-input:active,.multiselect-fake-input:focus {\n                outline: none\n            }\n\n            .multiselect-assistive-text {\n                clip: rect(0 0 0 0);\n                height: 1px;\n                margin: -1px;\n                overflow: hidden;\n                position: absolute;\n                width: 1px\n            }\n\n            .multiselect-spacer {\n                display: none\n            }\n\n            [dir=rtl] .multiselect-multiple-label,[dir=rtl] .multiselect-placeholder,[dir=rtl] .multiselect-single-label {\n                left: auto;\n                padding-left: 3.875rem;\n                padding-left: calc(1.25rem + var(--ms-px, .875rem)*3);\n                padding-right: .875rem;\n                padding-right: var(--ms-px,.875rem);\n                right: 0\n            }\n\n            [dir=rtl] .multiselect-search {\n                padding-left: 0;\n                padding-right: .875rem;\n                padding-right: var(--ms-px,.875rem)\n            }\n\n            [dir=rtl] .multiselect-tags {\n                padding-left: 0;\n                padding-right: .5rem;\n                padding-right: var(--ms-py,.5rem)\n            }\n\n            [dir=rtl] .multiselect-tag {\n                margin-left: .25rem;\n                margin-left: var(--ms-tag-mx,.25rem);\n                margin-right: 0;\n                padding: .125rem .5rem .125rem 0;\n                padding: var(--ms-tag-py,.125rem) var(--ms-tag-px,.5rem) var(--ms-tag-py,.125rem) 0\n            }\n\n            [dir=rtl] .multiselect-tag.is-disabled {\n                padding-left: .5rem;\n                padding-left: var(--ms-tag-px,.5rem)\n            }\n\n            [dir=rtl] .multiselect-caret,[dir=rtl] .multiselect-spinner {\n                margin: 0 0 0 .875rem;\n                margin: 0 0 0 var(--ms-px,.875rem)\n            }\n\n            [dir=rtl] .multiselect-clear {\n                padding: 0 0 0 .875rem;\n                padding: 0 0 0 var(--ms-px,.875rem)\n            }\n\n            @keyframes multiselect-spin {\n                0% {\n                    transform: rotate(0)\n                }\n\n                to {\n                    transform: rotate(1turn)\n                }\n            }\n        "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .custom-filter[data-v-32dcd57c] {\n                background: transparent;\n                border: 1px solid hsla(0,0%,100%,.3);\n                border-radius: 6px;\n                color: #fff;\n                font-size: 14px;\n                outline: none;\n                padding: 8px 20px;\n                transition-duration: .3s;\n                width: 100%\n            }\n\n            .custom-filter[data-v-32dcd57c]:focus {\n                border-color: #ffa300\n            }\n\n            .custom-filter.flat[data-v-32dcd57c] {\n                border: 0;\n                padding: 5px 0\n            }\n\n            .custom-filter[data-v-32dcd57c]::-moz-placeholder {\n                color: #fff;\n                font-size: 14px;\n                font-weight: 400\n            }\n\n            .custom-filter[data-v-32dcd57c]::placeholder {\n                color: #fff;\n                font-size: 14px;\n                font-weight: 400\n            }\n\n            [data-v-32dcd57c] .filter-select {\n                --ms-py: 8px;\n                --ms-px: 20px;\n                --ms-radius: 6px;\n                --ms-border-width: 1px;\n                --ms-border-width-active: 1px;\n                --ms-border-color: hsla(0,0%,100%,.3);\n                --ms-tag-bg: #1f2332;\n                --ms-tag-color: #fff;\n                --ms-dropdown-bg: #1f2332;\n                --ms-dropdown-border-width: 1px;\n                --ms-dropdown-radius: 6px;\n                --ms-dropdown-border-color: hsla(0,0%,100%,.3);\n                --ms-placeholder-color: #fff;\n                --ms-bg: transparent;\n                --ms-bg-disabled: transparent;\n                --ms-option-color-pointed: #fff;\n                --ms-option-bg-pointed: hsla(0,0%,100%,.05);\n                --ms-option-bg-selected: hsla(0,0%,100%,.1);\n                --ms-option-color-selected: #fff;\n                --ms-option-bg-selected-pointed: hsla(0,0%,100%,.1);\n                --ms-option-color-selected-pointed: #fff;\n                --ms-caret-color: #fff;\n                --ms-font-size: 14px;\n                box-shadow: none;\n                color: hsla(0,0%,100%,.7);\n                min-width: 200px\n            }\n\n            [data-v-32dcd57c] .filter-select .multiselect-tags-search {\n                background: transparent\n            }\n\n            [data-v-32dcd57c] .filter-select .multiselect-placeholder {\n                white-space: nowrap\n            }\n\n            [data-v-32dcd57c] .filter-select.is-open {\n                --ms-radius: 6px\n            }\n\n            [data-v-32dcd57c] .filter-select.is-open .multiselect-dropdown {\n                border: 0 solid hsla(0,0%,100%,.3);\n                box-shadow: 0 4px 87px rgba(0,0,0,.7)\n            }\n\n            [data-v-32dcd57c] .filter-select.flat {\n                border: none\n            }\n\n            @media screen and (max-width: 1023px) {\n                [data-v-32dcd57c] .filter-select.flat {\n                    min-width:170px\n                }\n            }\n        "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .custom-filter[data-v-ef7bcce7] {\n                background: transparent;\n                border: 1px solid hsla(0,0%,100%,.3);\n                border-radius: 6px;\n                color: #fff;\n                font-size: 14px;\n                max-width: 150px;\n                outline: none;\n                padding: 8px 20px;\n                transition-duration: .3s;\n                width: 100%\n            }\n\n            .custom-filter[data-v-ef7bcce7]:focus {\n                border-color: #ffa300\n            }\n\n            .custom-filter.flat[data-v-ef7bcce7] {\n                border: 0;\n                padding: 5px 0\n            }\n\n            .custom-filter[data-v-ef7bcce7]::-moz-placeholder {\n                color: #fff;\n                font-size: 14px;\n                font-weight: 400\n            }\n\n            .custom-filter[data-v-ef7bcce7]::placeholder {\n                color: #fff;\n                font-size: 14px;\n                font-weight: 400\n            }\n        "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .arrow[data-v-82196624] {\n                border-left: 2px solid #fff;\n                border-top: 2px solid #fff;\n                display: inline-block;\n                height: 8px;\n                width: 8px\n            }\n\n            .arrow.left[data-v-82196624] {\n                margin-left: 4px;\n                transform: rotate(-45deg)\n            }\n\n            .arrow.left.double[data-v-82196624] {\n                margin-left: 2px;\n                margin-right: -2px\n            }\n\n            .arrow.right[data-v-82196624] {\n                margin-right: 2px;\n                transform: rotate(135deg)\n            }\n\n            .arrow.right.double[data-v-82196624] {\n                margin-right: 0\n            }\n\n            .arrow.double[data-v-82196624] {\n                height: 6px;\n                width: 6px\n            }\n        "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .contact-box[data-v-82610a80] {\n                background: #1f2332;\n                border-radius: 20px;\n                max-width: 100%;\n                padding: 25px\n            }\n\n            .contact-box[data-v-82610a80] ul {\n                padding: 20px\n            }\n\n            .contact-box[data-v-82610a80] ul li {\n                list-style-type: disc\n            }\n        "
    }}
  />
  <div id="__nuxt">
    {/*[*/}
    {/*[*/}
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="theme-color" content="#171D29" />
    <meta
      name="viewport"
      content="initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width<% if (ctx.mode.cordova || ctx.mode.capacitor) { %>, viewport-fit=cover<% } %>"
    />
    <meta
      name="google-site-verification"
      content="s7hLRzPbTPjcloXJ0IR-33B-DUqrJSJwN58g25zxCA4"
    />
    <meta
      name="facebook-domain-verification"
      content="zyo81k1am9pwhav4vbftrt97eq9tln"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    {/*]*/}
    <div style={{ background: "#171D29", fontSize: 16, color: "#fff" }}>
      <span />
      <div className="text-white" data-v-9f5b85b4="">
        <div data-v-9f5b85b4="">
          <div className="main-wrapper" data-v-9f5b85b4="">
            {/*[*/}
            <div
              className="nuxt-loading-indicator"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                pointerEvents: "none",
                width: "auto",
                height: 2,
                opacity: 0,
                background: "#FFA300",
                backgroundSize: "Infinity% auto",
                transform: "scaleX(0%)",
                transformOrigin: "left",
                transition: "transform 0.1s, height 0.4s, opacity 0.4s",
                zIndex: 999999
              }}
            />
            <Header  ref={searchComponent}/>
            <Routes>
        <Route path="/" >
          <Route index element={<Home focusSearch={() => {
            searchComponent.current.focusSearch()
          }}/>} />
          <Route path="/items/:gameName" element={<Items />} />
          <Route path="/dashboard/create-offer" element={<CreateOffer />} />
          <Route path="/product/:userId" element={<Product />} />
          <Route path="/dashboard/offers" element={<MyOffers />} />
          <Route path="/dashboard/account" element={<Accounts />} />
        </Route>
      </Routes>

            {/* <SearchContent /> */}
            
          </div>
         
        
            <Footer />
          
        </div>
      </div>
      {/**/}
    </div>
    {/*]*/}
  </div>
  </BrowserRouter>
  </AuthProvider>
</>

  );
}

export default App;
