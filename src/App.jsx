import { useState } from 'react'
import './App.css'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css";
import { useEffect } from 'react'
import axios from 'axios'
import ImageCard from './components/ImageCard';

function App() {
	const [index, setIndex] = useState(-1)
	const [photos, setPhotos] = useState([])

	const fetchPhotos = async () => {
		const response = await axios.get("https://fakestoreapi.com/products")
		setPhotos(response.data)
	}

	useEffect(() => {
		fetchPhotos()
	}, [])

	if (!photos.length) return null
  	return (
    	<>
			<div className="cards-holder">
				{photos.map(photo => 
					<ImageCard
					onClick={() => setIndex(photo.id - 1)}
					key={photo.id}
					title={photo.title}
					image={photo.image}
					/>
				)}
				<Lightbox
					index={index}
					open={index >= 0}
					close={() => setIndex(-1)}
					slides={
						photos.map((photo) => ({src: photo.image}))
					}
				/>
			</div>
    	</>
  	)
}

export default App
