import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ slides }) => {
    return (
        <section className={Styles.container}>
            <div className={Styles.content}>
                {slides.map((slide) => (
                    <div key={slide.id}>{slide.text}</div>
                ))};
            </div>
            <nav>
                <buttom>Anterior</buttom>
                <buttom>Próximo</buttom>
            </nav>
        </section>
    );
};

export default Slide;
