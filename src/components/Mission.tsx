import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import coffee from "/images/cup1.jpg"

const Mission = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    if (inView) {
        controls.start({ opacity: 1, y: 0 });
    }
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className=" text-white p-10 h-[500px] flex flex-col items-center justify-between bg-cover ">
            <div className="w-full p-10 text-center flex items-center justify-center">
                <h2 className="font-bold text-4xl text-black">Our <span className="text-[#48281A] relative inline-block">
                    Mission
                    <span className="absolute left-0 right-0 bottom-0 h-1 bg-[#48281A] transform translate-y-1"></span></span></h2>
            </div>
            <div className="w-full p-10 flex items-center justify-between">
                <div className="w-1/2 text-gray-800 p-10 rounded-lg flex items-center justify-between">
                    <p className="">
                        At <strong>Cafe Cultura</strong>, we are driven by a passion for excellence and a commitment to our community. Established in 2024,
                        our mission is to provide innovative solutions that empower individuals and organizations to reach their full potential.
                        Our experienced team delivers tailored services, fostering strong relationships built on trust and transparency.
                        <p>Join us in making a positive impact and turning visions into reality.</p><br /><br />
                        <button className="px-8 py-3 bg-[#AB6832] text-white rounded-full hover:bg-[#6C4625]  transition duration-300 ease-in-out font-semibold">Get started</button>
                    </p>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <img src={coffee} alt="Image" className="rounded-md w-[400px] h-[400px] object-cover transform rotate-45 hover:transform hover:rotate-[-45] hover:transition-all hover:ease-in-out cursor-pointer" />
                </div>

            </div>
        </motion.div>
    )
}

export default Mission
