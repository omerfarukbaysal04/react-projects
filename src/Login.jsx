import {useState} from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dogruEmail="test@site.com"
  const dogruSifre="1234"
  const [mesaj, setMesaj]=useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === dogruEmail) {
     console.log("Email doğru")}
    else {console.log ("Email hatalı")}

    if (password === dogruSifre){
    console.log("Şifre doğru")}
    else {console.log ("Şifre hatalı")}

    if (email === dogruEmail && password === dogruSifre){
        setMesaj("Giriş Başarılı")
        navigate("/notlar")}
             else {setMesaj("Hatalı Giriş")}
  }

  return (
    <div className="login-box">
      <h1>Giriş Yap</h1>
      <h2>Mail</h2>
      <form onSubmit={handleSubmit}>
      <input 
         value={email}
         onChange={(e) => setEmail(e.target.value)}
      />
      {/* <p>Yazdığın: {email}</p> */}
       <h2>Şifre</h2>
        <input type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         />
       <button type="submit">Giriş Yap</button>
      </form>
      <p className={mesaj ==="Giriş Başarılı" ? "basarili" : "hata"}>{mesaj}</p>
    </div>
  )
}

export default Login
