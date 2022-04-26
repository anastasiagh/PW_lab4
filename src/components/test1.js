import React, { Component } from "react";
import axios from "axios";
import ShowQuestions from "./showQuestions";

export class test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentIndex: 0
    };
  }

  componentDidMount() {
    axios
      .get(`https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/392`, {
        headers: { "X-Access-Token": process.env.REACT_APP_ACCESS_TOKEN },
      })
      .then((res) => {
        const sandu = res.data;
        this.setState({
          questions: sandu.questions,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 
  render() {
    return (
      <>
        <h2>{this.state.questions.title}</h2>
        <ShowQuestions questions={this.state.questions} />
      </>
    );
  }
}

export default test1;
