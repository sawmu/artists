import React from 'react'

type Props = {}

function Brands({}: Props) {
    const brandsList = [
        {

          title: 'A',
          name: ['Adam Blackstone', 'Adam Neely','Alessandro Cortini','Ana Karina Sebastiao','Angie Swan','Artur Menezes',]
         
        },
        {

            title: 'B',
            name: ['Bob Dylan', 'Bobby Wootem III', 'Brian Frasier-Moore']
           
        },

        {

            title: 'C',
            name: ['Calvin Rodgers', 'Camilla Charlesworth', 'Cory Wong']
           
        },

        {

            title: 'D',
            name: ['Daniel Bailey', 'Daru Jones', 'David Ellefson', 'Doug Wimbish', 'Dylan Dunlap']
           
        },

        {

            title: 'E',
            name: ['Elevation Worship']
           
        },

        {

            title: 'F',
            name: ['Frank Bello']
           
        },

        {

            title: 'J',
            name: ['James Bay', 'James Iha', 'James Ivanyi', 'Janek Gwizdala', 'Jeremy Zucker', 'Jesus Culture', 'Joe Satriani', 'John Taylor', 'Jon Carin', 'Joss Stone', 'Jude Smith']
           
        },

        {

            title: 'K',
            name: ['Keith McPhee']
           
        },

        {

            title: 'M',
            name: ['Marcus Machado', 'Mateus Asato', 'Matt McJunkins', 'Matthias Loescher', 'MONO (Japan)', 'Myles Jasnowski']
           
        },

        {

            title: 'P',
            name: ['Paul Turner', 'Phil Soussan', 'Phil X', 'Plini']
           
        },

        {

            title: 'R',
            name: ['Rhett Shull']
           
        },

        {

            title: 'S',
            name: ['Sarah Lipstate', 'Sick Puppies', 'Stan Bicknell']
           
        },

        {

            title: 'T',
            name: ['Thaddeus Tribbet']
           
        },

        {

            title: 'V',
            name: ['Vivian Campbell']
           
        },

        {

            title: 'W',
            name: ['Wormrot']
           
        },
     
      ]
  return (
    <div className='p-3 max-w-7xl mx-auto  text-black'>
        <div className="w-full">
        {brandsList.map((brand, index) => (
                <div className='text-left py-5 px-5 border-b-gray-200 border-b-2 last:border-b-0 ' key={index}>
                    <div className='text-center flex flex-col justify-start'>
                        <div className='text-amber-600 py-3 flex flex-row font-bold' key={index}>
                            <p>{brand.title}</p>
                        </div>
                        <div className="flex flex-row flex-wrap ">
                        {brand.name.map((bname, index) => (
                            <div className='w-1/2  md:w-1/3 lg:w-1/4 xl:w-1/5 ' key={index}>
                                <p className='text-left text-sm py-3 pr-3'>{bname}</p>
                            </div>
                        ))}
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Brands