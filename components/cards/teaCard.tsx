import Image from "next/image";
import { motion } from "framer-motion";
import { item } from "../animations/transition";




export default function TeaCard({title, image, description}: any){

    return(
        <motion.div variants={item} className="h-[300px]  w-[300px] flex flex-col items-center relative  text-center  justify-center mt-2  mx-auto ">
            <motion.div className=" h-full w-full flex  overflow-hidden rounded-lg ">
            <motion.img whileHover={{scale: 1.1}} className="  h-full  w-full overflow-hidden rounded-lg object-cover object-center" src={image} alt="" width={400} height={400}/>
            </motion.div>
            <div className="bg-gray-800 w-full h-[60%] absolute rounded-b-lg left-0 bg-opacity-[.7] bottom-0  p-5" >
                <div className="w-full">
                 <h1 className="text-xl font-black">{title}</h1>
                    <p className="">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}