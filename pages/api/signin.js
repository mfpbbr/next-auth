export default function handler (req, res) {

  if (req.method === 'POST') {

    console.log(req.body)

     const email = req.body.email
     const password = req.body.password

     //console.log(Object.keys(req.body))

     //console.log(email + '' + password)

      if (email === 'a@a.com' && password === '123') {

        /* ====== */
        res.setHeader('Set-Cookie', 'token=123; HttpOnly; Max-Age=86400; Path=/')
        /* ====== */


         return res.status(200).json({
            status: true
         })
      }

      /* ====== */
      res.setHeader('Set-Cookie', 'token=deleted; HttpOnly; Path=/')
      /* ====== */
      return res.status(400).json({ status: false })
  }

  return res.status(405)

}
