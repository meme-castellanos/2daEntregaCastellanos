import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
    const navigate=useNavigate()
  return (
    <div>
        <h1 className='m-3 text-danger'>En construcción</h1>
        <h5>Pronto tendremos noticias!</h5>
        <div>
        <img src='https://cdn.icon-icons.com/icons2/1465/PNG/512/619construction_100942.png' alt="En construcción"/></div>
        <button
            className="btn btn-outline-secondary btn-lg mb-3"
            onClick={() => navigate("/")}
          >Volver</button>
    </div>
  )
}

export default AboutUs