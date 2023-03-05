export default function Header() {
	return (
		<header
			className="w-full max-w-5xl relative lg:absolute top-0 flex items-center justify-between px-6 xl:px-0 py-3 mb-10 border-b-[1px] border-gray-100"
		>
			<h1 className="text-2xl md:text-3xl font-bold">
				<a href="/" title="Transform your static images into video sliders">Cloud<span className="text-gradient">VideoSlider</span></a>
			</h1>
			<ul className="flex gap-3 md:gap-8 m-0 text-sm md:text-lg">
				<li>
					<a
						href="/edit"
						className="text-gray-500 hover:text-violet-500">Edit</a
					>
				</li>
				<li>
					<a
						href="/download"
						className="text-gray-500 hover:text-violet-500">Download</a
					>
				</li>
				<li>
					<a
						href="mailto:torresgol10.it@gmail.com"
						className="text-gray-500 hover:text-violet-500">Contact</a
					>
				</li>
			</ul>
		</header>
	)
}
