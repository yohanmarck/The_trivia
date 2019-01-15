import React, { Component, createRef } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import Category from './Category';
import api from '../../helpers/api';

class CategoryContainer extends Component {
    state = {
        category: null,
        currentQuestion: 0,
        score: 0,
        playerAnswer: ''
    }
    answerInput = createRef();
    async componentDidMount() {
        const data = await api.getCategoryById(this.props.match.params.id);
        this.setState( {
            category: data,
        });
        console.log(data);
        reactLocalStorage.set('score', this.state.score);
    }
    
    handleSubmit = (e) => {
        // here I prevent de fault bh of submitting form
        e.preventDefault();
        const { category } = this.state;
        var  currentQuestion  = this.state.currentQuestion;
        var answer = this.answerInput.current.value;
        var currentAnswer = category.clues[currentQuestion].answer;
        console.log(currentAnswer);
        console.log(answer);
        if(answer.toLowerCase() === currentAnswer.toLowerCase()) {
            
            this.setState({
                currentQuestion: this.state.currentQuestion + 1,
                score: this.state.score + 1
            })
            localStorage.score = this.state.score+1
        } else {
            this.setState({
                currentQuestion: this.state.currentQuestion + 1
            })
        }
        this.answerInput.current.value = '';
        
    }

  render() {
    var score = this.state.score;
    const { category } = this.state;
    const  currentQuestion  = this.state.currentQuestion;
    if(!category) return <div>is loading</div>
        return (
            <Category
                category={category}
                currentQuestionIndex = {currentQuestion}
                handleSubmit={this.handleSubmit}
                answerInput={this.answerInput}
                score={score}
            />
        );
    }
}


export default CategoryContainer;