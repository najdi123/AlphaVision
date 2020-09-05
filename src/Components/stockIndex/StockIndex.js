import React from 'react';
import './stockIndex.css'
import arrow from '../../images/growth.svg'

const StockIndex = () => {
    return (
        <div className={'stock-index'}>
            <h2 className={'stock-index-title'}>شاخص بورس</h2>
            <div className={'stock-index-section-1'}>
                <p>+2239</p>
                <pre>  </pre>
                <img src={arrow}/>
            </div>
        </div>
    );
};

export default StockIndex;
