import "App.css";
import Header from 'components/Header';
import Footer from 'components/Footer';
import FormDropzone from 'components/FormDropzone';
import { ImagesContextProvider } from "context/ImagesContext";
import Edit from "components/Edit";
import { useState } from "react";
import VideoPreview from "components/VideoPreview";
import useGenerateVideo from "hooks/useGenerateVideo";

function App() {
	const [isEdit, setIsEdit] = useState(false)
	const { video, generateVideo } = useGenerateVideo();

	const onSubmit = (data) => generateVideo({ videoOptions: data });

	const handlerClickEdit = () => {
		setIsEdit(!isEdit)
	}



	return (
		<ImagesContextProvider >
			<Header />
			<main className="w-full max-w-5xl">

				{video && <VideoPreview url={video} />}
				{video === null &&
					<div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 px-6 xl:px-0">
						<div className="flex flex-col lg:flex-col items-center lg:items-start md:max-w-3xl lg:max-w-lg">
							<picture className="w-full aspect-video overflow-hidden rounded-[2rem] mb-5">
								<img className="object-cover" src="edit.jpg" alt="Create VideoSlider" />
							</picture>
							<h1 className="font-bold tracking-tight mb-3 text-4xl md:text-5xl lg:text-6xl text-center lg:!text-left">
								Create <span className="text-gradient">VideoSlider</span>
							</h1>
							<p className="font-bold text-xl m-0 text-center lg:!text-left mb-2">
								100% Automatically and
								<span className="text-gradient"> Free</span>
							</p>
							<p className="mb-0">
								Transform your static images into video sliders with our
								free service. Create unique and dynamic presentations in
								seconds.
							</p>
						</div>

						{!isEdit && <FormDropzone handlerClickEdit={handlerClickEdit} />}

						{isEdit && <Edit onSubmit={onSubmit} />}

					</div>
				}
			</main>
			<Footer />
		</ImagesContextProvider>
	);
}

export default App;
