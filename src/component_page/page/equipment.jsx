
import '../../style/equipment.css';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";
import request from "../../util/axios";
import moment from 'moment';

// function Items({ currentItems }) {
//     return (
//         <div className="listitem">
//             <i className="fas fa-sort-amount-up-alt"></i>&nbsp;&nbsp; <i className="fas fa-sort-amount-down"></i>
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th scope="col">Date</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Description</th>
//                         <th scope="col"><i class="fas fa-sync-alt"></i>&nbsp;Progress</th>
//                         <th scope="col">Severity</th>
//                         <th scope="col">Image</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <i class="fas fa-circle-notch" style={{ color: '#63E6BE' }}></i>
//                     <i class="far fa-circle-notch" style={{ color: '#63E6BE' }}></i>
//                     <i class="fas fa-spinner" style={{ color: '#63E6BE' }}></i>


//                     {currentItems && currentItems.map((item, index) => (
//                         <tr key={index}>
//                             <td>{item.broken_date}</td>
//                             <td>{item.name}</td>
//                             <td>{item.description}</td>
//                             <td><SmileOutlined rotate={180} />&nbsp;{item.progress}</td>
//                             <td>
//                                 <span className={`btn ${item.severity === 'Intact' ? 'btn-success' : 'btn-danger'}`} style={{ width: '100%' }}>
//                                     {item.severity}
//                                 </span>
//                             </td>
//                             <td>{item.image_id}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }


function Items({ currentItems }) {
   
    return (


        <div className="listitem">
            <i className="fas fa-sort-amount-up-alt"></i>&nbsp;&nbsp;
            <i className="fas fa-sort-amount-down"></i>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col"><i className="fas fa-sync-alt"></i>&nbsp;Progress</th>
                        <th scope="col">Severity</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>

                    {currentItems && currentItems.map((item, index) => {
                        let progressIcon;
                        let progressText;

                        if (item.progress === "Completed") {
                            progressIcon = <i className="far fa-circle" style={{ color: '#63E6BE' }}></i>;
                            progressText = "100%";
                        } else if (item.progress === "Almost Complete") {
                            progressIcon = <i className="fas fa-circle-notch" style={{ color: '#63E6BE' }}></i>;
                            progressText = "75%";
                        } else {
                            progressIcon = <i className="fas fa-spinner" style={{ color: '#63E6BE' }}></i>;
                            progressText = "50%";
                        }
                        return (
                            <tr key={index}>
                                <td>{item.broken_date}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{progressIcon}&nbsp;{progressText}</td>
                                <td>
                                    <span className={`btn ${item.severity === 'Intact' ? 'btn-success' : 'btn-danger'}`} style={{ width: '100%' }}>
                                        {item.severity}
                                    </span>
                                </td>
                                <td>{item.image_id}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}


function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [listEquipment, setListEquipment] = useState([]);

    const fetchEquipment = async () => {
        await request({
            method: 'get',
            serverType: 'php',
            apiEndpoint: 'api/users/equipments',
            onSuccess: (data) => {
                if (data.status === 200) {
                    setListEquipment(data.data);
                    setPageCount(Math.ceil(data.data.length / itemsPerPage)); // Update page count based on data length
                } else {
                    console.log('No data');
                }
            }
        });
    };

    useEffect(() => {
        fetchEquipment();
    }, []);

    useEffect(() => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentItems(listEquipment.slice(startIndex, endIndex));
    }, [currentPage, listEquipment, itemsPerPage]);

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
                {/* Paginate */}
                <PaginatedItems itemsPerPage={4} />
            </div>
        </>
    )
}

export default Equipment_Page;
