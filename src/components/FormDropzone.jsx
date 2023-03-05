import Dropzone from "dropzone";
import { useEffect, useRef, useState } from "react";
import { useImages } from "hooks/useImages";
import { API_KEY, URL_UPLOAD } from "constant";

export default function FormDropzone({ handlerClickEdit }) {
	const [isButtonEdit, setIsButtonEdit] = useState(false)
	const dropzones = useRef(null)
	const { images, setImages } = useImages()

	useEffect(() => {
		if (dropzones.current === null) {
			dropzones.current = new Dropzone("#dropzone", {
				acceptedFiles: ".jpg,.jpeg,.png,.webp",
				maxFiles: 50,
				thumbnailWidth: 200,
				thumbnailHeight: 120,
			});

			dropzones.current.on("success", (file, response) => {
				console.log(response)
				const { secure_url, resource_type, height, width } = response
				const image = { url: secure_url, resource_type, height, width }
				const newImages = images
				newImages.push(image)
				setImages(newImages)
				setIsButtonEdit(!isButtonEdit)
			})

			dropzones.current.on("error", (file, response) => {
				console.log(response);
			});

		}
	}, [])

	return (
		<>
			<div className="relative flex flex-col gap-4 md:gap-8 max-w-md">
				<form
					id="dropzone"
					className="dropzone-form w-full flex flex-col sm:justify-center sm:items-center sm:gap-8 sm:pt-36 sm:pb-16 sm:px-16 rounded-[2rem]"
					action={URL_UPLOAD}>
					<input type="hidden" name="upload_preset" value="ml_default" />
					<input type="hidden" name="timestamp" value={Date.now() / 1000} />
					<input type="hidden" name="api_key" value={API_KEY} />

					<button className="btn font-bold pointer-events-none bg-blue-600 rounded-full text-bold text-white text-xl px-6 py-4">
						Upload file
					</button>
					<strong className="hidden sm:block text-lg mt-4 text-gray-800"
					>or drop a file</strong
					>
				</form>
			</div>
			{isButtonEdit && <div class="block flex-row gap-4">
				<button className="btn font-bold bg-blue-600 rounded-full text-bold text-white text-xl px-6 py-4"
					onClick={() => handlerClickEdit()}>
					Select Effects
				</button>
			</div>
			}
		</>
	)
}
