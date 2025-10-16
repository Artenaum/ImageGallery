import { useState } from 'react'
import './App.css'
import Lightbox from 'yet-another-react-lightbox'
import Inline from "yet-another-react-lightbox/plugins/inline"
import ImageService from './API/ImageService'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
	const [photos, setPhotos] = useState([])
	const [thumbnailUrls, setThumbnailUrls] = useState([])
	const [thumbnailObjects, setThumbnailObjects] = useState([])

	const fetchPhotos = async () => {
		const response = await axios.get("https://fakestoreapi.com/products")
		setPhotos(response.data)
		//photosToThumbnailUrls(response.data)
		//console.log(response.data)
	}

	useEffect(() => {
		fetchPhotos()
		//console.log(photos)
	}, [])

	const photosToThumbnailUrls = (photos) => {
		setThumbnailUrls(photos.map((photo) => photo.thumbnailUrl))
	}

	const thumbnailUrlsToThumbnailObjects = () => {
		
	}

	if (!photos.length) return null
  	return (
    	<>
			<Lightbox
				plugins={[Inline]}
				inline={{
					style: { width: "100%", maxWidth: "900px", aspectRatio: "3 / 2" },
				}}
				carousel={{
					padding: 0,
					spacing: 0,
					imageFit: "cover",
				}}
				slides={
					photos.map((photo) => ({src: photo.image}))
				}
			/>
    	</>
  	)
}

export default App
