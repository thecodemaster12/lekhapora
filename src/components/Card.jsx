import { Link } from "react-router-dom"

const Card = ({title, intro, link}) => {
  return (
    <div className="card border rounded-lg p-4 text-center space-y-2">
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-sm ">{intro}</p>
        
        <Link to={link}  className="mt-8 px-6 py-2 rounded-2xl inline-block bg-indigo-300">Get started</Link>
    </div>
  )
}

export default Card