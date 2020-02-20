import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';

import { addOrder } from '../../actions/action';
import Loader from '../../common/Loader';

import './form-order.css';

const FormOfChoice = ({ addOrder }) => {

    const [file, setFile] = useState(null);
    const loading = useSelector(state => state.orders.loading);

    const handleFileUpload = (e) => {
        if(file) {
            const { name } = file;
            e.preventDefault()
            addOrder({
                file,
                name: name,
            });
            setFile(null)
        }
    };

    const handleInpute = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    if (loading) {
        return <Loader />
    };

    return (
        <fieldset className='fieldset'>
            <legend > Прикрепите ваш заказ: </legend>
            <div className="input-group">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile04"
                        onChange={(e) => handleInpute(e)} />
                    <label className="custom-file-label" htmlFor="inputGroupFile04" >
                        {file && file.name.length ? file.name : 'Выберите файл'}
                    </label>
                </div>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button"
                        onClick={(e) => handleFileUpload(e)}>
                            Отправить
                    </button>
                </div>
            </div>
        </fieldset>
    )
};

export default connect(null, { addOrder })(FormOfChoice);