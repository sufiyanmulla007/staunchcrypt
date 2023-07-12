import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../Admin/Dish.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "react-bootstrap/Pagination";
const Dishbord = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
 
  const getdata = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    // console.log(response.data.products);
    setData(response.data.products);
  };
  //  handle next
  const handleNext =()=>{
    if (page === pageCount) return page;
    setPage(page + 1)
  }
  //handle previous
  const handlePrevios=()=>{
    if (page === 1) return page;
    setPage(page - 1)
  }
  useEffect(() => {
    getdata();
  }, [page]);
  useEffect(()=>{
    const pagedatacount = Math.ceil(data.length / 5);
    setPageCount(pagedatacount);
    
    if (page) {
      const LIMIT = 5;
      const skip = LIMIT * page // 5 *2 = 10
      const dataskip = data.slice(page === 1 ? 0 : skip - LIMIT, skip);
      setPageData(dataskip)
  }
  },[data]);
  
  return (
    <>
      <div className="containers">
        <h1>user Data</h1>
        <div className="table_div mt-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>title</th>
                <th>price</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              {pageData.length > 0 ? (
                pageData.map((ele, index) => {
                  return (
                    <>
                      <tr>
                        <td>{ele.id}</td>
                        <td>{ele.title}</td>
                        <td>{ele.price}</td>
                        <td>
                          <img
                            src={ele.thumbnail}
                            style={{ width: 60, height: 60 }}
                            alt="pic"
                          />
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <div className="d-flex justify-content-center mt-4">
                  Loading... <Spinner animation="border" variant="danger" />
                </div>
              )}
            </tbody>
          </Table>
        </div>
        <div className="d-flex justify-content-end">
          <Pagination>
            <Pagination.Prev onClick={handlePrevios} disabled={page === 1} />
            {
               Array(pageCount).fill(null).map((ele, index) => {
                return (
                  <>
                      <Pagination.Item active={page === index + 1 ? true : false} onClick={() => setPage(index + 1)}>{index + 1}</Pagination.Item>
                  </>
              )
          })
            }
            <Pagination.Item>{11}</Pagination.Item>

            <Pagination.Next onClick={handleNext} disabled={page === pageCount} />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default Dishbord;
