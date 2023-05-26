import { motion } from "framer-motion";
import { item  } from "../animations/transition";

export default function LocationCards({ address, title, specifics, city }: any) {
  return (
    <motion.div variants={item} className="w-full mx-auto relative flex flex-col justify-between mt-1 rounded-xl h-full">
      <motion.div whileHover={{scale: 1.05}} className="bg-black w-[300px] h-[300px] rounded-lg  p-5 , bg-opacity-[.5] backdrop-filter backdrop-blur-sm flex justify-center items-center">
        <div className="flex flex-col justify-center text-white text-center">
          <h1 className="text-4xl mb-4">{title}</h1>
          <p className="mb-2">{address}</p>
          <p className="mb-2">{specifics}</p>
          <p>{city}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
