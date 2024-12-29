import { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'antd';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";



const Basket = () => {
    const { basket, removeBasketItem, increaseBasketCount, decreaseBasketCount, clearBasket, calculateTotalPrice } = useContext(BasketContext)
    return (
        <>

            {basket.length === 0 ? <h2> basket boşdur</h2> : <TableContainer component={Paper}>
                <div>
                    <h2>Total Price: <span>{calculateTotalPrice()}</span></h2>
                    <Button onClick={() => { clearBasket() }}>Clear Basket</Button>
                </div>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Photo</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Increase</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Decrease</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                            <TableCell align="right">Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.map((p) => (
                            <TableRow
                                key={p.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th">
                                    <img src={p.image} alt={p.title} width={100} />
                                </TableCell>
                                <TableCell align="right">{p.title}</TableCell>
                                <TableCell align="right">{p.price}</TableCell>
                                <TableCell align="right"><Button onClick={() => { increaseBasketCount(p) }}><FaPlus /></Button></TableCell>
                                <TableCell align="right">{p.quantity}</TableCell>
                                <TableCell align="right"><Button onClick={() => { decreaseBasketCount(p) }}><FaMinus /></Button></TableCell>
                                <TableCell align="right">$ {p.quantity * p.price}</TableCell>
                                <TableCell align="right"><Button onClick={() => { removeBasketItem(p) }}><FaTrash /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}


            {/* {basket.length === 0 ? <h2>Basket boşdur!</h2> : <table>


                <tbody>
                    {basket.map((p) => {
                        return <tr key={p.id}>
                            <td>
                                <img src={p.image} alt={p.title} width={100} />
                            </td>
                            <td>
                                {p.title}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>} */}
        </>
    )
}

export default Basket