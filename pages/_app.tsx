import cookie from 'cookie';
import * as React from 'react'
import type { IncomingMessage } from 'http'
import type { AppProps, AppContext } from 'next/app'
 
import { SSRKeycloakProvider, Persistors } from '@react-keycloak/nextjs'
import type { KeycloakCookies } from  '@react-keycloak/nextjs'
import { Header } from '../components/header';


const keycloakCfg = {
  realm: 'master',
  url: 'http://localhost:8080/auth',
  clientId: 'test'
}
 
interface InitialProps {
  cookies: KeycloakCookies
}
 
function MyApp({ Component, pageProps, cookies }: AppProps & InitialProps) {
  return (
    <div>
        <Header title="Super Header Title"></Header>
        <SSRKeycloakProvider
        keycloakConfig={keycloakCfg}
        persistor={Persistors.Cookies(cookies)}
        >
        <Component {...pageProps} />
        </SSRKeycloakProvider>
    </div>
  )
}
 
function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {}
  }
  return cookie.parse(req.headers.cookie || '')
}
 
MyApp.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  return {
    cookies: parseCookies(context?.ctx?.req)
  }
}
 
export default MyApp