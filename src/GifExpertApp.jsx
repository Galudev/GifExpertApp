import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>


            {/* input */}
            <AddCategory
                //setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />


            {/* Listado de Gif */}
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
            {/* Gif Item */}
        </>
    )
}

export default GifExpertApp;