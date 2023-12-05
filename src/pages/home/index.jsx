import React, { useEffect, useState } from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'

function HomePage() {
    const [dataApi, setDataApi] = useState([])
    const [input, setInput] = useState("")
    const [region, setRegion] = useState("")



    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setDataApi(data))

    }, [])
    console.log(dataApi);
    return (
        <section id='homePage'>
            <div className="homePageContainer">
                <div className="searchPanelContainer">
                    <div className="searchContainer"><i class="fa-solid fa-magnifying-glass"></i><input type="text" value={input} placeholder='Search Countries' onChange={(e) => setInput(e.target.value)} /></div>
                    <div className="filterContiner">
                        <div className="filterCont">
                            Filter by Region <i class="fa-solid fa-chevron-down"></i>
                            <div className="filterDropDown">
                                <ul>
                                    <li onClick={() => setRegion("Africa")}>Africa</li>
                                    <li onClick={() => setRegion("America")}>America</li>
                                    <li onClick={() => setRegion("Asia")}>Asia</li>
                                    <li onClick={() => setRegion("Europe")}>Europe</li>
                                    <li onClick={() => setRegion("Oceania")}>Oceania</li>
                                    <li onClick={() => setRegion("")}>All</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardCont">
                    {dataApi.map((x) => {
                        if (x.name.common == "Israel" || x.name.common == "Armenia") {
                            return
                        }

                        if (x.name.common.toLowerCase().includes(input.toLowerCase()) && x.region.toLowerCase().includes(region.toLowerCase())) {

                            return (

                                <div className="card">
                                    <div className="image">
                                        <img src={x.flags.png} alt="" />
                                    </div>
                                    <div className="cardContent">

                                        <div className="name">
                                            {x.name.common}
                                        </div>

                                        <div className="countryDetails">
                                            <div className="population">
                                                <span>Population : </span>  {x.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                            </div>
                                            <div className="region">
                                                <span>Region : </span>  {x.region}
                                            </div>
                                            <div className="capital">
                                                <span>Capital : </span>  {x.capital}
                                            </div>
                                        </div>
                                    </div>
                                    <p> <Link to={"/details/" + x.name.common} >Details </Link></p>
                                </div>

                            )
                        }
                    })}
                </div>
            </div>
        </section >
    );
};


export default HomePage