import style from './card.module.css'

const Card = ({name, description , color , src , alt , grid }) => {
    return (
    
        <div className={`${style.card}  ${style[color]} ${style[grid]}`}>

            <h2 className={`${style.h2}`}>{name}</h2>
            <p className={`${style.p}`}>{description}</p>
            <img className={`${style.img}`} src={src} alt={alt} />
            
        </div>
    
    )
}

export default Card;