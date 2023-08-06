import React from "react"
import Cards from "./components/cards"
import Header from "./components/header"
import data from "./data"

export default function App(){
    const cardsHTML = data.map((item)=>{
        return (
            <Cards 
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div>
            <Header />
            {cardsHTML}
        </div>
    )
}
