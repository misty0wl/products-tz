import React, {useState} from "react";
import {putProduct} from "../../redux/slices/productsSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {useNavigate} from "react-router";
import styles from './CreateProducts.module.scss'

type Category =
    {
        id: number;
        name: string;
    }


const categories: Category[] = [{id: 1, name: 'Клавиатуры'}, {id: 2, name: 'Наушники'}, {id: 3, name: 'Мышки'},
    {id: 4, name: 'Корпуса'}, {id: 5, name: 'Ноутбуки'}, {id: 6, name: 'Мониторы'}];

const CreateProduct = () => {

    const products = useSelector((state: RootState) => state.products.items)
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()

    const [formData, setFormData] = useState<{
        title: string;
        price: number;
        imageUrl: string;
        description: string;
        category: number,
    }>({
        title: '',
        price: 0,
        imageUrl: '',
        description: '',
        category: 1
    })

    const [errors, setErrors] = useState<{
        title: string;
        price: string;
        description: string;
    }>({ title: "", description: "", price: "" });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: name === "price" || name === "category" ? +value : value }));
    };

    const maxId = () => {
        if (products.length === 1) return '1'
        const validIds = products.map(p => +p.id).filter(id => !isNaN(id));
        const maxId = validIds.length > 0 ? Math.max(...validIds) : 0;
        console.log(maxId+1)
        return (maxId + 1).toString();
    }

    const validate = () => {
        let valid = true;
        const newErrors = {title: '', description: '', price: ''};

        if (formData.title.length < 1){
            newErrors.title = ('Поле названия не должно быть пустым')
            valid = false;
        }if (formData.price < 1){
            newErrors.price = 'Поле цены не должно быть пустым'
            valid = false;
        }if (formData.description.length < 1){
            newErrors.description = 'Поле описания не должно быть пустым'
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (validate()){
        dispatch(putProduct({
            id: maxId(),
            title: formData.title,
            description: formData.description,
            price: formData.price,
            imageUrl: formData.imageUrl,
            category: formData.category,
            rating: 10
        }))
        setFormData({
            title: '',
            price: 0,
            imageUrl: '',
            description: '',
            category: 1
        })
        navigate('/')}
    }

    return (
        <div className={styles.container}>
            <h2>Добавление продукта</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor='title'>Название</label>
                <input onChange={handleChange} value={formData.title} name='title' id='title' type='text'
                       placeholder='Введите название продукта'/>
                {errors.title && <p className={styles.errors}>{errors.title}</p>}
                <label htmlFor='description'>Описание</label>
                <textarea onChange={handleChange} value={formData.description} id='description' name='description'
                          placeholder='Введите описание'/>
                {errors.description && <p className={styles.errors}>{errors.description}</p>}
                <label htmlFor='price'>Цена</label>
                <input onChange={handleChange} id='price' type='number' min='0' name='price'
                       placeholder='Введите цену'/>
                {errors.price && <p className={styles.errors}>{errors.price}</p>}
                <label htmlFor='category'>Категория</label>
                <select onChange={handleChange} value={formData.category} id='category' name='category'>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <label htmlFor='image'>Ссылка на изображение(опционально)</label>
                <input onChange={handleChange} value={formData.imageUrl} id='image' type='text' name='imageUrl'
                       placeholder='Введите URL изображения'/>
                <div className={styles.actions}>
                    <button onClick={() => {
                        navigate('/')
                    }}>Назад
                    </button>
                    <button>Отправить</button>
                </div>
            </form>

        </div>
    )
}

export default CreateProduct