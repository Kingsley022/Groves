import React from 'react'
import "../styles/PlantsContainer.css"


const PlantsContainer = ({data}) => {

    return (
        <section className={`plants-container ${data.hasBg ? "has-Bg" : ''}`}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>

            <div className="plants">
                {data.plants.map(plant => (
                    <div key={plant.id} className="plant">
                        <img src={plant.image} alt="Plant-image" />
                        <h3>{plant.title}</h3>
                        <p>{plant.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PlantsContainer