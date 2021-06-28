import React, { useRef } from 'react'
import './FilterButton.scss'

export default function FilterButton( { title, style, btnLink, iconUrl } ) {

    const ref = useRef();
    console.log( `backgroundImage: url( ${iconUrl} )` );
    return (
        //  backgroundImage: `url(${iconUrl})`
        <div className="filter-button-all filter" >

            <button

                onClick={ btnLink }
                className="filter-button"
            >
                <span ref={ ref }    >{ title }</span>
            </button>
        </div >
    )
}


// style = {
//                         
//                         () => {
//                         let span = ref.current.cssText;
//                         return {
//                             //! span{
//     
//                         }
//                     }
// 
// }