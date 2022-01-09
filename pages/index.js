import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div className={styles.grid}>
          <a href="/signin" className={styles.card}>
            <h2>SIGN IN</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/signup" className={styles.card}>
            <h2>SIGN UP</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>
    </div>
  )
}
