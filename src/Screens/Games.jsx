import React from "react"
import Slider from '../Items/Slider'
import ProjectInfo from '../Items/ProjectInfo'
import '../main.scss'

const images = [
    "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
    "https://images.unsplash.com/photo-1557389352-e721da78ad9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
];

const info = [
    {
        title: "Undercooked Reloaded",
        description: "Made in unity in an attemp to clone the game 'Overcooked'. Turned out pretty cool. All 3D models where designed by me.",
        itch: "https://itch.io/jam/undercooked-uvg-2019/rate/470945",
        git: "https://github.com/uvg-cc3063/proyecto-undercooked-OJP98"
    },
    {
        title: "Bullet Brawl",
        description: "This is a 3D shooter with 2D movement, where you can enjoy free-for-all fights with your friends up to 4 players. The twist: your main form of movement is with the gun's recoil.",
        itch: "https://rodrigozea.itch.io/bullet-brawl",
        git: "https://github.com/uvg-cc3063/proyecto-libre-rodrigo-oscar-bulletbrawl"
    },
    {
        title: "Astral Projection",
        description: "The game starts with a dreaming kid who finds out he's in a nightmare were his soul has gone out of his body and monsters from his mind are chasing him, Max AKA The Kid must find his way back home and get into his body but he is lost into the woods.",
        itch: "https://globalgamejam.org/2019/games/astral-projection",
        git: "https://github.com/sebdeveloper6952/ggj2019"
    },
    {
        title: "Bombhead",
        description: "A 2D simple infinite platformer. Your wick is not unlimited, jump over obstacles and platforms in order to extend it. ¿Can you beat your record?",
        itch: "https://www.youtube.com/watch?v=cNDGaZKzHBc",
        git: "https://github.com/uvg-cc3055-10/Bombhead-Videojuego-Android"
    },

]

export default class Games extends React.Component {
    render() {
        return (
            <div className="Games" style={{textAlign: 'center'}}>
                <h1 className="title">Some Games I've Been Part Of</h1>
                <Slider info={info} images={images} />
            </div>
        )
    }
}