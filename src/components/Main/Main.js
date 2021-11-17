import './Main.scss';
import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination'


function Main({ data, currentPage, firstPage, prevPage, nextPage, lastPage, selected, firstItemPerPage, lastItemPerPage, handleChange, activePrevButton, activeNextButton }) {
    return (
        <main className='main'>
            <Table data={data} />
            <Pagination currentPage={currentPage} 
                        firstPage={firstPage}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        lastPage={lastPage}
                        selected={selected}
                        firstItemPerPage={firstItemPerPage}
                        lastItemPerPage={lastItemPerPage}
                        handleChange={handleChange}
                        activePrevButton={activePrevButton}
                        activeNextButton={activeNextButton} />
        </main>
    );
}

export default Main;