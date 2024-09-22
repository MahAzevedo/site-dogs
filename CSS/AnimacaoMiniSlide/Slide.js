import React from 'react';
import styles from './Slide.module.css';
import { transform } from '@babel/core';

const Slide = ({ slides }) => {
    const [active, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);

    function slidePrev() {
        setPosition(postition + 600)
    };

    function slideNext() {
        setPosition(position - 600)
    };

    return (
        <section className={styles.container}>
            <div className={styles.content}
                style={{ transform: `translateX(${position}px)` }}>
                {slides.map((slide) => (
                    <div key={slide.id} className={styles.item}>{slide.text}
                    </div>
                ))};
            </div>
            <nav className={styles.nav}>
                <buttom onClick={slidePrev}>Anterior</buttom>
                <buttom onClick={slideNext}>Próximo</buttom>
            </nav>
        </section>
    );
};

export default Slide;
