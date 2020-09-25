import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container">
            <h1>Octo Quizify App</h1>
            <Link to="/game" className="btn">Start Game</Link>
            <Link to="/highScores" className="btn">High Score</Link>
        </div>
    )
}
