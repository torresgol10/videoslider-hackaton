import { useCallback, useState } from "react";
import getGenerateVideo from "service/geGenerateVideo";
import { useImages } from "./useImages"

export default function useGenerateVideo() {
	const { images } = useImages();
	const [loading, setLoading] = useState(false)

	const generateVideo = useCallback(
		async ({ videoOptions }) => {
			try {

				setLoading(true)

				let width = 0, height = 0;

				images.forEach(image => {
					if (image.width > width) width = image.width
					if (image.height > height) height = image.height
				})

				const manifest = {
					"type": "video",
					"width": width,
					"height": height,
					"duration": 10 * images.length,
					"fps": 30,
					"tracks": [
						{
							"clipDefaults": {
								"clipDuration": videoOptions?.clipDuration || 5000,
								"transitionDuration": videoOptions?.transitionDuration || 1000,
								"transition": videoOptions?.transition || "wind",
							},
							"clips": images.map(image => {
								return {
									"media": image.url,
									"type": image.resource_type
								}
							})
						}
					]
				}

				console.log(manifest)
				const response = await getGenerateVideo({ manifest })
				console.log(response)
			} finally {
				setLoading(false)
			}
		}
		, [])

	return { loading, generateVideo }
}
