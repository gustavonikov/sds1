import React from 'react';

import './styles.css';

type Props = {
    // eslint-disable-next-line react/require-default-props
    totalPages?: number;
    goToPage: Function;
    activePage: number;
}

function Pagination({ totalPages = 0, goToPage, activePage }: Props) {
    const paginationItems = Array.from(Array(totalPages).keys());

    return (
        <div className="pagination-container">
            {paginationItems.map((item) => (
                <button
                    key={item}
                    type="button"
                    className={`pagination-item ${activePage === item ? 'active' : 'inactive'}`}
                    onClick={() => goToPage(item)}
                >
                    {item + 1}
                </button>
            ))}

        </div>
    );
}

export default Pagination;
