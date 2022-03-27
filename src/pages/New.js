import React, { Component } from "react";
import api from "../services/api";

import "./New.css";

class New extends Component {
  state = {
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const date = new FormData();

    date.append("image", this.state.image);
    date.append("author", this.state.author);
    date.append("place", this.state.place);
    date.append("description", this.state.description);
    date.append("hashtags", this.state.hashtags);

    await api.post("posts", date);

    this.props.history.push("/");
  };

  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />

        <input
          type="text"
          name="author"
          placeholder="Autor do post"
          onChange={this.handleChange}
          value={this.state.author}
        />
        <input
          type="text"
          name="place"
          placeholder="Local do post"
          onChange={this.handleChange}
          value={this.state.place}
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição do post"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input
          type="text"
          name="hashtags"
          placeholder="Hashtags do post"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default New;
