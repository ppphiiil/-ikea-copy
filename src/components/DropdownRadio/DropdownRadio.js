import React, { useState, useContext, useRef, useEffect } from 'react';
import './DropdownRadio.scss';
import { MyContext } from "../../App";

export default function DropdownRadio( { items, name, title, style } ) {
    //const [sort, setSort] = useState( '' );

    let { sort, setSort } = useContext( MyContext );

    const ref = useRef();

    /**
     * 
     * @param {e} eventHandler
     * for open and close the dropdown
     */
    const toggleDropdown = e => {
        const dropdown = document.querySelector( `.filter-dropdown__wrapper-${name}` );
        //change classes for visible and hide dropdown
        if ( dropdown.classList.contains( 'dropdown-visible' ) ) {
            dropdown.classList.remove( 'dropdown-visible' );
        } else {
            dropdown.classList.add( 'dropdown-visible' );
        }
    };

    /**
     * 
     * @param {e} EventHandler on change
     * if you change the selection of the dropdown, it will be saved in a variable "sort" and show the custom design
     */
    const onChangeSortFilter = e => {
        console.log( 'Selected:', e.target.value );
        setSort( e.target.value );

        const all = document.querySelectorAll( '.radio-button__input' );

        all.forEach( radioItem => {
            if ( radioItem.value === e.target.value ) {
                radioItem.classList.add( 'checked' );
            } else {
                radioItem.classList.remove( 'checked' );
            }
        } );
    };

    /**
     *  if you click on background it will close the dropdown
     */
    useEffect( () => {
        document.body.addEventListener( 'click', e => {
            // if the e.target is still the same like before than nothing change. but if it is not the same, than it will be closed.
            if ( ref.current.contains( e.target ) ) {
                return;//do not close if the e.target has not changed
            } else {//close it, because u clicked on other element
                const dropdown = document.querySelector(
                    `.filter-dropdown__wrapper-${name}`
                );
                dropdown.classList.remove( 'dropdown-visible' );
            }
        } );
    }, [] );

    // use ref if you want to close the dropdown by clicking on the background
    //!console.log( ref.current );

    return (
        <div style={ style } ref={ ref } className="filter">
            {/* DROPDOWN BUTTON */ }
            <button
                id="dropdown-sort"
                onClick={ toggleDropdown }
                className="filter-button"
            >
                <span className="filter-button__text">{ title }</span>
            </button>

            <div className={ `filter-dropdown filter-dropdown__wrapper-${name}` }>
                <div className="single-select-filter">
                    {/* ITEMS */ }
                    { items.map( ( item, key ) => {
                        return (
                            <label htmlFor="" key={ key } className="single-select-filter__item">
                                <span className="radio-button__text">{ item.label }</span>
                                <input
                                    className="radio-button__input"
                                    type="radio"
                                    value={ item.name }
                                    name={ item.name }
                                    id=""
                                    checked={ sort === item.name }
                                    onChange={ onChangeSortFilter }
                                />
                            </label>
                        );
                    } ) }

                </div>
            </div>

        </div>
    );
}
