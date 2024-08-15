import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Components/Header'
import Card from '../Components/Card'
import TodoContainer from '../Components/TodoContainer'

const LandingPage = () => {
    const data = useLocation()
  return (
    <div className="bg-black p-10">
      <div className="bg-[#efefef] p-10 border rounded-md">
        <Header username={data.state.user}/>
        <div className='flex justify-between my-5 gap-7 flex-wrap'>
          <Card bgcolor={"#8272da"} title={"23"} subtitle={"chennai"} />
          <Card bgcolor={"#fd6663"} title={"December"} subtitle={"12:34:47"} />
          <Card bgcolor={"#fca201"} title={"Build"} subtitle={"React"} />
        </div>
        <TodoContainer />
      </div>
    </div>
  )
}

export default LandingPage