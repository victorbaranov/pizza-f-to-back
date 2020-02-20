import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './table.css';
import nothing from './nothing.png'

import { getOrders } from '../../actions/action';
import TableOutputItem from './TableOutputItem';

const TableOutputList = () => {

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.orders)

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch])

    return (
        <table className='wrap-table'>
            <tbody>
                <tr className="title-tr">
                    <th className="text-left">
                        <span>ID</span>
                    </th>
                    <th>
                        <span>Кол-во сотрудников</span>
                    </th>
                    <th>
                        <span>Кол-во выбраных кусочков</span>
                    </th>
                    <th>
                        <span> Кол-во доступных пицц</span>
                    </th>
                    <th>
                        <span>Кол-во выбраных пицц </span>
                    </th>
                    <th>
                        <span>Дата и время загрузки</span>
                    </th>
                    <th>
                        <span>Дата и время ответа от сервера</span>
                    </th>
                </tr>
                {orders.length ?
                    orders.map((order) => (
                        <TableOutputItem order={order} key={`oreder+${order.id}`} />
                    )) : (
                        <tr>
                            <td colSpan={9} className="nothing-to-show" >
                                <img src={nothing} alt="" />
                                <p>Nothing to show</p>
                            </td>
                        </tr>
                    )}

            </tbody>
        </table>
    )
};

export default TableOutputList;