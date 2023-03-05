import useGenerateVideo from "hooks/useGenerateVideo";
import { useForm } from "react-hook-form";

const transitions = ["BookFlip", "Bounce", "BowTieHorizontal", "BowTieVertical", "BowTieWithParameter", "ButterflyWaveScrawler", "CircleCrop", "ColourDistance", "CrazyParametricFun", "CrossZoom", "Directional", "DoomScreenTransition", "Dreamy", "DreamyZoom", "FilmBurn", "GlitchDisplace", "GlitchMemories", "GridFlip", "InvertedPageCurl", "LeftRight", "LinearBlur", "Mosaic", "Overexposure", "PolkaDotsCurtain", "Radial", "SimpleZoom", "StereoViewer", "Swirl", "TVStatic", "TopBottom", "WaterDrop", "ZoomInCircles", "ZoomLeftWipe", "ZoomRigthWipe", "angular", "burn", "cannabisleaf", "circle", "circleopen", "colorphase", "coord-from-in", "crosshatch", "crosswarp", "cube", "directional-easing", "directionalwarp", "directionalwipe", "displacement", "doorway", "fade", "fadecolor", "fadegrayscale", "flyeye", "heart", "hexagonalize", "kaleidoscope", "luma", "luminance_melt", "morph", "mosaic_transition", "multiply_blend", "perlin", "pinwheel", "pixelize", "polar_function", "powerKaleido", "randomNoisex", "randomsquares", "ripple", "rotateTransition", "rotate_scale_fade", "scale-in", "squareswire", "squeeze", "swap", "tangentMotionBlur",
	"undulatingBurnOut", "wind", "windowblinds", "windowslice", "wipeDown", "wipeLeft", "wipeRight", "wipeUp"]

export default function FormEffects() {
	const { register, handleSubmit } = useForm();
	const { generateVideo } = useGenerateVideo();

	const onSubmit = (data) => generateVideo({ videoOptions: data });

	return (
		<form
			className="w-full flex flex-col sm:justify-center gap-5"
			action="#"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="w-full">
				<input
					id="clipDuration"
					className="w-full flex items-center rounded-md ring-1 ring-neutral-400 shadow-sm py-3 px-2 hover:ring-orange-400 focus-visible:ring-orange-400 text-neutral-800"
					placeholder="Clip duration (0 - 20 seconds)"
					type="number" min="0" max="20"
					name="clipDuration"
					{...register("clipDuration")} />
				<label className="block mt-2 text-neutral-400" for="clipDuration">The duration of the clip in milliseconds</label>
			</div>
			<div className="w-full">
				<input
					id="transitionDuration"
					className="w-full flex items-center rounded-md ring-1 ring-neutral-400 shadow-sm py-3 px-2 hover:ring-orange-400 focus-visible:ring-orange-400 text-neutral-800"
					placeholder="Clip duration (0 - 20 seconds)"
					type="number" min="0" max="20"
					name="transitionDuration"
					{...register("transitionDuration")} />
				<label className="block mt-2 text-neutral-400" for="transitionDuration">The duration of the transition in milliseconds</label>
			</div>

			<div className="w-full">
				<select id="transition" className="w-full flex items-center rounded-md ring-1 ring-neutral-400 shadow-sm py-3 px-2 hover:ring-orange-400 focus-visible:ring-orange-400" name="transition" {...register("transition")}>
					<option value=""></option>
					{transitions.map((transition, index) => <option value={transition} key={index}>{transition}</option>)}
				</select>
				<label className="block mt-2 text-neutral-400" for="transformation">Transition parameters (<a href="https://gl-transitions.com/gallery" target="_blank">List and Example transition</a>)</label>
			</div>
			<div className="flex flex-row gap-4">
				<button className="btn font-bold bg-blue-600 rounded-full text-bold text-white text-xl px-6 py-4" type="submit">
					Generate Video
				</button>
			</div>
		</form>
	)
}
