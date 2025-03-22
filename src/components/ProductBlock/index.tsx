import React from "react";
import styles from './ProductBlock.module.scss'

const ProductBlock: React.FC = () => {
    return (
        <div className={styles.card}>
            <img className={styles.image}
                 src='https://c.dns-shop.ru/thumb/st1/fit/500/500/c39f071fb96267cdd4d7ffc3adb073d4/eb1420229e247b134b87beffcf77d21bc981b5abbf8b9012ecbbc778f675e083.jpg.webp'
                 alt='Клавиатура'/>
            <span>Клавиатура</span>
            <p>Описание</p>
            <img src='../../../public/icons/heart-icon.svg' alt='Иконка лайка'/>
            <span>Price</span>
            <img src='../../../public/icons/recycle_bin.svg' alt='Иконка корзины'/>
        </div>
    )
}

export default ProductBlock