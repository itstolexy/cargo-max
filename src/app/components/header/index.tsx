import React from "react";


export default function Header() {
    return (
        <header>
            <nav className="flex flex-row my-5">
                <span className="text-[#FF3D00]">
                    <h3>CargoMax</h3>
                </span>
                <span className="flex flex-row ml-auto">
                    <p className="">
                        Home
                    </p>
                    <p className="ml-4"> 
                        About Us
                    </p>
                    <p className="ml-4">  
                        Services
                    </p>
                </span>

            </nav>
        </header>
    );
}
