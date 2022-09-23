import React from 'react'

type Props = {}

function Brands({}: Props) {
    const brandsList = [
        {

          title: 'A',
          name: ['Free Wifi', 'Free breakfast']
         
        },
        {

            title: 'B',
            name: ['Free Wifi', 'Free breakfast']
           
        },
     
      ]
  return (
    <div className='h-screen p-3 bg-slate-50 text-black'>
        <div className="w-full">
        {brandsList.map((brand, index) => (
                <div className='text-center py-5 px-5 flex flex-col justify-center items-center' key={index}>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <div key={index}>
                            <p>{brand.title}</p>
                        </div>
                        {brand.name.map((bname, index) => (
                            <div key={index}>
                                <h2 className='text-2xl md:text-3xl py-5'>{bname}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Brands