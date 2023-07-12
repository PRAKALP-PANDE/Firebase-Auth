import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <form>
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Your password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login