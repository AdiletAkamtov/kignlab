function App() {
	return (
		<div className="flex justify-center">
			<div className="border border-black rounded-lg m-12 h-100 w-[400px] flex px10">
				<div className="mt-8 ml-8 font-mono ">
					<h1 className="text-3xl mb-8 font-bold font-montserrat">Login</h1>
					<div className="flex flex-col mb-8">
						<span className="font-mono text-sm mb-2">E-mail</span>

						<input
							className="pl-[12px]  rounded-lg border w-80 h-9 placeholder-black placeholder-opacity-100 "
							type="email"
							name=""
							id=""
							placeholder="
						John.smith@gmail.com"
						/>
					</div>

					<div className="flex flex-col mb-8">
						<span className="font-mono text-sm mb-2 ">Password*</span>

						<input
							className=" pl-[12px] rounded-lg border border-gray-400 w-80 h-9 placeholder-black bg-[url('/src/img/ic_unvisiable.png')] bg-no-repeat bg-right py-1"
							type="email"
							name="email"
							id="email"
							placeholder="
						******"
						/>
					</div>

					<div className="flex text-sm mb-4 text-gray-400 text-center md:text-center">
						<input
							className="w-4 h-4 bg-gray-100 border-gray-300 
							accent-gray-500 mt-[2px]"
							type="checkbox"
							id="scales"
							name="scales"
						/>
						<label className="ml-2" for="scales">
							Remember me
						</label>
						<p className="ml-24 text-right colors1 rounded-lg text-[#B2AC00]">
							Forgot Password?
						</p>
					</div>
					<button className="w-80 h-9 rounded-lg">Login</button>

					<div className="flex text-sm mt-4 mb-4">
						<p>Don't have an account?</p>
						<a href="#" className="ml-2 text-[#B2AC00]">
							Online Register.
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
export default App
