import React from 'react';

const Slide = ({ slides }) => {
    return (
        <section>
            {slides.map((slide) => (
                <div key={slide.id}>{slide.text}</div>
            ))};
        </section>
    );
};

export default Slide;
