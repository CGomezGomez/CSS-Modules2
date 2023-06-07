import style from './header.module.css'

const Header = ({title, title2, text}) => {
    
    return(
        <div className={`${style.container}`}>
            <h1 className={`${style.h1}`}>{title}</h1>
            <h2 className={`${style.h2}`}>{title2}</h2>
            <p className={`${style.p}`}>{text}</p>
        </div>
    )
}

export default Header;