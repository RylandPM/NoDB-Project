import React from "react"
import "./Sidebar.css"

export default function Sidebar(props) {
    const { characterCollection, newSheet, deleteChar, getSpecific } = props
    const mappedCharacters = characterCollection.map(element => {
        return( <div className="display">
                    <div>{element.Name}</div>
                    <div>{element.Class}</div>
                    <div>{element.Race}</div>
                    <div>{element.Level}</div>
                    <button onClick={getSpecific(element.id)} />
                    <button onClick={deleteChar(element.id)} />
                </div>
            )
    })
    return (
        <div>
            <h2>Character List</h2>
            <div>{mappedCharacters}</div>
        </div>
    )
}