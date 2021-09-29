import React from 'react'

const Company = () => {
    return (
        <div>
            Company
        </div>
    )
}


export default Company;


//getRequest












//////////////////////////////////////////////////////////////


// import { useState, useEffect } from "react";
// import axios from "axios";
// import OpenModal from '../../components/modal/openModal';
// import "./style.css";
// import Loading from "../../../loading/loading";



// const Company = () => {

//     const [companys, setCompanys] = useState();
//     const [openModal, setOpenModal] = useState(false);
//     const [currentData, setCurrentData] = useState(null);

//     const [searchTerm, setSearchTerm] = useState("");
//     const [searchResults, setSearchResults] = useState([]);


//     const getCompany = async () => {

//         try {
//             const companyData = await axios.get(
//                 'http://212.34.230.218:5001/api/getcompanies'
//             );
//             setSearchResults(companyData.data)
//             console.log(companyData.data)
//             setCompanys(companyData.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     const handleChange = e => {
//         setSearchTerm(e.target.value);
//     };
//     /**
//      * Get company  list 
//      * **/
//     useEffect(() => {
//         getCompany();
//     }, []);


//     useEffect(() => {

//         if (searchTerm) {
//             const result = companys.filter(
//                 compItem => compItem.companyName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
//                     compItem.city.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
//                     compItem.address.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
//             )
//             setSearchResults(result)

//         } else {
//             setSearchResults(companys)
//         }


//     }, [searchTerm])



//     const handelClick = (item) => {
//         setCurrentData(item)
//         setOpenModal(true);
//     }

//     if (companys) {
//         return (
//             <>
//                 <section className="company-section">
//                     <div className="search-block">
//                         <div className="search-box">
//                             <input type="search" placeholder="Search..."
//                                 value={searchTerm}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>

//                     <div className="tabel-list">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <td>CompanyName</td>
//                                     <td>City</td>
//                                     <td>Address</td>
//                                     <td>TaxCode</td>
//                                     <td>Delete</td>
//                                     <td>Detalis</td>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {

//                                     searchResults.map((item) => {
//                                         return <tr key={item.companyID}>
//                                             <th>{item.companyName}</th>
//                                             <th>{item.city}</th>
//                                             <th>{item.activityAddress}</th>
//                                             <th>{item.taxCode}</th>
//                                             <th><button>Delete</button></th>
//                                             <th><button onClick={() => handelClick(item)}>Open</button></th>
//                                         </tr>

//                                     })}
//                             </tbody>
//                         </table>
//                     </div>
//                     <div>
//                         {openModal && <OpenModal closeModal={setOpenModal} data={currentData} />}
//                     </div>


//                 </section>
//             </>

//         )
//     }



//     return (
//         <Loading />
//     )
// }

// export default Company; 
