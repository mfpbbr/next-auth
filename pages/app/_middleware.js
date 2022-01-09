import { NextResponse } from 'next/server'

export function middleware (req, res) {

  const token = req.cookies['token']

  if (token === '123') {
     return NextResponse.next()
  }
     return NextResponse.redirect('/signin')

}
