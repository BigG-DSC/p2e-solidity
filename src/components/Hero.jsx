import React from 'react'
import { setGlobalState } from '../store'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="h-[89vh]">
      <main className="flex flex-col justify-center items-center h-full">
        <h2 className="text-4xl">
          Make money with <span className="text-blue-700">Web3</span> - Gaming is coming to Blockchain!
        </h2>
        <p className="text-center my-4 ">          
          Unleash Your Class, Invite your Friends and Make Money playing!
        </p>
        <div className="flex space-x-3 my-3">
          <button
            onClick={() => setGlobalState('createModal', 'scale-100')}
            className="bg-blue-700 border-[1px] text-white py-3 px-5 duration-200 transition-all  hover:bg-blue-600"
          >
            Create Game
          </button>
          <Link
            to="/mygames"
            className="border-[1px] border-blue-700 text-blue-700 py-3 px-5 duration-200 transition-all hover:bg-blue-700 hover:text-white"
          >
            My Games
          </Link>
        </div>
      </main>
    </section>
  )
}

export default Hero
