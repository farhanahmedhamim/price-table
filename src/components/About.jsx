import aboutImg1 from "../assets/aboutimg.svg";
import aboutImg2 from "../assets/aboutimg2.svg";
//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div className="md:w-1/2"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <img src={aboutImg1} alt="" />
        </motion.div>
        <motion.div className="md:w-2/5"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">Comprometidos con la efectividad de los <span className="text-secondary">procesos nuestra mision.</span></h2>
          <p className="text-tartiary text-lg mb-7">Ofrecer servicios de transporte de carga a través de unidades modernas y equipadas con tecnología de punta, que permitan satisfacer las expectativas de nuestros clientes, logrando ser la mejor opcion en la cadena logística de distribución.</p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div className="md:w-1/2"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <img src={aboutImg2} alt="" />
        </motion.div>
        <motion.div className="md:w-2/5"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">Ser un aliado estrategico <span className="text-secondary">nuestra vision</span></h2>
          <p className="text-tartiary text-lg mb-7">Ser el aliado estratégico más confiable y seguro para sus operaciones de nuestros clientes; por brindar un servicio de alto valor mediante nuestra flota moderna y equipo altamente calificado</p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>

    </div >
  )
}

export default About