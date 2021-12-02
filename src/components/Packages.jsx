import React from "react";
function Packages(){
    return(
        <>
        <div id="packages">
        <h2>Packages.</h2>
        <hr/>
        <p>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
    </div>
    <div className="tariffs">
        <div className="tariff">
            <ul>
                <li className="tariff-name">Basic</li>
                <li>Floorplanning</li>
                <li>10 hours support</li>
                <li>Photography</li>
                <li>20% furniture discount</li>
                <li>Good deals</li>
                <li>
                    <p className="price">50 cents</p>
                    <p className="period">per day</p>
                </li>
                <li>
                    <button>Sign Up</button>
                </li>
            </ul>
        </div>
        <div className="tariff pro">
            <ul>
                <li className="tariff-name">Pro</li>
                <li>Floorplanning</li>
                <li>50 hours support</li>
                <li>Photography</li>
                <li>50% furniture discount</li>
                <li>GREAT deals</li>
                <li>
                    <p className="price">50 cents</p>
                    <p className="period">per day</p>
                </li>
                <li>
                    <button>Sign Up</button>
                </li>
            </ul>
        </div>
    </div>
    </>
    )
}
export default Packages