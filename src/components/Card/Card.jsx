import style from "./Card.module.css"
import placeholder from "../../assets/placeholder.png"
import Tags from "../Tags/Tags.jsx"

function Card({ item = {}, deleteItem = () => { } }) { //post (filtrati)

    const { id, title, image, content, category, tags } = item

    return (
        <div className={style.card}>
            <img className={style.card_figure} src={image || placeholder} />
            <div className={style.card_body}>
                <h2>{title}</h2>
                <Tags tags={tags} />
                <p>{category}</p>
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