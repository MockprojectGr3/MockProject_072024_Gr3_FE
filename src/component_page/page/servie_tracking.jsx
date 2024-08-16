import '../../style/service_tracking.css';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";

const listitem = {
    page: 1,
    total: 12,
    total_pages: 30,
    info_customer: {
        customer_name: 'Customer1',
        service: 'Bodyguard rental',
        requirement: 'Protection'
    },
    data: [
        {
            id: 1,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "on going"
        },
        {
            id: 2,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "completed"
        },
        {
            id: 3,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "completed"
        },
        {
            id: 4,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "on going"
        },
        {
            id: 5,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "completed"
        },
        {
            id: 6,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "on going"
        },
        {
            id: 7,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "completed"
        },
        {
            id: 8,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "completed"
        },
        {
            id: 9,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "completed"
        },
        {
            id: 10,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "on going"
        },
        {
            id: 11,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "completed"
        },
        {
            id: 12,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "completed"
        },
        {
            id: 13,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "on going"
        },
        {
            id: 14,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "on going"
        },
        {
            id: 15,
            bodyguard_name: "Name 1",
            sdt: "0123456789",
            level: "High level",
            start_date: "11/08/2024",
            end_date: "20/11/2024",
            status: "completed"
        },
    ]
}
function Items({ currentItems }) {
    const { info_customer } = listitem;
    return (
        <div className="listitem">
            <h1 style={{ textAlign: 'center' }}>SERVICE TRACKING</h1>
            <p>Customer Name:&nbsp;{info_customer.customer_name}</p>
            <p>Service:&nbsp;{info_customer.service}</p>
            <p>Requirement:&nbsp;{info_customer.requirement}</p>
            <table class="table table-bordered">
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
                        <tr
                            key={index}
                        >
                            <td>
                                <i class="fas fa-user-circle"></i> {item.bodyguard_name}<br />
                                {item.sdt}
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
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentItems(listitem.data.slice(startIndex, endIndex));
        setPageCount(Math.ceil(listitem.data.length / itemsPerPage));
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
                {/* Panigate */}
                <PaginatedItems itemsPerPage={4} />
            </div>
        </>
    )
}
export default Service_Tracking;