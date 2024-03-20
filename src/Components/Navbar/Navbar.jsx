
import navLogo from "../../assets/navLogo.svg"
import NavDrawer from "../NavDrawer/NavDrawer"


const Navbar = () => {

    return (
        <div className="h-[10vh] border-b-[.1px] border-[#fdfdfd] flex items-center justify-evenly text-white flex-wrap mx-9">
            <div className="flex items-center gap-2 text-2xl">
                <img src={navLogo} alt="" />
                <p>QuillAudits</p>
            </div>
            <div>
                <ul className="md:flex md:gap-8 hidden ">
                    <li>
                        <select name="pets" className="bg-transparent">
                            <option value="">Services</option>
                            <option value="dog">Dog</option>
                        </select>
                    </li>
                    <li>Pricing</li>
                    <li>Our Audits</li>
                    <li>
                        <select name="pets" className="bg-transparent">
                            <option value="">Tools</option>
                            <option value="dog">Dog</option>
                        </select>
                    </li>
                    <li>
                        <select name="pets" className="bg-transparent">
                            <option value="">Resources</option>
                            <option value="dog">Dog</option>
                        </select>
                    </li>
                    <li>
                        <select name="pets" className="bg-transparent">
                            <option value="">Refer-Earn-Secure</option>
                            <option value="dog">Dog</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div>
                <button className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-3 py-2  bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-purple-900">
                        Request An Audit
                    </div>
                </button>
            </div>

            {/* Show On small Screen */}

            <div className="block md:hidden">
                <NavDrawer />
            </div>

        </div>
    )
}

export default Navbar