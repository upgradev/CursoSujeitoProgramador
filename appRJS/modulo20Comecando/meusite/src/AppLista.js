import React, { Component } from "react";
import Feed from "./components/Feed";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "Cleison", curtidas: 10, comentarios: 2 },
        { id: 2, username: "Claudia", curtidas: 200, comentarios: 50 },
        { id: 3, username: "Ana", curtidas: 16, comentarios: 23 },
        { id: 4, username: "Joao", curtidas: 0, comentarios: 0 },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed
              id={item.id}
              username={item.username}
              curtidas={item.curtidas}
              comentarios={item.comentarios}
            />
          );
        })}
      </div>
    );
  }
}
