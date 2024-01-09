export default function Web(){
    return(
        <div className="web">
            <div className="location">
                <h1>Find us either at our Shop in West Burleigh or at your local Farmers Market</h1>
                <p>A slice of the Mediterraneam, just down the street</p>
                <p>Northern River (NSW) - Gold Coast(QLD) - Brisbane (QLD)</p>
                <button className="learnMore"> LEARN MORE</button>
            </div>
            <div className="stores">
                <div className="shop">
                    <img alt="logo" src="./images/26.jpg"></img>
                    <h2>The Shop</h2>
                    <h4>Tierra Bulk Foods</h4>
                    <p>7/96 Township dr. West Burleigh</p>
                    <p><span>Mon & Friday</span> 10 am - 3pm</p>
                    <p><span>Tuesday</span> Closed</p>
                    <p><span>Wed & Thu</span> 10am - 5pm</p>
                    <a href="www.google.com"> Learn More</a>
                 </div>
                 <div className="shop">
                    <img alt="logo" src="./images/26.jpg"></img>
                    <h2>Newrybar</h2>
                    <h4>Newrybar Eats & Produce</h4>
                    <p>7/96 Township dr. West Burleigh</p>
                    <p><span>Wednesday</span> 3pm - 7pm</p>
                    <a href="www.google.com"> Learn More</a>
                 </div>
                 <div className="shop">
                    <img alt="logo" src="./images/26.jpg"></img>
                    <h2>Currumbin</h2>
                    <h4>Currumbin Community Market</h4>
                    <p><span>Thursday</span> 7am - 11am</p>
                    <a href="www.google.com"> Learn More</a>
                 </div>
        </div>
    </div>
        
    )
}