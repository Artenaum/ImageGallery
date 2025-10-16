import styles from './ImageCard.module.css'

const ImageCard = (props) => {
	return (
		<div className={styles.imagecard} onClick={props.onClick}>
			<p>{props.title}</p>
			<div className={styles.imageholder}>
				<img src={props.image}/>
			</div>
		</div>
	)
}

export default ImageCard