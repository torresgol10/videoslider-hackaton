import ImagesContext from 'context/ImagesContext';
import { useContext } from 'react';

export function useImages() {
	const {images, setImages} = useContext(ImagesContext);

	return { images, setImages };
}
