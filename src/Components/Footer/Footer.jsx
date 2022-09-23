import React from 'react';
import './footer.css'

function Footer() {


    const footer={
        
        download:[
        {
            href:"/",
            paragraph:"List item"
        },
        {
            href:"/",
            paragraph:"List item"
        },
        {
            href:"/",
            paragraph:"List item"
        },
        {
            href:"/",
            paragraph:"List item"
        }
    ],
    
    company:[
        {
            href:"/",
            paragraph:"List item"
        },
        {
            href:"/",
            paragraph:"List item"
        },
        {
            href:"/",
            paragraph:"List item"
        },
        {
            href:"/",
            paragraph:"List item"
        },
        {
            href:"/",
            paragraph:"List item"
        }
    ]}
   
        return (
            <div id="footer_div">
                <div id="footer_column_div">
                    <div className="footer_column">
                        <h1 className="div_heading left footer">About Us</h1>
                        <p className="div_subheading left footer_sub">Industrial Revolution 4.0 is happening now, the world is changing, jobs and tasks which were done by humans are now being done by Automation backend by Artificial Intelligence.

Artizence is an Artificial Intelligence startup that is building AI products and providing AI and IT services for the 21st century wants .
the 21st century needs. </p>
                    </div>

                    <div className="footer_column">
                        <h1 className="div_heading left footer">Download</h1>
                        <ul>
                            {footer.download.map((item, i) => {
                                return(
                                    <li key={i}><a href={item.href} className="div_subheading footer_sub">{item.paragraph}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="footer_column">
                        <h1 className="div_heading left footer">Company</h1>
                        <ul>
                        {footer.company.map((item, i) => {
                                return(
                                    <li key={i}><a href={item.href} className="div_subheading footer_sub">{item.paragraph}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <p className="div_subheading red">©Artizence{(new Date().getFullYear())} </p>
            </div>
        )
    }


export default Footer;