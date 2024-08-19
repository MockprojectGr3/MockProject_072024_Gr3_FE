import '../../style/equipment.css';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";

const listitem = {
    page: 1,
    total: 12,
    total_pages: 30,
    data: [
        {
            id: 1,
            date: "11/11/2022",
            name: "Uniform",
            description: "George R.R",
            progress: 50,
            severity: "broken",
            image: "abc.jpg"
        },
        {
            id: 2,
            date: "22/11/2022",
            name: "Plistol",
            description: "Markus Sazak",
            progress: 75,
            severity: "broken",
            image: "abc.jpg"
        },
        {
            id: 3,
            date: "22/05/2022",
            name: "Baton",
            description: "Ankur Warikoo",
            progress: 100,
            severity: "intact",
            image: "abc.jpg"
        },
        {
            id: 4,
            date: "14/07/2020",
            name: "Stun baton",
            description: "Jodi Picoult",
            progress: 100,
            severity: "intact",
            image: "abc.jpg"
        },
        {
            id: 5,
            date: "12/04/2021",
            name: "Pepper spray",
            description: "James Clear",
            progress: 100,
            severity: "intact",
            image: "abc.jpg"
        },
        {
            id: 6,
            date: "03/02/2022",
            name: "Flashlight",
            description: "Frank Herbert",
            progress: 100,
            severity: "intact",
            image: "abc.jpg"
        },
        {
            id: 7,
            date: "11/11/2022",
            name: "Mini Gun",
            description: "George R.R",
            progress: 50,
            severity: "broken",
            image: "abc.jpg"
        },
        {
            id: 8,
            date: "22/10/2022",
            name: "Walkie talkie",
            description: "Markus Suzak",
            progress: 75,
            severity: "broken",
            image: "abc.jpg"
        },
        {
            id: 9,
            date: "22/05/2022",
            name: "first aid kit",
            description: "Ankur Warikoo",
            progress: 100,
            severity: "intact",
            image: "abc.jpg"
        },
        {
            id: 10,
            date: "14/07/2020",
            name: "Plistol",
            description: "Jodi Picoult",
            progress: 100,
            severity: "intact",
            image: "abc.jpg"
        },
        {
            id: 11,
            date: "12/04/2021",
            name: "Uniform uniform",
            description: "James Clear",
            progress: 100,
            severity: "intact",
            image: "abc.jpg"
        },
        {
            id: 12,
            date: "02/03/2022",
            name: "Mini Gun",
            description: "Frank Herbert",
            progress: 100,
            severity: "intact",
            image: "abc.jpg"
        },
        {
            id: 13,
            date: "14/07/2020",
            name: "Plistol",
            description: "Jodi Picoult",
            progress: 100,
            severity: "intact",
            image: "abc.jpg"
        },
        {
            id: 14,
            date: "12/04/2021",
            name: "Uniform uniform",
            description: "James Clear",
            progress: 100,
            severity: "intact",
            image: "abc.jpg"
        },
        {
            id: 15,
            date: "02/03/2022",
            name: "Mini Gun",
            description: "Frank Herbert",
            progress: 100,
            severity: "intact",
            image: "abc.jpg"
        },
    ]
}
function Items({ currentItems }) {
    return (
        <div className="listitem">
            <i class="fas fa-sort-amount-up-alt"></i>&nbsp;&nbsp; <i class="fas fa-sort-amount-down"></i>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Progress</th>
                        <th scope="col">Severity</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems && currentItems.map((item, index) => (
                        <tr
                            key={index}
                        >
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.progress}</td>
                            <td>
                                <span className={`btn ${item.severity === 'intact' ? 'btn-success' : 'btn-danger'}`} style={{ width: '100%' }}>
                                    {item.severity}
                                </span>

                            </td>
                            <td>{item.image}</td>
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

const Equipment_Page = () => {
    return (
        <>
            <div className="equip-container">
                {/* Panigate */}
                <PaginatedItems itemsPerPage={4} />
            </div>
        </>
    )
}
export default Equipment_Page;