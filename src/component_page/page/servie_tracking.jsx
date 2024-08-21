import '../../style/service_tracking.css';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";
import request from "../../util/axios";

function Items({ currentItems }) {
    const info_customer = {
        customer_name: 'Ethan Harris',
        service: 'Bodyguard rental',
        requirement: 'Protection'
    };
    return (
        <div className="listitem">
            <h1 style={{ textAlign: 'center' }}>SERVICE TRACKING</h1>
            <p>Customer Name:&nbsp;{info_customer.customer_name}</p>
            <p>Service:&nbsp;{info_customer.service}</p>
            <p>Requirement:&nbsp;{info_customer.requirement}</p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Avatar</th>
                        <th scope="col">Bodyguard</th>
                        <th scope="col">Level</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems && currentItems.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <i className="fas fa-user-circle"></i> {item.bodyguard_name}<br />
                                {item.phone}
                            </td>
                            <td>{item.bodyguard_name}</td>
                            <td>{item.level}</td>
                            <td>{item.start_date}</td>
                            <td>{item.end_date}</td>
                            <td>
                                {item.status === "on going" ?
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <i className="fas fa-circle" style={{ color: '#63E6BE' }}></i>
                                        <span style={{ marginLeft: '5px' }}>{item.status}</span>
                                    </div>
                                    :
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <i className="fas fa-circle" style={{ color: '#e60a0a' }}></i>
                                        <span style={{ marginLeft: '5px' }}>{item.status}</span>
                                    </div>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchTrackingData = async () => {
            try {
                await request({
                    method: 'get',
                    serverType: 'node',
                    apiEndpoint: 'services-tracking',
                    onSuccess: (data) => {
                        const startIndex = currentPage * itemsPerPage;
                        const endIndex = startIndex + itemsPerPage;
                        setCurrentItems(data.slice(startIndex, endIndex));
                        setPageCount(Math.ceil(data.length / itemsPerPage));
                    },
                    onError: (error) => {
                        console.error(error);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        };
        fetchTrackingData();
    }, [currentPage, itemsPerPage]);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

const Service_Tracking = () => {
    return (
        <>
            <div className="sv-tracking-container">
                <PaginatedItems itemsPerPage={4} />
            </div>
        </>
    );
};

export default Service_Tracking;