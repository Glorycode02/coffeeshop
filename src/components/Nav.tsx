import logo from "../assets/logos/logo.png"

const Nav = () => {
    return (
        <div className="w-full h-16 bg-[#48281A] flex justify-between items-center">
            <div className="flex items-center ml-5">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <h1 className="text-2xl font-bold ml-3 text-white">Cafe Cultura</h1>
            </div>
            <div className="flex items-center">
                {/* <div className="flex items-center">
                    <a href="#" className="text-white mr-5">Home</a>
                    <a href="#" className="text-white mr-5">About</a>
                    <a href="#" className="text-white mr-5">Contact</a>
                </div> */}
            </div>
            <div className="flex items-center space-x-4 mr-4">
                <a
                    href="/login"
                    className="px-4 py-2 bg-[#48281A] text-white rounded-full w-[100px] flex items-center justify-center hover:bg-[#AB6832] transition duration-300 ease-in-out"
                >
                    Login
                </a>
                <a
                    href="/sign-up"
                    className="px-4 py-2 bg-[#48281A] text-white rounded-full w-[100px] flex items-center justify-center hover:bg-[#AB6832] transition duration-300 ease-in-out"
                >
                    Sign Up
                </a>
            </div>

        </div>
    )
}

export default Nav
