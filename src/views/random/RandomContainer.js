import React, { Component, createRef } from 'react';
import Random from './Random';
import api from '../../helpers/api';

class RandomContainer extends Component {
    state = {
        random: null,
        currentQuestion: 0,
        score: 0,
        playerAnswer: ''
    }
    answerInput = createRef();

    async componentDidMount() {
        const data = await api.getRandom();
        this.setState( {
            random: data,
        });
    }

    handleSubmit = (e) => {
        // here I prevent de fault bh of submitting form
        e.preventDefault();
        const { random } = this.state;
        const  currentQuestion  = this.state.currentQuestion;
        var answer = this.answerInput.current.value;
        const currentAnswer = random[currentQuestion].answer;
        console.log(answer.toLowerCase());
        if(answer.toLowerCase() === currentAnswer.toLowerCase()) {
            this.setState({
                score: this.state.score + 1
            })
        } else {
            
        }
        this.componentDidMount();
        this.answerInput.current.value = ' ';
    }

  render() {
      const { random } = this.state;
      const  currentQuestion  = this.state.currentQuestion;
     console.log(this.state);
     if(!random) return <div>is loading</div>
        return (
            <Random
                random={random}
                currentQuestionIndex = {currentQuestion}
                handleSubmit={this.handleSubmit}
                answerInput={this.answerInput}
                score={this.state.score}
            />
        );
        }
    }

export default RandomContainer;