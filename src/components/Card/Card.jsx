import style from "./Card.module.css"
import { API_BASE_URI } from '../../layouts/Main/Main.jsx'
import placeholder from "../../assets/placeholder.png"
import Tags from "../Tags/Tags.jsx"

function Card({ item = {}, deleteItem = () => { } }) { //post (filtrati)

    const { id, title, image, content, category, tags } = item

    const URI_IMAGE = `${API_BASE_URI}images/`

    return (
        <div className={style.card}>
            <img className={style.card_figure} src={image ? URI_IMAGE + image : placeholder} />
            <div className={style.card_body}>
                <h2>{title}</h2>
                <Tags tags={tags} />
                <p className={style.category}>Difficoltà: {category}</p>
                <p>{content}</p>
                <div className={style.buttons}>
                    <button className={style.button}>Leggi di più</button>
                    <button className={style.button_delete} onClick={() => deleteItem(id)}>Elimina</button>
                </div>
            </div>
        </div>
    )
}

export default Card