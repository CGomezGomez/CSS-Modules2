import style from './card.module.css'

const Card = ({name, description, src, alt, color}) => {
    return (
    
        <div className={`${style.card} ${style[color]}`}>

            <h2 className={`${style.h2}`}>{name}</h2>
            <p className={`${style.p}`}>{description }</p>
            <img className={`${style.img}`} src={src} alt={alt} />
            
        </div>
    
    )
}

export default Card;