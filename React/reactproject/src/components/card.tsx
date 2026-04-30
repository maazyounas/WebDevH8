
const card = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
        <button>Click me</button>
    </div>
  )
}

export default card
