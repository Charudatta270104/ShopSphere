import React from "react";
import Products from "./Products";
const Home = () => {
    return (
        <>
            <div className="row home m-1">
                <div className="homeimg ml-2 mr-2" >
                    <div className="hometitle">
                        <div class="typing-animation">
                            <h3 className="welcome">Welcome to</h3> <h2 className="brandname text">ShopSphere.....</h2><span class="cursor">|</span>
                        </div>
                    </div>
                </div>
            </div>
            <Products />
        </>
    );
}
export default Home;