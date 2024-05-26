import React from "react";
import FooterList from "./FooterList";
import Footer2 from "./Footer2"

export default function Footer(){
    return(
        <>
        <div className="mx-auto bg-neutral-800  rounded-lg text-white flex flex-col justify-center md:justify-between gap-6 lg:flex-row py-12 px-12 md:px-32 text-center md:text-left" >
            <div >
                <h1 className="text-5xl md-text-6xl border-gray-300 my-4">READY TO WROK WITH US  ?</h1>
                <p>Experince top notch customer and ket us guide you on property buying journey.</p>

            </div >
            <div className=" lg:w-1/5 flex flex-col justify-start  gap-6 border-t border-gray-300 my-4">
                <div className="text-3xl font-bold">Eastate</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <FooterList heading="Home" opt1="About us" link1="#" opt2="collection" link2="#" opt3="Blog & News" link3="#" />
                <FooterList heading="Security" opt1="Privacy policy" link1="#" opt2="User Agreements" link2="#"  opt3="Copy Rights" link3="#" />
                <FooterList heading="Social Media" opt1="Instagram" link1="#" opt2="Fcebook" link2="#"  opt3="Twitter" link3="#"  />
            </div>
        </div>
        
        </>
    )
}