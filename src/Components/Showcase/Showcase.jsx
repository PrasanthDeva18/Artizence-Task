import React from 'react';
import './showcase.css';
import Code from '../images/coding.svg'
import Touch from '../images/touch.svg'
import Dash from '../images/dash.svg'
import Star from '../images/star.svg'

const Showcase = () => {



    const showcase =[
        {
            image:Code,
            heading:"Lightweight",
            paragraph:"This template was coded with organised, reliable code to ensure fast load times and optimum usability."
        },
        {
            image:Touch,
            heading:"Responsive",
            paragraph:"With the rise of mobile devices, this template is designed to look great on any screen size."
        },
        {
            image:Dash,
            heading:"Clean",
            paragraph:"Extra time and throught was taken to produce a design that is free of clutter and wasted space."
        },
        {
            image:Star,
            heading:"Modern",
            paragraph:"This template will keep your website looking new and fresh. The most modern design techniques were implemented to make sure your product shines through."
        }
        
    ]
        return (
            <div id="showcase_div">
                <h1 className="div_heading">Features</h1>
                <div id="showcase_list_div">

                    {showcase.map((item, i) => {
                        return (
                            <div key={i} className="showcase_item_div">
                                <div className="showcase_image_div">
                                    <img src={item.image} alt={item.heading} />
                                </div>
                                <div className="showcase_text_div">
                                    <h1>{item.heading}</h1>
                                    <p className="div_subheading left">{item.paragraph}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }

export default Showcase;