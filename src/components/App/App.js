import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main'
import data from '../../data/test_data.json';

function App() {
  const [items] = useState(data)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState (25);
  const [activePrevButton, setActivePrevButton] = useState(false);
  const [activeNextButton, setActiveNextButton] = useState(true);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const currentItem = items.slice(firstItemIndex, lastItemIndex)

  const setFirstPage = () => {
    setActivePrevButton(false);
    setActiveNextButton(true);
    setCurrentPage(1);
  };
  const lastPage = items.length / itemsPerPage;
  const setlastPage  = () => {
    setActiveNextButton(false);
    setActivePrevButton(true);
    setCurrentPage(lastPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => {
        const penultimatePage = lastPage - 1

        if(prev < penultimatePage) {
          return prev +1
        }
        if(prev === penultimatePage) {
          setlastPage();
        }
        if(prev === lastPage) {
          setlastPage();
        }
      })
      setActivePrevButton(true)
  }

  const prevPage = () => {
    setCurrentPage((prev) => {
        if(prev > 2) {
          setActiveNextButton(true)
          return prev - 1
        } 
        if(prev <= 2) {
          setActivePrevButton(false)
          return 1
        }
      })
  }

  const firstItemPerPage = ((currentPage - 1) * itemsPerPage) + 1;
  const lastItemPerPage = currentPage * itemsPerPage;

  const [changed, setChanged] = useState(false)
  const [selected, setSelected] = useState(25);

  function selectedHandleChange(event) {
      const newValue = event.target.value;
      setSelected(newValue);
      setItemsPerPage(newValue);
      setChanged(true);
  }

  useEffect(() => {
    if(changed) {
      setCurrentPage(1)
    }
  }, [changed])


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main data={currentItem}
                currentPage={currentPage}
                firstPage={setFirstPage}
                prevPage={prevPage}
                nextPage={nextPage}
                lastPage={setlastPage}
                selected={selected}
                firstItemPerPage={firstItemPerPage}
                lastItemPerPage={lastItemPerPage}
                handleChange={selectedHandleChange}
                activePrevButton={activePrevButton}
                activeNextButton={activeNextButton} />
        </Route>
        <Route path='/id:id'/>
      </Switch>
    </div>
  );
}

export default App;
