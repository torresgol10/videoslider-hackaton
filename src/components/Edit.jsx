import FormEffects from "./FormEffects";
import ListImage from "./ListImage";

export default function Edit({ onSubmit }) {

	return (
		<>
			<div className="relative w-full flex flex-col gap-4 lg:pl-5">
				<ListImage />
				<h2 className="text-2xl font-bold">Video options</h2>
				<FormEffects onSubmit={onSubmit} />
			</div>
		</>
	)
}
