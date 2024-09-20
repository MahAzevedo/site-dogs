import React from 'react';
import styles from './Slide.module.css';
import { transform } from '@babel/core';

const Slide = ({ slides }) => {
    const [active, setActive] = React.useState(0);

    return (
        <section className={styles.container}>
            <div className={styles.content} style={{ transform: 'translateX()' }}>
                {slides.map((slide) => (
                    <div key={slide.id} className={styles.item}>{slide.text}
                    </div>
                ))};
            </div>
            <nav className={styles.nav}>
                <buttom>Anterior</buttom>
                <buttom>Próximo</buttom>
            </nav>
        </section>
    );
};

export default Slide;
