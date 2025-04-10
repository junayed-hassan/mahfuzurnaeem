import { Button } from "@mui/material"

function Defined() {
    return (
        <div className="mt-16 pb-10 px-28">
            <h4 className="text-center text-[#3f51b5] text-xl font-semibold uppercase mb-2">Portfolio</h4>
            <h2 className="text-center text-[40px] font-bold text-gray-600">How I’m Defined</h2>
            <ul className="flex flex-wrap justify-between gap-10 mt-10">
                <li className="w-[48%] p-8 bg-[#8d9bec]/30 hover:bg-[#8d9bec]/60 transition duration-500 ease-in-out rounded-lg">
                    <img className="w-16" src="/public/defined_img/Logo-1.webp" alt="Loge-1" />
                    <h3 className="text-2xl font-bold py-2.5">Optilius Digital</h3>
                    <p className="pb-6 text-justify w-11/12">Optilius is a cutting-edge digital software company specializing in SaaS solutions tailored for startups and SMEs. We deliver innovative, scalable, and user-centric platforms designed to streamline operations, drive growth, and enhance digital experiences.</p>
                    <Button variant="contained" size="large">
                        View Details
                    </Button>
                </li>
                <li className="w-[48%] p-8 bg-[#8d9bec]/30 hover:bg-[#8d9bec]/60 transition duration-500 ease-in-out rounded-lg">
                    <img className="w-20" src="/public/defined_img/Loge-2.webp" alt="Loge-2" />
                    <h3 className="text-2xl font-bold py-2.5">Insightica Consulting</h3>
                    <p className="pb-6 text-justify w-11/12">Optilius is a cutting-edge digital software company specializing in SaaS solutions tailored for startups and SMEs. We deliver innovative, scalable, and user-centric platforms designed to streamline operations, drive growth, and enhance digital experiences.</p>
                    <Button variant="contained" size="large">
                        View Details
                    </Button>
                </li>
                <li className="w-[48%] p-8 bg-[#8d9bec]/30 hover:bg-[#8d9bec]/60 transition duration-500 ease-in-out rounded-lg">
                    <img className="w-40" src="/public/defined_img/Logo-3.webp" alt="Loge-3" />
                    <h3 className="text-2xl font-bold py-2.5">Scoperr</h3>
                    <p className="pb-6 text-justify w-11/12">Optilius is a cutting-edge digital software company specializing in SaaS solutions tailored for startups and SMEs. We deliver innovative, scalable, and user-centric platforms designed to streamline operations, drive growth, and enhance digital experiences.</p>
                    <Button variant="contained" size="large">
                        View Details
                    </Button>
                </li>
                <li className="w-[48%] p-8 bg-[#8d9bec]/30 hover:bg-[#8d9bec]/60 transition duration-500 ease-in-out rounded-lg">
                    <img className="w-36" src="/public/defined_img/Logo-4.webp" alt="Loge-4" />
                    <h3 className="text-2xl font-bold py-2.5">Itenss Digital</h3>
                    <p className="pb-6 text-justify w-11/12">Optilius is a cutting-edge digital software company specializing in SaaS solutions tailored for startups and SMEs. We deliver innovative, scalable, and user-centric platforms designed to streamline operations, drive growth, and enhance digital experiences.</p>
                    <Button variant="contained" size="large">
                        View Details
                    </Button>
                </li>
            </ul>
        </div>
    )
}
export default Defined