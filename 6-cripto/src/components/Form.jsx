import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin.jsx';
import useCripto from '../hooks/useCripto.jsx';
import Error from './Error.jsx';
import axios from 'axios';

const ButtonComponent = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe; 
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }

`;

const Form = ({ setCoin, setCripto}) => {

    const [criptList, setCriptoList] = useState([]);

    const COINS = [
        { code: 'MXN', name:"Mexican peso"},
        { code: 'USD', name:"US dollar"},
        { code: 'EUR', name:"Euro"},
        { code: 'GBP', name:"Pound sterling"}
    ];

    const [coin, SelectCoin ] = useCoin('Choice your coin','', COINS);
    const [cripto, SelectCripto ] = useCripto('Choice your cripto','', criptList);
    const [error, setError] = useState(false);

    useEffect( () => {
        const ConsultAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const result = await axios.get(url)
            setCriptoList(result.data.Data)
        }
        ConsultAPI();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        if (!coin || !cripto){
            setError(true);
            return;
        }
        setError(false);
        setCoin(coin)
        setCripto(cripto)
    };

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            { error &&
                <Error 
                    message="All fields are required"
                />
                
            }
            <SelectCoin />
            <SelectCripto />
            <ButtonComponent 
                type="submit"
                value="Calculate"
            />
        </form>
     );
}
 
export default Form;