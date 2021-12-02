import React from "react";
import kitchen from "../img/kitchenconcrete.jpg"
import atrium from "../img/atrium.jpg"
import living from "../img/livingroom.jpg"
import diningroom from "../img/diningroom.jpg"
import bedr from "../img/bedroom.jpg"
import livr2 from "../img/livingroom2.jpg"
function Showcase(){
    return(
        <div id="showcase">
			<h2>Showcase.</h2>
			<hr/>
			<div className="images">
				<img src={kitchen}/>
				<img src={atrium}/>
				<img src={living}/>
				<img src={diningroom}/>
				<img src={bedr}/>
				<img src={livr2}/>
			</div>
		</div>
    )
}
export default Showcase