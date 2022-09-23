import React from 'react';
import Web from '../images/Web.jpg'
import Ai from '../images/arti.jpg'
// import Feature1 from '../images/feature_one.jpg';
// import Feature2 from '../images/feature_two.jpg';
import "./program.css"

function Program() {

    const programs=[
        {
            image:Web,
            heading:"Web Development",
            paragraph:"We are always ready to work on your next web project. We provide web supports in varity of tech and languages. It does not matter the requirement we have plenty of option such as Node js, Django, Laravel and many more as per your requirements.",
            href:"/"
        },
        {
            image:Ai,
            heading:"AI-Based Development",
            paragraph:"Artizence is to provide high quality Artificial Inteligence software with market quality.Artificial intelligence developers build AI functionality into software applications.artificial intelligence developers build AI functionality",
            href:"/"
        }
    ]
  
        return (
            <div id="programs_div">
                <h1 className="div_heading light">Our Programs</h1>
                <p className="div_subheading light">This is our way of developing a products.</p>
                <div id="programs_list_div">

                    {programs.map((item, i) => {
                        return (
                            <div key={i} className="programs_item_div">
                                <img src={item.image} alt={item.heading} style={{height:'192.5px'}} />
                                <h1 className="div_heading light">{item.heading}</h1>
                                <p className="div_subheading light left">{item.paragraph}</p>
                                <a className="button" href={item.href}>Learn more</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

export default Program;
