import axios from "axios";
import { useEffect, useState } from "react";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = "https://northwind.vercel.app/api";

  //   useEffect(() => {
  //     axios(`${BASE_URL}/customers`)
  //       .then((res) => {
  //         // console.log(res.data);
  //         setCustomers(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, []);

  //   async function getCustomers() {
  //     try {
  //       const response = await axios(`${BASE_URL}/customers`);
  //       // console.log(response.data);
  //       setCustomers(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   useEffect(() => {
  //     getCustomers();
  //   }, []);

  useEffect(() => {
    // IIFE
    (async () => {
      try {
        const response = await axios(`${BASE_URL}/customers`);
        // console.log(response.data);
        setCustomers(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <>
      {loading ? (
        <h1>LOADING..</h1>
      ) : (
        <ul>
          {customers.map((c) => (
            <li key={c.id}>{c.companyName}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Customers;
