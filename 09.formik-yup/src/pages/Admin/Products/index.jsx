import { Col, Row, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import controller from "../../../services";
import { endpoints } from "../../../services/constants";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Photo",
    dataIndex: "thumbnail",
    render: (text, record) => {
      // console.log("text", text);
      // console.log("record", record);
      return <img src={text} alt={record.title} width={100} />;
    },
  },
  {
    title: "Title",
    dataIndex: "title",
    showSorterTooltip: {
      target: "full-header",
    },
    sorter: (a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
  },
  {
    title: "Brand",
    dataIndex: "brand",
    defaultSortOrder: "descend",
    sorter: (a, b) =>
      a.brand.toLowerCase().localeCompare(b.brand.toLowerCase()),
  },
  {
    title: "Descripton",
    dataIndex: "description",
    render: (text, record) => (
      <Tooltip title={text} color={"black"} key={"black"}>
        {text.slice(0, 50)}...
      </Tooltip>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
];
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park",
//   },
// ];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    controller.getAllData(endpoints.products).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div id="admin-products">
      <div className="container">
        <div className="admin-products">
          <Table
            columns={columns}
            dataSource={products}
            onChange={onChange}
            showSorterTooltip={{
              target: "sorter-icon",
            }}
            rowKey={"id"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
