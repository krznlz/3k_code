import React, { useState } from 'react';

export default function OrderForm () {
    function handleSubmit (event) {
        event.reventDefault()
    }

    const initialForm = {
        color: '',
        size: '',
        quantity: '',
        printing: '',
        printtext: '',
        delivery: '',
        address: '',
        customerName: '',
        customerEmail: '',
        customerPhone: '',
    }

    const [form, setForm] = useState(initialForm);

    function handleChange(event) {
        const {name,value,type,checked} = event.target

        const nextForm = {
            ...form,
            [name]: type === checkbox ? checkbox : value
        }

        setForm(nextForm)

    }

    return (
        <form onSubmit={handleSubmit} action="" method="post" class="form">
            <div class="fields">
                <section class="panel">
                    <h2>1. Собери футболку</h2>
                    <div class="field">
                        <label for="color">Цвет</label>
                        <select value={form.color} onChange={handleChange} name="color" id="color" required>
                            <option value="">Не выбран</option>
                            <option value="Молочный">Молочный</option>
                            <option value="Лавандовый">Лавандовый</option>
                            <option value="Графитовый">Графитовый</option>
                        </select>
                    </div>
                     <div class="field">
                        <label for="size">Размер</label>
                        <select value={form.size} onChange={handleChange} name="size" id="size" required>
                            <option value="">Не выбран</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div class="field">
                        <label for="quantity">Количество: от 1 до 10</label>
                        <input type="number" id="quantity" value={form.quantity} onChange={handleChange} name="quantity" min="1" max="10" required/>
                    </div>
                    <div class="field">
                        <label for="printing">
                            <input id="printing" type="checkbox" checked={form.printing} onChange={handleChange} name="printing"/>
                            Добавить надпись + 300 руб
                        </label>
                    </div>
                    {form.printing && (
                        <div class="field">
                        <label for="lettering">Надпись: до 20 символов</label>
                        <input type="text" id="printtext" name="printtext" value={form.printtext} onChange={handleChange} maxlength="20"/>
                    </div>
                    )}
                </section>
                <section class="panel">
                    <h2>2. Получение заказа</h2>
                </section>
                <section class="panel">
                    <h2>3. Контакты</h2>
                </section>
            </div>
            <div class="sidebar">
                <button type="submit">Оформить заказ</button>
            </div>
        </form>
    )
}