import style from "./Form.module.css"

function Form({ formData, handleFormData, submit }) {

    return (
        <>
            <form onSubmit={submit}>
                <h3 className={style.form_title}>Crea un nuovo Post</h3>
                <div className={style.form_field}>
                    <label htmlFor="title">Titolo</label>
                    <input name="title" type="text" placeholder="Inserisci il titolo" className={style.input_item} onChange={handleFormData} value={formData.title} />
                </div>
                <div className={style.form_field}>
                    <label htmlFor="tags">Tags</label>
                    <input name="tags" type="text" placeholder="Inserisci i tags" className={style.input_item} onChange={handleFormData} value={formData.tags} />
                </div>
                <div className={style.form_field}>
                    <label htmlFor="tags">Immagine</label>
                    <input name="image" type="text" placeholder="Inserisci l'immagine" className={style.input_item} onChange={handleFormData} value={formData.image} />
                </div>
                <div className={style.form_field}>
                    <label htmlFor="tags">Descrizione</label>
                    <input name="content" type="text" placeholder="Inserisci la descrizione" className={style.input_item} onChange={handleFormData} value={formData.content} />
                </div>
                <div className={style.form_field}>
                    <label htmlFor="category">Categoria</label>
                    <select name="category" className={style.input_item_select} onChange={handleFormData} value={formData.category}>
                        <option value="">Seleziona una categoria</option>
                        <option value="facile">Facile</option>
                        <option value="difficile">Difficile</option>
                    </select>
                </div>
                <div className={style.form_published_field}>
                    <label htmlFor="tags">Pubblica</label>
                    <input name="published" type="checkbox" className={style.input_item_checkbox} onChange={handleFormData} checked={formData.published} />
                </div>
                <input type="submit" className={style.submit} value="Aggiungi" />
            </form>
        </>
    )
}

export default Form