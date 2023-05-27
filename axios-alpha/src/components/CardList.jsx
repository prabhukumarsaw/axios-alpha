import React from 'react'
import  Card from './Card';


const CardList = ({robots}) => {
  return (
    <div style={{
      display:"flex",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: "20px",
      gap: "20px"
      }}>
        {
            robots.map((user, i) => {
                return <Card
                    key={i}
                     id = {robots[i].id}
                     image = {robots[i].image}
                     title = {robots[i].title}
                     desc = {robots[i].desc}
                />
            })
        }
        
        {/* Add more Card components as needed */}
      </div>
  )
}

export default CardList