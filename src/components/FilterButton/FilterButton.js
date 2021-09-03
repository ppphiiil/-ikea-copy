import React, {useRef} from 'react';
import './_FilterButton.scss';

export default function FilterButton({title, btnLink, iconUrl}) {
  const ref = useRef ();
  console.log (`backgroundImage: url( ${iconUrl} )`);
  return (
    <div className="filter-button-all filter">

      <button onClick={btnLink} className="filter-button">
        <span ref={ref}>{title}</span>
      </button>
    </div>
  );
}
