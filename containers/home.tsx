import {motion} from 'framer-motion'


export default function Home() {
    const title = 'Our Mission'
    const description = 'HandPick! Artisanally Curated, Cage Free, Sustainable, Small Batches and Organic Tea! '

    

  return (
    <motion.div 
    id='home'
    initial={{opacity: 0}}
    animate={{
        opacity: 1,
        transition: {
            duration: 1,
            
        }
    }}

    className="
    w-full 
    h-screen 
    justify-center
    flex
    place-items-center
    ">
      <motion.div 
       initial={{opacity: 0, x: -100}} 
       whileInView={{opacity: 1, x: 0,
        transition:{duration: 1}

    }}

      className="
      flex 
      items-center 
      rounded-lg 
      bg-center 
      bg-cover
      bg-home-pattern
      bg-no-repeat
      h-[80%]
        ">
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1, delay: 0.5}}
        className="
        bg-black 
         w-full
         p-5
         opacity-[.9]
         text-center
         shrink-1
           ">
          <h1 
          className="
          text-7xl 
          text-white
          ">{title}</h1>
          <h4
         className="
         text-2xl
         md:text-4xl
         mt-5
         text-white
         " 
          >{description}</h4>

        </motion.div>
      </motion.div>
    </motion.div>
  );
}
