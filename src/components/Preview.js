import React, { useRef } from 'react';
import prev1 from '../imgs/prev1.png';
import prev2 from '../imgs/prev2.png';

function Preview() {
    const films = [
        {
            img: prev1,
            name: 'Иваново Детство',
            desk: 'Иван — это ребёнок, снедаемый страстью взрослого. Он потерял детство на войне и погиб, потому что жил как взрослый.',
            date: '24 мая, 18:30',
            rate: '14 +',
            Id: 1
        },
        {
            img: prev2,
            name: 'Лиса и виноград',
            desk: 'Богач и философ Ксанф вернулся из путешествия с группой купленных им рабов, один из которых - Эзоп - настолько безобразен и уродлив.',
            date: '20 мая, 18:30',
            rate: '16 +',
            Id: 2
        },
        {
            img: prev2,
            name: 'Лиса и виноград',
            desk: 'Богач и философ Ксанф вернулся из путешествия с группой купленных им рабов, один из которых - Эзоп - настолько безобразен и уродлив.',
            date: '20 мая, 18:30',
            rate: '16 +',
            Id: 2
        },
        {
            img: prev2,
            name: 'Лиса и виноград',
            desk: 'Богач и философ Ксанф вернулся из путешествия с группой купленных им рабов, один из которых - Эзоп - настолько безобразен и уродлив.',
            date: '20 мая, 18:30',
            rate: '16 +',
            Id: 2
        },
        {
            img: prev2,
            name: 'Лиса и виноград',
            desk: 'Богач и философ Ксанф вернулся из путешествия с группой купленных им рабов, один из которых - Эзоп - настолько безобразен и уродлив.',
            date: '20 мая, 18:30',
            rate: '16 +',
            Id: 2
        },
        {
            img: prev2,
            name: 'Лиса и виноград',
            desk: 'Богач и философ Ксанф вернулся из путешествия с группой купленных им рабов, один из которых - Эзоп - настолько безобразен и уродлив.',
            date: '20 мая, 18:30',
            rate: '16 +',
            Id: 2
        }
    ];

    const sliderRef = useRef(null);

    const handleWheel = (e) => {
        if (sliderRef.current && sliderRef.current.contains(e.target)) {
            e.preventDefault();
            const scrollSpeed = 3;
            sliderRef.current.scrollLeft += e.deltaY * scrollSpeed;
        }
    };
    

    const handleMouseEnter = () => {
        document.body.classList.add('no-scroll');
    };
    
    const handleMouseLeave = () => {
        document.body.classList.remove('no-scroll');
    };

    return (
        <div 
            className='slider' 
            ref={sliderRef} 
            onWheel={handleWheel} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className='prev'>
                {films.map((film) => (
                    <div 
                        className='slide'
                        key={film.Id}
                        style={{
                            backgroundImage: `url(${film.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '335px',
                            height: '450px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                        <div className='info'>
                            <p className='date'>{film.date}</p>
                            <p className='rate'>{film.rate}</p>
                            <h2 className='name'>{film.name}</h2>
                            <p className='desk'>{film.desk}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Preview;