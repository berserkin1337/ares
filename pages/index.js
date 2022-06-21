import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from "../components/Navbar"
export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hello world</h1>
    </div>
  )
}
