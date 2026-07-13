import { useState } from "react"

const MathPage = () => {

    const [operation, setOperation] = useState('addition');

    const [numOfDigits, setNumOfDigits] = useState(1)
    const [numOfPages, setNumOfPages] = useState(2)
    const [numOfProblems, setNumOfProblems] = useState(2)
    const [operands, setOperands] = useState(2);
    const [worksheet, setWorksheet] = useState([]);
    const [showWorkSheetAnswer, setShowWorkSheetAnswer] = useState(false);

     const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const getRandomByDigits = (digits) => {
        if (digits <= 1) {
            return generateRandom(1, 9);
        }

        const min = 10 ** (digits - 1);
        const max = 10 ** digits - 1;

        return generateRandom(min, max);
    };

    const generateAdditionProblem = () => {
        const numbers = [];

            for (let i = 0; i < operands; i++) {
                numbers.push(getRandomByDigits(numOfDigits));
            }
            const answer = numbers.reduce((sum, n) => sum + n, 0);
        return {
            numbers: numbers,
            operator:"+",
            answer:answer
        }

    }

    const generateWorksheet = () => {
       const problems = [];
       for (let i = 0; i < numOfProblems; i++) {
            problems.push(generateAdditionProblem());
       } 

       setWorksheet(problems)
       console.log(worksheet);
    }

    
  return (
    <div className="container max-w-3xl mx-auto py-20 space-y-4 px-4">
        <div className="">
            <h2 className="section-title">Math worksheet generator</h2>
            <p className="section-intro">Math worksheet generator</p>
        </div>

        <div className="">
            <h4 className="text-xl font-bold text-primary mb-4">Chose operation type</h4>
            <div className="operation-type-container">
                <div className="operation-type-item">
                    <input onClick={() => setOperation('addition')} name="operation-type" type="radio" className={`operation-type-checkbox ${operation === 'addition' ? 'active' : ''}`} value="addition" id="" />
                    <label htmlFor="">Addition</label>
                    <div className="operation-icon">+</div>
                </div>
                <div className="operation-type-item">
                    <input onClick={() => setOperation('subtraction')} name="operation-type" type="radio" className={`operation-type-checkbox ${operation === 'subtraction' ? 'active' : ''}`} value="subtraction" id="" />
                    <label htmlFor="">Subtraction</label>
                    <div className="operation-icon">-</div>
                </div>
                <div className="operation-type-item">
                    <input onClick={() => setOperation('multiplication')} name="operation-type" type="radio" className={`operation-type-checkbox ${operation === 'multiplication' ? 'active' : ''}`} value="multiplication" id="" />
                    <label htmlFor="">Multiplication</label>
                    <div className="operation-icon">x</div>
                </div>
                <div className="operation-type-item">
                    <input onClick={() => setOperation('division')} name="operation-type" type="radio" className={`operation-type-checkbox ${operation === 'division' ? 'active' : ''}`} value="division" id="" />
                    <label htmlFor="">Division</label>
                    <div className="operation-icon">÷</div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
                <label>Number of digits</label>
                <input className="math-input" type="text" value={numOfDigits} onChange={(e) => setNumOfDigits(e.target.value)} name="" id="" />
            </div>
            <div className="flex flex-col">
                <label>Total Problems</label>
                <input className="math-input" type="text" value={numOfProblems} onChange={(e) => setNumOfProblems(e.target.value)} name="" id="" />
            </div>
            <div className="flex flex-col">
                <label>Number of Operand</label>
                <input className="math-input" type="text" value={operands} onChange={ (e) => setOperands(e.target.value)} name="" id="" />
            </div>
            <div className="flex gap-2 items-center">
                <input onChange={(e) => setShowWorkSheetAnswer(e.target.checked)} type="checkbox" name="" id="" />
                <label htmlFor="">Include Answer</label>
            </div>

        </div>
        <button onClick={generateWorksheet} className="mt-4 px-6 py-2 rounded-2xl inline-block bg-indigo-300">Generate worksheet</button>

        <div className="output">
            {operation}
            {/* {addition ? "true" : 'false'}
            {numOfDigits}
            {numOfProblems} */}
        </div>

        <div className="output space-y-3 mt-10  grid grid-cols-5 gap-4">
    {worksheet.map((problem, index) => (
        <div
            key={index}
            className="text-2xl font-mono"
        >
            <div className="">
                <div className="inline-block border-b">
                    {problem.numbers.map((num, i) => (
                        <p  key={i}>
                            {i === problem.numbers.length - 1 ?
                                ` ${problem.operator}` :  ` \u00A0`}
                            {num}
                        </p>
                    ))}
                </div>

                <div className="">
                    {showWorkSheetAnswer && problem.answer}
                </div>
            </div>
        </div>
    ))}
</div>
    </div>
  )
}

export default MathPage