import style from "./Header.module.css"

function Header() {

    return (
        <header>
            <div className={style.label}>
                <h1 className={style.main_title}>Il mio blog</h1>
            </div>
        </header>
    )
}

export default Header