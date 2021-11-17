import './Pagination.scss';

function Pagination({ currentPage, firstPage, prevPage, nextPage, lastPage, selected, firstItemPerPage, lastItemPerPage, handleChange, activePrevButton, activeNextButton }) {

    const activePrevClassName = (`${activePrevButton ? 'pagination__button_active' : null}`); 
    const activeNextClassName = (`${activeNextButton ? 'pagination__button_active' : null}`);

    return (
        <section className='pagination'>  
            <span className='pagination__text'>записи {firstItemPerPage}-{lastItemPerPage}</span>
            <div className='pagination__buttons'>
                <button className={`pagination__button ${activePrevClassName}`} onClick={firstPage}>{'<<'} </button>
                <button className={`pagination__button ${activePrevClassName}`} onClick={prevPage}>{'<'} </button>
                <span className='pagination__page-number'>{currentPage}</span>
                <button className={`pagination__button pagination-button-next ${activeNextClassName}`} onClick={nextPage}>{'>'} </button>
                <button className={`pagination__button ${activeNextClassName}`} onClick={lastPage}>{'>>'} </button>
            </div>
            <span className='pagination__text'>по</span>
            <select className='pagination__selector' value={selected} onChange={handleChange}>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
            </select>
            <span className='pagination__text'>записей</span>
        </section>
    );
}

export default Pagination;