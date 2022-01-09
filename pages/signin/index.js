
import { useState } from 'react'

export default function SigninPage() {


  const [form, setForm] = useState({
     email: '',
     password: ''
  })


  const submitSignin = (e) => {

    e.preventDefault();

    fetch('api/signin', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(form) })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }



  return (
    <div>
      <h1>SIGNIN PAGE</h1>
      <form onSubmit={submitSignin}>

        <label>Email</label>
        <input type='email' value={form.email} onChange={(e) => {
          setForm({
            ...form,
            email: e.target.value,
          })
        }} />

        <label>Password</label>
        <input type='password' value={form.password} onChange={(e) => {
          setForm({
            ...form,
            password: e.target.value,
          })
        }}/>

        <button type='submit'>submit</button>

      </form>
    </div>
  )
}
