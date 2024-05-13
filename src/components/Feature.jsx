
//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../variants";

import featureImg from "../assets/featuredimg.svg"

const Feature = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

        <motion.div className="lg:w-1/4"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Why we are better than others</h3>
          <p className="text-base text-tartiary">Te Ofrecemos la mejor logistica para planear de forma mas eficiente el modo en que serán transportados y almacenados los bienes que necesita trasladar en el mejor plazo posible y con seguridad que nosotros brindamos.</p>
        </motion.div>

        <motion.div className="w-full lg:w-3/4"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">

            <div className="bg-[rgba(0, 0, 0, 0.15)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Transporte en plataforma</h5>
              </div>
            </div>

            <div className="bg-[rgba(0, 0, 0, 0.15)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Transporte en plataforma</h5>
              </div>
            </div>

            <div className="bg-[rgba(0, 0, 0, 0.15)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Transporte en plataforma</h5>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Feature