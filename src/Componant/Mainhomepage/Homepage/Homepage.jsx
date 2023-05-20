import React from 'react';
import From from '../From/From';
import Ourcourses from '../Ourcourses/Ourcourses';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
// import Textslider from '../Textslider/Textslider';

const Homepage = () => {
    return (
        <>
            <Slider/>
            <Ourcourses/> 
            <Services/>
            <From/>
        </>
    );
};

export default Homepage;