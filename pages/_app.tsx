
import withRedux from "next-redux-wrapper"
import App from "next/app"
import React from "react"
import { Provider } from "react-redux"
import {wrapper} from "../store/index"
import "../styles/index.scss"

type Props = {
  Component: React.FunctionComponent,
  pageProps:  any
}



const WrappedApp: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)