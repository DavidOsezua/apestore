import React from 'react'
import Card from '../components/Card'

const NewPairs = () => {
  return (
    <section className='p-7'>
 <div>
  <div className='flex justify-center gap-5'>
  <Card/>
  <Card/>
  <Card/>
  </div>


<h3 className='py-[2rem] '>Real time Pair</h3>

<div className='grid grid-cols-3 gap-[15px]'>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
</div>

 </div>
    </section>
  )
}



export default NewPairs