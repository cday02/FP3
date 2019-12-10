import React from "react";
import API from "../../utils/API";
import axios from "axios";
import { SaveBtn } from "../../Form";
import { Container } from "@material-ui/core";
export default class Skins extends React.Component {
  state = {
    posts: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  apiSearch() {
    axios
      .get(
        `http://api.steamapis.com/market/items/489940?api_key=b1eQml-g5_-9vAshjf0X-anQHAQ`
      )
      .then(res => {
        console.log(res.data.data.slice(408));
        this.setState({ posts: res.data.data.slice(408) });
      });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let id = event.target.id;
    let market_name = "";
    let border_color = "";
    let nameID = "";
    let image = "";
    let price = "";

    for (var key in this.state.posts) {
      console.log("key:" + this.state.posts[key].nameID);
      if (this.state.posts[key].nameID === id) {
        market_name = this.state.posts[key].market_name;
        nameID = this.state.posts[key].nameID;
        border_color = this.state.posts[key].border_color;
        image = this.state.posts[key].image;
        price = this.state.posts[key].prices.mean;
        break;
      }
    }

    console.log("adding item: " + nameID);
    API.saveItem({
      marketname: market_name,
      rarity: border_color,
      nameid: nameID,
      image: image,
      price: price
    })
      .then(res => alert(`${res.data.marketname} has been added to cart`))
      .catch(err => console.log(err));
    // event.target.hidden = true;
  };

  componentDidMount() {
    this.apiSearch();
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <Container
            style={{
              backgroundImage:
                "https://battaliongame.com/static/082faceac2114de7eb572bc13aba5084/a745b/dlc-eastern_front.jpg"
            }}
          >
            <div className="post card" key={post._id}>
              <img
                style={{ width: 200, height: 150, marginLeft: 500 }}
                src={post.image}
                alt="this cannot display"
              />
              <div className="card-content">
                <SaveBtn
                  id={post.nameID}
                  onClick={this.handleFormSubmit}
                  hidden={false}
                >
                  Add to Cart
                </SaveBtn>
                <div className="card-title" style={{ marginLeft: 500 }}>
                  {post.market_name}
                </div>
                <p style={{ marginLeft: 500 }}>Price: ${post.prices.mean}</p>
              </div>
            </div>
          </Container>
        );
      })
    ) : (
      <div className="center">Loading...</div>
    );
    return (
      <div className="post card">
        <h4 className="center" style={{ marginLeft: 750 }}>
          Available Skins
        </h4>
        {postList}
      </div>
    );
  }
}
