import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <div className='flex  flex-col items-center justify-between w-full   relative  py-12 px-4 md:px-6 lg:px-8 z-20 '>
         <div className="absolute inset-0 z-0 h-[530px]">
        <Image src={'https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937085/IMG-20250406-WA0018_bzonse.jpg'} alt={'photo'} layout="fill" objectFit="cover" priority />
        <div className="absolute inset-0 bg-slate-950 opacity-80"></div>
      </div>
      <div className='h-[530px]'>

      </div>
    </div>
  )
}

export default Experience
