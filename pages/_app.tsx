
import withRedux from "next-redux-wrapper"
import App from "next/app"
import React from "react"
import { Provider } from "react-redux"
import {wrapper} from "../store/index"
import "../styles/index.css"

type Props = {
  Component: React.Component
  store: any
}



const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)