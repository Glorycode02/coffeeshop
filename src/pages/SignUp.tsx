

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className=" w-[500px] p-8 bg-white rounded-lg shadow-md">
        <form className="flex flex-col items-center gap-5">
          <h2 className="font-bold text-2xl">
            Create an account in <span className="text-[#48281A]">Cafe Cultura</span>
          </h2>
          <input
            type="text"
            placeholder="Username"
            className="p-3 border-2 border-gray-300 rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border-2 border-gray-300 rounded-lg w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border-2 border-gray-300 rounded-lg w-full"
          />
          <input
            type="submit"
            value="Sign Up"
            className="p-3 bg-[#48281a] text-white rounded-lg w-full hover:bg-[#AB6832] transition duration-300 ease-in-out"
          />
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-between my-6">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500 font-medium">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Google and Microsoft Buttons */}
        <div className="flex gap-4">
          <button className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-full transition duration-300 ease-in-out">
            Sign in with Google
          </button>
          <button className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg w-full transition duration-300 ease-in-out">
            Sign in with Microsoft
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
