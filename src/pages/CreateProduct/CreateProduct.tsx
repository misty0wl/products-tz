import React, {useState} from "react";
import {addProduct} from "../../redux/slices/productsSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {useNavigate} from "react-router";


type Category =
    {
        id: number;
        name: string;
    }


const categories: Category[] = [{id: 0, name: 'Клавиатуры'}, {id: 1, name: 'Наушники'}, {id: 2, name: 'Мышки'},
    {id: 3, name: 'Корпуса'}, {id: 4, name: 'Ноутбуки'}, {id: 5, name: 'Мониторы'}];

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
        category: 0
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
        if (products.length === 1) return '0'
        const validIds = products.map(p => +p.id).filter(id => !isNaN(id));
        const maxId = validIds.length > 0 ? Math.max(...validIds) : 0;
        console.log(maxId+1)
        return (maxId + 1).toString();

    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addProduct({
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
            category: 0
        })
        navigate('/')
    }

    return (
        <div>
            <h2>Добавление продукта</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor='title'>Название</label>
                <input onChange={handleChange} value={formData.title} id='title' type='text' placeholder='Введите название продукта'/>
                <label htmlFor='description'>Описание</label>
                <textarea onChange={handleChange} value={formData.description} id='description' name='description'
                          placeholder='Введите описание'/>
                <label htmlFor='price'>Цена</label>
                <input onChange={handleChange}  id='price' type='number' min='0' name='price' placeholder='Введите цену'/>
                <select onChange={handleChange} value={formData.category} id='category' name='category'>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <label  htmlFor='image'>Ссылка на изображение(опционально)</label>
                <input onChange={handleChange} value={formData.imageUrl} id='image' type='text' name='imageUrl'
                       placeholder='Введите URL изображения'/>
                <button> Отправить</button>
            </form>
        </div>
    )
}

export default CreateProduct