import React from 'react';
import PropTypes from 'prop-types';

const Random = ({ random, currentQuestionIndex, handleSubmit, answerInput, score}) => {
    const theQuestion = random[currentQuestionIndex];
    return(
        <section className={'question-box'}>
            <h1>Category page: {random.title}</h1>
            <span>Question : {theQuestion.question}</span>
            <span>Votre score : {score}</span>
            <form className={'question-box'} onSubmit={handleSubmit}>
                <input ref={answerInput}></input>
                <button type={'submit'}>Send answer</button>
            </form>
        </section>
    );
  
};

Random.propTypes = {
    random: PropTypes.shape({}).isRequired,
    currentQuestion: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    answerInput: PropTypes.shape({
        value: PropTypes.instanceOf(HTMLInputElement)
}),
};

export default Random;