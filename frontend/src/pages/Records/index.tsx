import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './styles.css';

import BASE_URL from '../../config';
import { RecordsResponse } from './types';
import formatMoment from '../../utils/formatMoment';
import Pagination from './Pagination';
import Filters from '../../components/Filters';

function Records() {
    const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
    const [activePage, setActivePage] = useState(0);

    function handlePageChange(index: number) {
        setActivePage(index);
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
            .then((res) => setRecordsResponse(res.data))
            .catch((e) => {
                console.log(e);
                return <h1>Error 404: Bad Request</h1>;
            });
    }, [activePage]);

    return (
        <div className="page-container">
            <Filters link="/charts" linkText="VER GRÁFICOS" />
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TÍTULO DO GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {recordsResponse?.content.map((record) => (
                        <tr key={record.id}>
                            <td>{formatMoment(record.moment)}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td className="text-secondary">{record.gamePlatform}</td>
                            <td>{record.genreName}</td>
                            <td className="text-primary">{record.gameTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                activePage={activePage}
                goToPage={handlePageChange}
                totalPages={recordsResponse?.totalPages}
            />
        </div>
    );
}

export default Records;
