import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Card from './components/card.tsx'

const arr = [
  {
    index: 1,
    title: "John",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    index: 2,
    title: "Ali",
    description: "Another description here."
  },
  {
    index: 3,
    title: "Ahmed",
    description: "Third card description."
  }
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />

    {arr.map( (elem) => {
      return (
        <Card 
          key={elem.index}  
          title={elem.title} 
          paragraph={elem.description} 
        />
      )
    })}
    
  </StrictMode>
)