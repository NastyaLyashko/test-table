import './Table.scss';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';


function Table({ data }) {

    return (
        <section className='table'>
            <div className='table__head'>
                <p className='table__head-item'>Номер / Дата</p>
                <p className='table__head-item'>Тип задания / Автор</p>
                <p className='table__head-item'>Аккаунт / Терминал</p>
                <p className='table__head-item'>Статус</p>
            </div>
            <div className='table__body'>
                {data.map((item) => (
                        <Link to={`/id${item.id}`} key={item.id} className="table__link">
                            <Item key={item.id} item={item} />
                        </Link>
                ))}
            </div>
        </section>
    );
}

export default Table;