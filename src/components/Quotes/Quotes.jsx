import React, { useState, useEffect } from 'react';
import style from './Quotes.module.css';
import { fetchQuote } from '../../Context/GlobalState';

const Quotes = () => {

    const [quotes, setQuote] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setQuote(await fetchQuote());
            console.log(quotes);
        }
        fetchAPI();
    }, []);

    const ref1 = React.createRef();
    const item_ref = React.createRef();
    const click_next = React.createRef();

    const ScrollNext = () => {
        let scroller = ref1.current;
        let itemWidth = item_ref.current.clientWidth;

        scroller.scrollLeft < (scroller.scrollWidth - itemWidth) ? scroller.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' }) : scroller.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

    }


    const ScrollPrev = () => {
        let scroller = ref1.current;
        let itemWidth = item_ref.current.clientWidth;

        scroller.scrollLeft !== 0 ? scroller.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' }) : scroller.scrollTo({ left: scroller.scrollWidth, top: 0, behavior: 'smooth' });
    }

    if (!quotes.length) {
        return <div>No quotes found</div>
    }
    return (
        <div className={style.container}>
            <h1 className={style.heading}>Quotes of The week:</h1>
            <div ref={ref1} className={style.scroller}>
                {quotes.map((Quote) => (
                    <div ref={item_ref} className={style.item}>
                        <div className={style.card}>
                            <p>"{Quote.quote}"</p>
                            <span>-{Quote.By}</span>
                        </div>
                    </div>
                ))}
            </div>
            <span className={style.btn} id={style.prev} onClick={() => ScrollPrev()}>&lt;</span>
            <span className={style.btn} id={style.next} onClick={() => ScrollNext()}>&gt;</span>
        </div>
    )
}

export default Quotes
