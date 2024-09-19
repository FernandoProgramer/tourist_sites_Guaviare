import React from 'react'
import { Cards } from '../components/Cards'
import "../css/hotels_styles.css"
import imgPalmas from "../img/imgPalmas.png"
import imgCasaBlanca from "../img/imageCasablanca.png"
import imagePiedraAlta from "../img/imagePiedraAlta.png"
import imagePedroSuite from "../img/imagePedroSuite.png"
import imageHotelAeropuerto from "../img/imageHotelAeropuerto.png"
import image5toNivel from "../img/image5toNivel.png"

export const Hotels = () => {
    return (
        <>
            <h1>
                HOTELES
            </h1>

            <div className="container">
                <div className="row">
                    <Cards
                        title_card="Centro Vacacional Las Palmas"
                        body_card="La Granja, Carrera 19D #N° 19-10, San José Del Guaviare, Guaviare"
                        link_card="/"
                        url_img={imgPalmas}
                    />
                    <Cards
                        title_card="Casa Blanca Guaviare Hostel"
                        body_card="Calle 11 # 20C - 122 ,Barrio el dorado, 950001 San José del Guaviare, Colombia"
                        link_card="/"
                        url_img={imgCasaBlanca}
                    />
                    <Cards
                        title_card="Piedra Alta"
                        body_card="San José Del Guaviare-Puerto Concordia San jose del guaviare 7 km via cerro azul, San José del Guaviare, Colombia"
                        link_card="/"
                        url_img={imagePiedraAlta}
                    />


                    <Cards
                        title_card="San pedro suite"
                        body_card="Carrera 20#7:20 san José del guaviare Edificio esquinero gris, 950001 San José del Guaviare, Colombia"
                        link_card="/"
                        url_img={imagePedroSuite}
                    />
                    <Cards
                        title_card="Hotel El Aeropuerto"
                        body_card="Calle 10 No 23-44 barrio el dorado, 950001 San José del Guaviare, Colombia"
                        link_card="/"
                        url_img={imageHotelAeropuerto}
                    />
                    <Cards
                        title_card="Hotel Quinto Nivel"
                        body_card="calle 7 calle 7 # 24-25, 950001 San José del Guaviare, Colombia"
                        link_card="/"
                        url_img={image5toNivel}
                    />

                </div>
            </div>
        </>
    )
}
