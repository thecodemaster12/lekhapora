import { Link } from "react-router-dom"

const Card = () => {
  return (
    <div className="card border rounded-lg p-4 text-center space-y-2">
        <div className="icon">Item</div>
        <h3>Card Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae harum voluptates ea </p>
        
        <Link to='/math'  className="mt-8 px-6 py-2 rounded-2xl inline-block bg-indigo-300">Get started</Link>
    </div>
  )
}

export default Card