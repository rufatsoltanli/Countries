import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./style.scss"

function DetailsPage() {
  const { name } = useParams()
  const [detailApi, setDetailApi] = useState([])
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(res => res.json())
      .then(data => setDetailApi(data))

  }, [])
  return (
    <>
      <section id='detailsPage'><div className="detailsCont">
        <Link to={"/"}>Go back <i class="fa-solid fa-reply"></i></Link>
        {detailApi.map((x) => {
          return <div className="detailContent">
            <div className="leftSide"><img src={x.flags.png} alt="" /></div>
            <div className="rightSide">
              <h1>{x.name.common}</h1>
              <div className="countryDetails">
                <div className="nativeName">
                  <span>Native name : </span>  {x.name?.nativeName?.common}

                </div>
                <div className="nativeName">
                  <span>Currency : </span>  {x.currencies?.name}

                </div>
                <div className="population">
                  <span>Population : </span>  {x.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
                <div className="region">
                  <span>Region : </span>  {x.region}
                </div>
                <div className="subregion">
                  <span>Sub Region : </span>  {x.subregion}
                </div>
                <div className="topleveldomain">
                  <span>Top Level Domain : </span>  {x.tld}
                </div>

                <div className="capital">
                  <span>Capital : </span>  {x.capital}
                </div>
              </div>
            </div>
          </div>
        })}
      </div></section>
    </>
  )
}
export default DetailsPage