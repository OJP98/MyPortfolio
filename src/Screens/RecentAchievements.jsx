import React from "react"
import '../main.scss'
import Showcase from '../Items/Showcase'

export default class RecentAchievements extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1 className="title">Recent Achievements</h1>
                <div className="cardSpace">
                    <Showcase title='Chopin Mol Chatbot Challenge Winners' imgUrl='../../resources/images/logo.png' description='A contest between UVG students to see which team created the best AI Chatbot in a 2-month period. Two of my friends and I got the first place.'/>
                    <Showcase title='2 Award-Winnig Game' imgUrl='../../resources/images/BBLogo.png' description='Bullet Brawl, a platformer-brawl based game created between two friends. We got the prize for the best playability and the prize for the most creative game among all the other students in the course.'/>
                </div>
            </div>
        )
    }
}