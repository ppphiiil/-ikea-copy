import React, {useState, createContext} from 'react';
import './_Navigation.scss';
import logo from '../../images/logo.svg';
import closeIcon from '../../icons/close.png';
import DropdownRadio from '../DropdownRadio/DropdownRadio.js';
import FilterButton from '../FilterButton/FilterButton';

export const MyContext = createContext (null);

function Navigation () {
  const [sort, setSort] = useState ('');

  const itemsForFilterSort = [
    {
      label: 'Topseller',
      name: 'topseller',
    },
    {
      label: 'Price: Low to High',
      name: 'ascending',
    },
    {
      label: 'Price: High to Low',
      name: 'decending',
    },
    {
      label: 'Customer Review',
      name: 'rating',
    },
  ];

  const toggleSideMenu = e => {
    console.log (e.target);
    console.log ('in toggleSideMenu');
    const overlay = document.querySelector ('.overlay-menu');
    console.log (overlay);
    const sideMenu = document.querySelector ('.menu-box');

    overlay.classList.add ('overlay-visible');
    sideMenu.classList.add ('menu-box-visible');
  };

  const openAllFilters = () => {
    console.log ('in toggleFilterMenu');
    const overlay = document.querySelector ('.overlay-filter');
    console.log (overlay);
    const filterMenu = document.querySelector ('.filter-box');

    overlay.classList.add ('overlay-visible');
    filterMenu.classList.add ('filter-box-visible');
  };

  const closeSideMenu = () => {
    console.log ('in toggleFilterMenu');
    const overlay = document.querySelector ('.overlay-menu');
    console.log (overlay);
    const sideMenu = document.querySelector ('.menu-box');

    overlay.classList.remove ('overlay-visible');
    sideMenu.classList.remove ('menu-box-visible');
  };

  const closeFilterMenu = () => {
    console.log ('in toggleFilterMenu');
    const overlay = document.querySelector ('.overlay-filter');
    console.log (overlay);
    const filterMenu = document.querySelector ('.filter-box');

    overlay.classList.remove ('overlay-visible');
    filterMenu.classList.remove ('filter-box-visible');
  };

  const onChangeFilter = e => {
    console.log ('Selected:', e.target.value);
    setSort (e.target.value);

    const all = document.querySelectorAll ('.radio-button__input');

    all.forEach (radioItem => {
      if (radioItem.value === e.target.value) {
        radioItem.classList.add ('checked');
      } else {
        radioItem.classList.remove ('checked');
      }
    });
  };

  return (
    <MyContext.Provider value={{sort, setSort}}>
      <div className="App">

        <header className="header">
          <div className="page-container">
            <div className="page-container__inner">
              <div className="header__main">
                <div className="header__logo">
                  <a href=""><img src={logo} alt="logo" /></a>
                </div>

                <ul className="header__nav">
                  <li><a className="link">Products</a></li>
                  <li><a className="link">Rooms</a></li>
                  <li><a className="link">Deals</a></li>
                  <li><a className="link">Services</a></li>
                </ul>
                <div className="header__search">
                  <input type="search" name="" id="" />
                </div>
                <div className="header__icons">

                  <div className="icon-fa">
                    <a className="btn btn-small" href="">
                      <i className="fas fa-shopping-bag " />
                    </a>
                  </div>

                  <div className="icon-fa">
                    <a className="btn btn-small" href="">
                      <i className="fas fa-heart " />
                    </a>
                  </div>
                  <div className="icon-fa">
                    <a className="btn btn-small" href="">
                      <i className="fas fa-user " />
                    </a>
                  </div>
                  <div className="header__menu--right">

                    <div onClick={toggleSideMenu} className="icon-fa">
                      <button className="btn btn-small">
                        <i className="fas fa-bars " />
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </header>

        <aside className="menu-box">
          <div className="menu-top">
            <div className="menu__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className=" icon-container">
              <button onClick={closeSideMenu} className="btn btn-small">
                <img className="icon" src={closeIcon} alt="close" />
              </button>
            </div>

          </div>
          <div className="menu-container">

            <ul className="menu__nav">
              <li><a className="link">Products</a></li>
              <li><a className="link">Rooms</a></li>
              <li><a className="link">Deals</a></li>
              <li><a className="link">Services</a></li>

            </ul>

          </div>
        </aside>

        <aside className="filter-box">
          <div className="filter-top">
            <div className="filter__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className=" icon-container">
              <button onClick={closeFilterMenu} className="btn btn-small">
                <img className="icon" src={closeIcon} alt="close" />
              </button>
            </div>

          </div>
          <div className="filter-container">

            <ul className="filter__nav">

              <li className="single-select-filter filter">
                {itemsForFilterSort.map ((item, key) => {
                  return (
                    <label
                      htmlFor=""
                      key={key}
                      className="single-select-filter__item"
                    >
                      <span className="radio-button__text">{item.label}</span>
                      <input
                        className="radio-button__input"
                        type="radio"
                        value={item.name}
                        name={item.name}
                        id=""
                        checked={sort === item.name}
                        onChange={onChangeFilter}
                      />
                    </label>
                  );
                })}
              </li>

            </ul>

          </div>
        </aside>
        <div onClick={closeSideMenu} className="overlay-menu" />
        <div onClick={closeFilterMenu} className="overlay-filter" />
        <div className="filter__main">
          <DropdownRadio
            style={{paddingRight: '10px'}}
            name="filter-sort"
            title="Sort by"
            items={itemsForFilterSort}
          />
          <FilterButton
            style={{paddingRight: '10px'}}
            name="filter-all"
            title="All Filters"
            iconUrl="../../icons/equalizer.png"
            btnLink={openAllFilters}
          />

          <footer>
            <div>
              Icons made by
              {' '}
              <a href="https://www.flaticon.com/authors/chanut" title="Chanut">
                Chanut
              </a>
              {' '}
              from
              {' '}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </footer>

        </div>
      </div>
    </MyContext.Provider>
  );
}

export default Navigation;
