import React, { useState, useEffect } from 'react';

const TableOutputItem = ({ order }) => {

    const [fullTimeCtreate, setFullTimeCtreate] = useState({
        hoursCr: '',
        minCr: '',
        secCr: '',
        milSecCr: '',
    });

    const [fullTimeResponse, setFullTimeResponse] = useState({
        hoursRs: '',
        mins: '',
        secs: '',
        milSecRs: '',
    });

    useEffect(() => {
        const getTime = (timestamp) => ({
            hours: new Date(timestamp).getHours(),
            min: new Date(timestamp).getMinutes(),
            sec: new Date(timestamp).getSeconds(),
            milSec: new Date(timestamp).getMilliseconds()
        })
        const { hours: hoursCr, min: minCr, sec: secCr, milSec: milSecCr } = getTime(order.created_at);
        const { hours: hoursRs, min: minRs, sec: secRs, milSec: milSecRs } = getTime(order.response_at);

        setFullTimeCtreate({
            hoursCr,
            minCr,
            secCr,
            milSecCr
        });

        setFullTimeResponse({
            hoursRs,
            minRs,
            secRs,
            milSecRs,
        });
    }, [order]);

    return (
        <tr className="">
            <td>
                <span>{order ? order.id : ''}</span>
            </td>
            <td>
                <span>{order ? order.members : ''}</span>
            </td>
            <td>
                <span>{order ? order.peace_count : ''}</span>
            </td>
            <td>
                <span>{order ? order.pizza_count : ''}</span>
            </td>
            <td>
                <span>{order ? order.taken_pizza_count : ''}</span>
            </td>
            <td>
                <span>{order && fullTimeCtreate ? 
                `${fullTimeCtreate.hoursCr}:${fullTimeCtreate.minCr}:${fullTimeCtreate.secCr}:${fullTimeCtreate.milSecCr}` : '-'}</span>
            </td>
            <td>
                <span>{order && fullTimeResponse ? 
                `${fullTimeResponse.hoursRs}:${fullTimeResponse.minRs}:${fullTimeResponse.secRs}:${fullTimeResponse.milSecRs}` : '-'}</span>
            </td>
        </tr>
    )
};

export default TableOutputItem;