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
      <main className='min-h-screen bg-gray-200'>{children}</main>
    <Footer />
    </>
  )
}

export default Shell