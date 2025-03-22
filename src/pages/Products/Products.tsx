// src/pages/Products.tsx
import React from "react";
import Categories from "../../components/Categories";
import ProductBlock from "../../components/ProductBlock";
import styles from './Products.module.scss';

const data = [
    {
        "id": "0",
        "imageUrl": "https://c.dns-shop.ru/thumb/st1/fit/500/500/c39f071fb96267cdd4d7ffc3adb073d4/eb1420229e247b134b87beffcf77d21bc981b5abbf8b9012ecbbc778f675e083.jpg.webp",
        "title": "Клавиатура проводная Дарк Проджект KD87A",
        "description": "Клавиатура проводная Дарк Проджект KD87A [DP-KD87A-000100-GMS] оборудована кейкапами из пластика усиленной жесткости, не подверженного истиранию символов. Жизненный цикл модели рассчитан на 50 млн кликов. Синхронизировать аксессуар можно с помощью 1.8-метрового кабеля.",
        "price": 8499,
        "category": 1,
        "rating": 4
    },
    {
        "id": "2",
        "imageUrl": "https://c.dns-shop.ru/thumb/st1/fit/500/500/d4bfd939c34805cc874f6da34d6a4070/73dd06c0a2d4c9ff74cfaafaedec60012cae0a437e72ed35351e0fa8fa203289.jpg.webp",
        "title": "Беспроводные наушники Logitech G435 черный",
        "description": "Оснащенная мягкими амбушюрами и регулируемым оголовьем радиочастотная гарнитура Logitech G435 LIGHTSPEED исключительно комфортна. Эксплуатация устройства в течение многих часов подряд не доставит пользователю неудобств. Это актуально: гарнитура ориентирована на использование в играх. Модель совместима с консолями Nintendo Switch, PS4 и PS5. Одной из особенностей гарнитуры является поддержка технологии объемного звука Dolby Atmos.",
        "price": 7999,
        "category": 2,
        "rating": 3
    }
]


const Products: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Categories />
            <div className={styles.productContainer}>
                {data.map((chunk, index) =>{
                    return <ProductBlock key={index} {...chunk} />
                })}
            </div>
        </div>
    );
};

export default Products;