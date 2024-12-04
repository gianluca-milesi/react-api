import style from "./Main.module.css"
import { useState } from "react"
import initialPosts from "../../data/posts.js"
import Form from "../../components/Form/Form.jsx"
import Card from "../../components/Card/Card.jsx"
import Tags from "../../components/Tags/Tags.jsx"


const initialFormData = {
    title: "",
    image: undefined,
    content: "",
    tags: "",
    category: "",
    published: false
}
/*
immagine prova copia e incolla: 
https://static.vecteezy.com/system/resources/thumbnails/030/362/244/small/a-small-animal-is-sitting-on-a-branch-ai-generated-free-photo.jpg
*/

function Main() {

    //Creo lo stato dei post partendo dai dati iniziali (posts.js)
    const [posts, setPosts] = useState(initialPosts)


    //TAGS
    //Tags senza ripetizioni
    const filteredTags = []
    initialPosts.forEach(post => {
        const postTags = post.tags

        postTags.forEach(tag => {
            if (!filteredTags.includes(tag)) {
                filteredTags.push(tag)
            }
        })
    })


    //FORM
    //Creo lo stato del form partendo dai dati iniziali
    const [formData, setFormData] = useState(initialFormData)

    //onChange
    function handleFormData(event) {
        const key = event.target.name
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value //gestione checkbox e value negli inputs

        const newFormData = {
            ...formData,
            [key]: value
        }
        setFormData(newFormData)
    }

    //onSubmit
    function submit(event) {
        event.preventDefault()

        //gestione errore stringa vuota
        if (formData.title.trim() === '') return alert("Inserisci un titolo")
        if (formData.tags.trim() === '') return alert("Inserisci i tags")
        if (formData.content.trim() === '') return alert("Inserisci una descrizione")

        const newPost = {
            id: Date.now(),
            ...formData,
            tags: formData.tags.split(",").map(tag => tag.trim())
        }
        setPosts([...posts, newPost])
        setFormData(initialFormData) //resetto i campi del form
    }


    //CARD
    //deleteItem
    function deletePost(id) {
        setPosts(posts.filter(post => post.id !== id))
    }

    return (
        <main>
            <section className={style.tags}>
                <div className="container">
                    <Tags tags={filteredTags} />
                </div>
            </section>
            <section className={style.form}>
                <div className="container">
                    <Form formData={formData} handleFormData={handleFormData} submit={submit} />
                </div>
            </section>
            <section className={style.cards}>
                <div className="container">
                    <div className="row">
                        {posts.filter(post => post.published === true).map(post => (
                            <div key={post.id} className="col-4">
                                <Card item={post} deleteItem={deletePost} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main