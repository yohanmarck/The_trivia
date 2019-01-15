import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ category, currentQuestionIndex, handleSubmit, answerInput, score}) => {
    const theQuestion = category.clues[currentQuestionIndex];
    return(theQuestion !== undefined &&
        <section className={'question-box'}>
            <h1>Category page: <a href={`/categories/${category.id}/all`}>{category.title}</a></h1>
            <span>Question : {theQuestion.question}</span>
            <span>Votre score : {score}</span>
            <form className={'question-box'} onSubmit={handleSubmit}>
                <input ref={answerInput}></input>
                <button type={'submit'}>Send answer</button>
            </form>
        </section>);
  
};

Category.propTypes = {
    category: PropTypes.shape({}).isRequired,
    currentQuestion: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    answerInput: PropTypes.shape({
    value: PropTypes.instanceOf(HTMLInputElement)
}),
};

export default Category;