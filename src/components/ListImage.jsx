import { useImages } from "hooks/useImages"

export default function ListImage() {
	const { images } = useImages()

	return (
		<ul className="flex flex-row flex-wrap gap-2 mb-4">
			{images.map((image, index) => {
				return (
					<li className="w-[100px] h-[100px] overflow-hidden rounded-lg" key={index}>
						<img className="w-full h-full object-cover" width="180" height="180" src={image.url} />
					</li>
				)
			})}
		</ul>
	)
}
