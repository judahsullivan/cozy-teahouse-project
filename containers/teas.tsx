import TeaCard from "@/components/cards/teaCard"
import { container } from "@/components/animations/transition";
import { motion } from "framer-motion";
import { teas } from "@/utils/data";





const TeaoftheMonth = () =>{
    const title = "Tea's of the Month"
    const subtitle = "What's Steeping at the Cozy TeaHouse?"
    return(
            <div className="w-full p-5 justify-center items-center">
                <div className="text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-black">{title}</h1>
          <h3 className="text-2xl md:text-4xl">{subtitle}</h3>
        </div>
        <div className="w-full  flex justify-center items-center">
          <motion.div variants={container} initial="hidden" whileInView={'visible'} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teas.map((tea, index) => (
              <TeaCard key={index} title={tea.title} image={tea.image} description={tea.description} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeaoftheMonth;
