import { withKeycloak } from '@react-keycloak/nextjs'
 
const IndexPage = ({ keycloak }) => {
  const loggedinState = keycloak?.authenticated ? (
    <span className="text-success">logged in</span>
  ) : (
    <span className="text-danger">not logged in</span>
  )
 
  const welcomeMessage = keycloak
    ? `Welcome back user!`
    : 'please Login: '
 
  return (
    <div>
      <h1 className="mt-5">Hello Next.js + Keycloak 👋</h1>
      <div className="mb-5 lead text-muted">
        This is an example of a Next.js site using Keycloak.
      </div>
 
      <p>You are: {loggedinState}</p>
      <p>{welcomeMessage}</p>

      {!!keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}


      {!keycloak.authenticated && (
        <button type="link" onClick={() => keycloak.login()}>
          Login...
        </button>
      )}
      
      
    </div>
  )
}
 
export default withKeycloak(IndexPage)