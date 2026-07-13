import Card from "./Card"

const OptionGrid = () => {
  return (
    <div className="space-y-4 px-10">
        <div className="">
            <h2 className="section-title">Chose a subject</h2>
            <p className="section-intro">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, placeat debitis incidunt optio dicta molestiae earum! Magni placeat unde eligendi iusto! Vitae temporibus molestias nostrum consequatur harum animi enim praesentium?</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <Card title="Addition" intro="Addition is a mathematical operation that involves adding two or more numbers together to produce a new number." link="/math/addition" />
        </div>
    </div>
  )
}

export default OptionGrid