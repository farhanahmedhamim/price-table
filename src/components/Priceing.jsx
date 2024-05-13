import { useState } from "react";
import green from "../assets/green.png"

//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../variants";

const Priceing = () => {

    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        {
            name: "Plataforma",
            monthlyPrice: 50,
            yearlyPrice: 85,
            description: "A common from of Lorem ipum reads: Lorem ipsum dolor sit amet, consecteture adipiscing elit.",
            green: green,
        },
        {
            name: "Encapsulado",
            monthlyPrice: 39,
            yearlyPrice: 399,
            description: "A common from of Lorem ipum reads: Lorem ipsum dolor sit amet, consecteture adipiscing elit.",
            green: green,
        },
        {
            name: "Bombonas",
            monthlyPrice: 59,
            yearlyPrice: 599,
            description: "A common from of Lorem ipum reads: Lorem ipsum dolor sit amet, consecteture adipiscing elit.",
            green: green,
        },
    ]

    return (
        <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Nuestra Flota de transporte</h2>
                <p className="md:w-1/3 text-tartiary mx-auto px-4">Contamos con la mas moderna flota de transporte para asegurar el correcto transporte de su mercancia, con la seguridadd correspondiente y en el tiempo optimo</p>

                {/* <!-- toggle priceing --> */}
                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Monthly</span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Yearly</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                </div>

            </div>

            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.5 }}
            >
                {
                    packages.map((pak, index) => {
                        return (
                            <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                                <h3 className="text-3xl font-bold text-center text-primary">{pak.name}</h3>
                                <p className="text-tartiary text-center my-5">{pak.description}</p>
                                <p className="mt-5 text-center text-secondary text-4xl font-bold">
                                    {isYearly ? `$${pak.yearlyPrice}` : `$${pak.monthlyPrice}`}<span className="text-base text-tartiary font-medium">{isYearly ? "/year" : "/month"}</span>
                                </p>
                                <ul className="mt-4 space-y-2 px-4">
                                    <li className="flex gap-2 items-center">
                                        <img src={pak.green} alt="" className="w-4 h-4" />Video of Lessons
                                    </li>
                                    <li className="flex gap-2 items-center">
                                        <img src={pak.green} alt="" className="w-4 h-4" />Homework check
                                    </li>
                                    <li className="flex gap-2 items-center">
                                        <img src={pak.green} alt="" className="w-4 h-4" />Additional practical task
                                    </li>
                                    <li className="flex gap-2 items-center">
                                        <img src={pak.green} alt="" className="w-4 h-4" />Monthly conferences
                                    </li>
                                    <li className="flex gap-2 items-center">
                                        <img src={pak.green} alt="" className="w-4 h-4" />Personal advice from teachers
                                    </li>
                                </ul>
                                <div className="w-full mx-auto mt-8 flex items-center justify-center">
                                    <button className="btnPrimary">Get started</button>
                                </div>
                            </div>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}

export default Priceing