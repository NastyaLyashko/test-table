import React, { useState, useEffect } from 'react';
import './Item.scss'

function Item({item}) {
    const dateOptions = {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
    };
    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
    };

    const id = item.id;
    const date = new Date(item.created_date).toLocaleString("ru", dateOptions);
    const time = new Date(item.created_date).toLocaleString("ru", timeOptions);
    const orderType = item.order_type.name;
    const name = item.created_user.surname + ' ' + item.created_user.name[0] + '. ' + item.created_user.patronymic[0] + '.';
    const account = item.account.name;
    const terminal = item.terminal.name;
    const status = item.status;

    const [statusColor, setStatusColor] = useState('');
    const [statusText, setStatusText] = useState('')

    useEffect(() => {
        if(item) {
            const setStatus = () => {
                if (status === 'new') {
                    setStatusColor('item__status_red')
                    setStatusText ('Новое')
                }
                if (status === 'assigned_to') {
                    setStatusColor('item__status_yellow')
                    setStatusText('Назначено')
                }
                if (status === 'completed') {
                    setStatusColor('item__status_blue')
                    setStatusText ('Выполняется')
                }
                if (status === 'started') {
                    setStatusColor('item__status_green')
                    setStatusText('Начато')
                }
                if (status === 'declined') {
                    setStatusColor('item__status_black')
                    setStatusText('Отменено')
                }
            }
            setStatus()
        }
    })

    return (
        <div className='item__row'>
            <div className='item__column'>
                <p className='item__line'>№{id}</p>
                <p className='item__line'>{date} {time}</p>
            </div>
            <div className='item-column'>
                <p className='item__line'>{orderType}</p>
                <p className='item__line'>{name}</p>
            </div>
            <div className='item__column'>
                <p className='item__line item__line_ellipsis'>{account}</p>
                <p className='item__line'>{terminal}</p>
            </div>
            <div className='item__column'>
                <p className={`item__status ${statusColor}`}>{statusText}</p>
            </div>
        </div>
    )
}

export default Item;