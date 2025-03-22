// src/components/Categories.tsx
import React, {useState} from "react";
import styles from './Categories.module.scss';

const categoriesNames: string[] = ['Клавиатуры', 'Наушники', 'Мышки', 'Корпуса', 'Ноутбуки', 'Мониторы'];

const Categories: React.FC = () => {

    const [categoryId, setCategoryId] = useState<number>();

    return (
        <div className={styles.categories}>
            <ul>
                {categoriesNames.map((category: string, index: number) => (
                    <li key={index} onClick={() => setCategoryId(index)}
                        className={categoryId === index ? styles.active : ""}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;