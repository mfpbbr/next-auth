import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div>
          <a href="/signin">
            <h2>SIGN IN</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/signup">
            <h2>SIGN UP</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>
    </div>
  )
}
