import React, {useState} from 'react';
import Input from "./componets/Input";
import Button from "./componets/Button";
import './App.css';
import Label from "./componets/Label";
import {returnRandomRoundValueFromRange} from './utils'
import {possibleAnswersToSimpleQuestion} from './const'

function App() {
  const [questionState, setQuestionState] = useState('');
  const [answerState, setAnswerState] = useState('');

  const handleOnChange = (e) => {
    setQuestionState(e.target.value);
    setAnswerState('');
  }

  const handleOnClick = () => {
    if(!questionState || answerState) return
    const answerIndex = returnRandomRoundValueFromRange(0, possibleAnswersToSimpleQuestion.length);
    const answerResult = possibleAnswersToSimpleQuestion[answerIndex]
    setAnswerState(answerResult);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Кристина, задай простой вопрос, на который можно ответить "да" или "нет"</p>
        <Label labelText="Место для вопроса">
          <Input
          inputState={questionState}
          handleOnChange={handleOnChange}
        />
        </Label>
        <Label labelText="Нажми на кнопку - получишь результат">
          <Button
            buttonLabel='Получить ответ'
            handleOnClick={handleOnClick}
          />
        </Label>
        <Label labelText="А тут вот результат">
          <Input
            inputState={answerState}
            isReadOnly
          />
        </Label>
      </header>
    </div>
  );
}

export default App;
