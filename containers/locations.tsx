import { locations } from '@/utils/data';
import LocationCards from '@/components/cards/locationCard';
import {motion} from 'framer-motion'
import { container } from '@/components/animations/transition';


export default function Locations() {

   const title = "Locations" 
   const subtitle = "Here are some of our locations! "

  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{
        opacity: 1,
        transition: {
            duration: .2,
        }
    }}

    className="
    justify-center
    flex
    items-center
    flex-col
      p-5
    ">
              <motion.div 
       initial={{opacity: 0, x: -100}} 
       whileInView={{opacity: 1, x: 0}}
      className="
      flex 
      p-5
      w-[80%]
      h-[80%]
      flex-col
      items-center 
      justify-evenly
      rounded-lg 
      bg-center
      bg-cover
      bg-locations
      bg-no-repeat

        ">
         <motion.div
        initial={{opacity: 0}} 
        whileInView={{
            opacity: 1,
            transition:{
                duration: 0.8
            }
        }}

         className=' text-center bg-black bg-opacity-[.6] px-2  rounded-xl'>
                <h1 className='text-3xl md:text-4xl font-black'>{title}</h1>
                <h2 className='text-2xl md:text-3xl'>{subtitle}</h2>
            </motion.div>
   
        <motion.div 
        variants={container}
        initial='hidden'
        whileInView='visible'
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
         ">
        {locations.map((location, index)=> (
            <LocationCards 
            key={index} 
            city={location.city} 
            address={location.address}
            specifics={location.specifics}
            title={location.title}
            
            />
 
       ))}

      </motion.div>
      </motion.div>
    </motion.div>
  );
}

