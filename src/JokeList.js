import React from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke.js";
const { v4: uuidv4 } = require("uuid");

class JokeList extends React.Component {
  static defaultProps = {
    numJokesToGet: 10
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false
    };
    this.seenJokes = new Set(this.state.jokes.map(j => j.text));
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }

  async getJokes() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      const url = "https://icanhazdadjoke.com/";
      let response = await axios.get(url, {
        headers: { Accept: "application/json" }
      });
      let newJoke = response.data.joke;

      if (!this.seenJokes.has(newJoke)) {
        jokes.push({ id: uuidv4(), text: newJoke, votes: 0 });
      } else {
        console.log("found a duplicate");
        console.log(newJoke);
      }
    }
    this.setState(
      st => ({ loading: false, jokes: [...st.jokes, ...jokes] }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  handleVote(id, change) {
    this.setState(
      st => ({
        jokes: st.jokes.map(j =>
          j.id === id ? { ...j, votes: j.votes + change } : j
        )
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="far fa-5x fa-laugh fa-spin" />
          <h1 className="JokeList-title">Loading....</h1>
        </div>
      );
    }

    let jokes = this.state.jokes.sort((a,b) => b.votes - a.votes);
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">Dad Jokes </h1>
          <img
            src="https://cdn4.iconfinder.com/data/icons/emoji-37/512/feeling-Emoji-face-emoticon-emotion-28-512.png"
            alt="smiley"
          />
          <button className="JokeList-getmore" onClick={this.handleClick}>
            New Jokes
          </button>
        </div>

        <div className="JokeList-joke">
          {jokes.map(j => (
            <Joke
              key={j.id}
              votes={j.votes}
              text={j.text}
              upVote={() => this.handleVote(j.id, 1)}
              downVote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
