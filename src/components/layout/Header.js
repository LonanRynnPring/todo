import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>To Do list</h1>
        </header>
    )
}

const headerStyle = {
    background: 'rgb(76, 101, 245)',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}