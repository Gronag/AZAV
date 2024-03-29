import { useState } from 'react';
import './App.css';

function App() {
    const tests = [
        {
            question: '1 how to build website for free?',
            answers: [
                'Learn how code',
                'Hire a friend',
                'Fake it till you make it',
                'Ask on LinkedIn'
            ],
            correctAnswer: 'Learn how code'
        },{
            question: '2 how to host website for free?',
            answers: [
                'Ask a friend',
                'Not possible for free',
                'Github Pages',
                'Ask on LinkedIn'
            ],
            correctAnswer: 'Github Pages'
        },{
            question: '3 what you should know for React?',
            answers: [
                'Only HTML',
                'HTML, CSS, Javascript',
                'Only CSS',
                'nothing required'
            ],
            correctAnswer: 'HTML, CSS, Javascript'
        },{
            question: '4 where is best to learn React?',
            answers: [
                'Learn by yourself',
                'What is React?',
                'ask somebody to show it to you',
                'Fulltime course at ReDI'
            ],
            correctAnswer: 'Fulltime course at ReDI'
        },{
            question: '5 what can you most likely become after the fulltime course at ReDI?',
            answers: [
                'DevOps',
                'Frontend Web Developer',
                'Data Scientist',
                'UI UX Developer'
            ],
            correctAnswer: 'Frontend Web Developer'
        }
    ]

    const [score, setScore] = useState(0);
    const [ currentQuestion, setCurrentQuestion] = useState(0)
    function nextQuestion() {
        setCurrentQuestion(i => i+=1)
    }
    function selectHandler(e){
        console.log(e.target.textContent);
        if(e.target.textContent===tests[currentQuestion].correctAnswer){
            setScore(i => i+=1)
            console.log(score);
        }
        setCurrentQuestion(i => i+=1)
    }


    

  return (
    <div className='App'>
        <div className='Score'>
            <h2>Score: {score}</h2>
        </div>

        <div className='Quiz'>
            <h1>Q: {tests[currentQuestion].question}</h1>
            <div>
                {tests[currentQuestion].answers.map(i => 
                   <button className='answers' onClick={selectHandler}> {i}</button> 
                )}
                {/* <button>A1: {tests[0].answers[0]}</button>
                <button>A2: {tests[0].answers[1]}</button>
                <button>A3: {tests[0].answers[2]}</button>
                <button>A4: {tests[0].answers[3]}</button> */}
            </div>
        </div>
        <button className='next bottom-right' onClick={nextQuestion}>Next</button>
    </div>
  )
}
export default App;
