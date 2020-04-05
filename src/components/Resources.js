import React, { Component } from "react";
import { Link } from "react-router-dom";
import qsearch from "./img/qsearch1.png";
import image2 from "../components/img/b2.jpg";

import Spinner from "./common/Spinner";

class Resources extends Component {
  constructor() {
    super();
    this.state = {
      res: "",
      data: [
        {
          title: "My morning Routing",
          description: "This is a really helpful guide My morning Routing",
          url: "https://mymorningroutine.com/",
          img: "",
          category: "Life balance",
          ResourceType: "Article",
        },
        {
          title: "My morning Routing",
          description: "This is a really helpful guide My morning Routing",
          url: "https://mymorningroutine.com/",
          img: "",
          category: "Life balance",
          ResourceType: "Article",
        },
      ],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    let url = `https://riseshineserver.herokuapp.com/post`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        this.setState({ res: data });
      })
      .catch((err) => {
        console.log(
          "There was a problem with your fetch request" + err.message
        );
      });
  }

  render() {
    console.log("state", this.state);
    const resources = this.state.data;
    const res = this.state.res;

    const filterbutton = (
      <div className="filterbutton">
        <div className="dropdown col-lg-3 col-md-3 col-sm">
          {/* Reset All */}
          {/* {this.state.showResetBtn ? (
            <button
              className="btn btn-primary mb-2 ml-4 px-5"
              onClick={this.getAllDeals.bind(this)}
            >
              Reset All
            </button>
          ) : null} */}
        </div>
        <div className="row text-center">
          <div className="dropdown col-lg-4 col-md-4 col-sm">
            <select
              value={this.state.selectValue}
              onChange={this.handleChangeCategory}
              className="btn btn-light dropdown-toggle btn-width btn-height"
            >
              <option value="">All categories</option>
              <option value="Food">Health</option>
              <option value="Food">Entertainment</option>
              <option value="Food">Games</option>
              <option value="Food">Food</option>
              <option value="Drinks">Drinks</option>
              <option value="Activities">Activities</option>
              <option value="Events">Events</option>
              <option value="Arts">Arts</option>
              <option value="Sports">Sports</option>
              <option value="Indoor">Indoor</option>
              <option value="Music">Music</option>
              <option value="Classes">Classes</option>
              <option value="Social">Social</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="dropdown col-lg-4 col-md-4 col-sm">
            <select
              //   value={this.state.selectValue}
              //   onChange={this.handleChangeCity}
              className="btn btn-light dropdown-toggle btn-width btn-height"
            >
              <option value="">By type</option>
              <option value="Manhattan">Videos</option>
              <option value="Queens">Audiobooks</option>
              <option value="Bronx">Books</option>
              <option value="Brooklyn">Articles</option>
              <option value="Staten Island">Tutorials</option>
            </select>
          </div>

          <div className="dropdown col-lg-3 col-md-3 col-sm">
            <button
              className="btn btn-primary btn-width"
              //   onClick={this.findDeals.bind(this)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );

    const searchBar = (
      <div className="input-group my-3">
        <input
          type="text"
          name="dealName"
          className="form-control"
          //   value={this.state.dealName}
          placeholder="Search Deal by Name"
          //   onChange={this.onChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            // onClick={this.searchDealByName.bind(this)}
          >
            Search
          </button>
        </div>
      </div>
    );

    return (
      <div className="container">
        <br />
        <div className="d-flex justify-content-around">
          <h2
            className={
              this.state.filerMode === "category"
                ? "title text-center text-primary underline"
                : "title text-center"
            }
            onClick={() => this.setState({ filerMode: "category" })}
          >
            ✨Explore by Category
          </h2>
          <h2
            className={
              this.state.filerMode === "name"
                ? "title text-center text-primary underline"
                : "title text-center"
            }
            onClick={() =>
              this.setState({ filerMode: "name", searchImg: false })
            }
          >
            Explore by Name
            <span>
              <i class="fa fa-search"></i>
            </span>
          </h2>
        </div>
        <br />
        <br />
        {filterbutton}
        <hr />

        {/* resources INFO FROM API */}

        {res ? (
          res.data.map((resources, key) => {
            return (
              <div key={key}>
                <div className="row justify-content-center">
                  <div className="col-4 col-sm-4 col-md-4">
                    <div className="">
                      <img
                        src={resources.img ? resources.img : image2}
                        className="img-thumbnail thumbnail-review"
                        alt="details"
                      />
                    </div>
                  </div>

                  <div className="col-8 col-sm-8 col-md-8">
                    <h1 className="date">
                      <Link to={`#`} className="author-name">
                        {resources.title}
                      </Link>{" "}
                      <small>
                        <span class="btn-group">
                          <a
                            href={resources.resource_url}
                            target="_blank"
                            className="btn btn-outline-success btn-sm"
                          >
                            Open
                          </a>
                        </span>
                      </small>
                    </h1>

                    <div className="comment">
                      <p>{resources.text}</p>
                    </div>

                    <div className="helpful flex-container">
                      <div className="date">
                        <p>Was this review helpful?</p>
                      </div>

                      <button className="btn-info-helpful">{} (0) Yes</button>

                      <button className="btn-info-helpful">{} (0) No</button>

                      <button className="date">Report</button>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })
        ) : (
          <Spinner />
        )}

        {/* MORE resources */}
        <div className="row justify-content-center">
          <button className="btn-info">See more reviews</button>
        </div>
        <br />
      </div>
    );
  }
}

export default Resources;
