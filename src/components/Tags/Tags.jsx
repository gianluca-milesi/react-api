import style from "./Tags.module.css"

function Tags({ tags = [] }) { //filteredTags

    return (
        <ul className={style.tag_list}>
            {tags.map(tag => (
                <li key={tag} className={`${style.tag_item} ${style[tag]}`}>{tag}</li>
            ))}
        </ul>
    )
}

export default Tags