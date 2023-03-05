export default function VideoPreview({ url }) {
	return (
		<div class="w-full flex-col px-6 xl:px-0">
			<video class="object-cover w-full aspect-[16:10] rounded-[2rem] mb-5" src={url} controls autoplay loop muted></video>
			<a
				href={url}
				download
				class="block btn font-bold bg-blue-600 rounded-full text-bold text-white text-xl text-center px-6 py-4 mt-10 mx-auto max-w-md"
			>
				Download VideoSlider
			</a>
		</div>
	)
}
