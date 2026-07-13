import Card from "./Card"

const OptionGrid = () => {
  return (
    <div className="space-y-4 px-10">
        <div className="">
            <h2>Chose a subject</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, placeat debitis incidunt optio dicta molestiae earum! Magni placeat unde eligendi iusto! Vitae temporibus molestias nostrum consequatur harum animi enim praesentium?</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default OptionGrid