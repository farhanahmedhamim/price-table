import logo from "/vite.svg"

import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
            <div className="my-12 flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 space-y-8">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                    <p className="md:w-1/2">A good example of a pragraph contains a topic sentence, details and a conclusion.There are many different kinds of animals that live in China.</p>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Your email" className="bg-[#9a7af159] py-2 px-4 rounded-md focus:border-none focus:outline-none" />
                        <input type="submit" value="Subscribe" className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300" />
                    </div>
                </div>

                <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Platform</h4>
                        <ul className="space-y-3">
                            <li><a href="/" className="block hover:text-gray-300">Overview</a></li>
                            <li><a href="/" className="block hover:text-gray-300">Feature</a></li>
                            <li><a href="/" className="block hover:text-gray-300">About</a></li>
                            <li><a href="/" className="block hover:text-gray-300">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Help</h4>
                        <ul className="space-y-3">
                            <li><a href="/" className="block hover:text-gray-300">How does it work?</a></li>
                            <li><a href="/" className="block hover:text-gray-300">Where to ask question?</a></li>
                            <li><a href="/" className="block hover:text-gray-300">How to play?</a></li>
                            <li><a href="/" className="block hover:text-gray-300">What is needed for this?</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Contacts</h4>
                        <div className="space-y-3">
                            <p className="hover:text-gray-300">(012) 1234-567-890</p>
                            <p className="hover:text-gray-300">123 xyz xyz</p>
                            <p className="hover:text-gray-300">qwuerybaihevfv, qiwu - hrebd</p>
                            <p className="hover:text-gray-300">095467</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-6">
                <p>Copyright © by Farhan 2024. All rights are reserved</p>
                <ul className="flex items-center justify-center space-x-5">
                    <li className="hover:-translate-y-2 transition-all duration-300"><a href="/"><AiOutlineFacebook fontSize={30} /></a></li>
                    <li className="hover:-translate-y-2 transition-all duration-300"><a href="/"><FaInstagram fontSize={30} /></a></li>
                    <li className="hover:-translate-y-2 transition-all duration-300"><a href="/"><FaTwitterSquare fontSize={30} /></a></li>
                    <li className="hover:-translate-y-2 transition-all duration-300"><a href="/"><AiOutlineLinkedin fontSize={30} /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer