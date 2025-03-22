import React from "react";
import styles from './Categories.module.scss'

const categoriesNames: string[] = ['Клавиатуры','Наушники']

const Categories: React.FC = () =>{
    return(
        <div className={styles.categories}>
            <ul>
                {categoriesNames.map((category: string, index: number) => (
                    <li key={index}>
                        {category}
                    </li>))}
            </ul>
        </div>
    )
}

export default Categories;