import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
interface ShellProps {
  children: React.ReactNode
}

const Shell: React.FC<ShellProps> = ({ children }) => {
  return (
    <>
    <Header />
      <main className='min-h-screen dark:bg-gray-900 bg-white'>{children}</main>
    <Footer />
    </>
  )
}

export default Shell