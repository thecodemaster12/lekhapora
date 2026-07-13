import { useState } from "react"
import { pdf } from "@react-pdf/renderer";
import WorksheetPDF from "../components/WorksheetPDF";

const AdditionPage = () => {
    const openPDF = async () => {

    const blob = await pdf(
        <WorksheetPDF worksheet={worksheet} />
    ).toBlob();

    const url = URL.createObjectURL(blob);

    window.open(url, "_blank");
};

    const [operation, setOperation] = useState('addition');
    const [difficulty, setDifficulty] = useState(1);

    const [numOfDigits, setNumOfDigits] = useState(1)
    const [numOfPages, setNumOfPages] = useState(2)
    const [numOfProblems, setNumOfProblems] = useState(2)
    const [operands, setOperands] = useState(2);
    const [worksheet, setWorksheet] = useState([]);
    const [showWorkSheetAnswer, setShowWorkSheetAnswer] = useState(false);

     const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

        const toBengaliNumber = (num) => {
        const englishToBengaliMap = {
            '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
            '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
        };
        return String(num).replace(/[0-9]/g, (digit) => englishToBengaliMap[digit]);
    };

    const getRandomByDigits = (digits) => {
        if (digits <= 1) {
            return generateRandom(1, 9);
        }

        const min = 10 ** (digits - 1);
        const max = 10 ** digits - 1;

        return generateRandom(min, max);
    };

    const generateProblem = () => {
        const numbers = [];

            for (let i = 0; i < operands; i++) {
                numbers.push(toBengaliNumber(getRandomByDigits(numOfDigits)));
            }
        switch (operation) {
            case 'addition':
                return {
                    numbers: numbers,
                    operator:"+",
                    answer:numbers.reduce((sum, n) => sum + n, 0)
                }
            case 'subtraction':
                return {
                    numbers: numbers,
                    operator:"-",
                    answer:numbers.slice(1).reduce(
                        (total, n) => total - n,
                        numbers[0]
                    )
                }
            case 'multiplication':
                return {
                    numbers: numbers,
                    operator:"*",
                    answer: numbers.reduce((total, n) => total * n, 1)
                }
            case 'division':
                return {
                    numbers: numbers,
                    operator:"/",
                    answer:numbers.reduce((sum, n) => sum + n, 0)
                }
        }
    }

    const generateWorksheet = () => {
       const problems = [];
           for (let i = 0; i < numOfProblems; i++) {
            problems.push(generateProblem())
           }
       setWorksheet(problems)
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
                    <input name="operation-type" type="radio" className="operation-type-checkbox active"/>
                    <label htmlFor="">Addition</label>
                    <div className="operation-icon">+</div>
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
            <div className="flex flex-col">
                <label>Difficulty Level</label>
                <select onChange={(e) => setDifficulty(e.target.value)} name="" id="">
                    <option selected value="1">Easy</option>
                    <option value="2">Medium</option>
                    <option value="3">Hard</option>
                </select>
            </div>
            <div className="flex gap-2 items-center">
                <input onChange={(e) => setShowWorkSheetAnswer(e.target.checked)} type="checkbox" name="" id="show-worksheet-answer" />
                <label htmlFor="show-worksheet-answer">Include Answer</label>
            </div>

        </div>
        <button onClick={generateWorksheet} className="mt-4 px-6 py-2 rounded-2xl inline-block bg-indigo-300">Generate worksheet</button>
        <button onClick={openPDF}>
    Preview PDF
</button>

        <div className="output space-y-3 mt-10  grid grid-cols-5 gap-4 font-bangla">
    {worksheet.map((problem, index) => (
        <div
            key={index}
            className="text-2xl font-mono"
        >
            <div className="">
                <div className="inline-block border-b">
                    {problem.numbers.map((num, i) => (
                        <p className="font-bangla" key={i}>
                            {i === problem.numbers.length - 1 ?
                                ` ${problem.operator}` :  ` \u00A0`}
                            {toBengaliNumber(num)}
                        </p>
                    ))}
                </div>

                <div className="font-bangla">
                    {showWorkSheetAnswer && toBengaliNumber(problem.answer)}
                </div>
            </div>
        </div>
    ))}
</div>
    </div>
  )
}

export default AdditionPage