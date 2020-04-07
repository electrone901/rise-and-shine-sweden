import React, { Component } from "react";

class AddResource extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      URL: "",
      description: "",
      category: "",
      type: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  fileSelectedHandler = (e) => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
      this.setState({ imageName: e.target.files[0].name });
    }
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageFile: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    // const history = useHistory();
    console.log("yay", this.state);

    try {
      // Create request to api service
      await fetch(`https://riseshineserver.herokuapp.com/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        // format the data

        body: JSON.stringify({
          title: this.state.title,
          resource_url: this.state.URL,
          text: this.state.description,
          category: this.state.category,
          type: this.state.type,
          image_url: this.state.imageName,
        }),
      });

      //const res = await req.json();
      this.props.history.push("/resources");
    } catch (err) {
      console.error(`ERROR: err`);
    }
  }

  render() {
    //const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <h1 className="display-4 text-center">Create a Resource </h1>

            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="card">
                    <div class="card-header bg-primary text-white">
                      <i class="fa fa-pencil"></i> Share a great resource with
                      our community
                    </div>
                    <div class="card-body">
                      <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                          <label htmlFor="title">Title</label>

                          <input
                            type="text"
                            class="form-control"
                            name="title"
                            aria-describedby="emailHelp"
                            placeholder="Resource title"
                            value={this.state.title}
                            onChange={this.onChange}
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label htmlFor="description">Description</label>
                          <textarea
                            type="text"
                            class="form-control"
                            name="description"
                            aria-describedby="emailHelp"
                            placeholder="brief description"
                            maxLength="280"
                            value={this.state.description}
                            onChange={this.onChange}
                            required
                          ></textarea>
                        </div>

                        <div class="form-group">
                          <label htmlFor="URL"> Resource URL </label>

                          <input
                            type="text"
                            class="form-control"
                            name="URL"
                            aria-describedby="emailHelp"
                            placeholder="Paste URL"
                            value={this.state.URL}
                            onChange={this.onChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="text">
                            Upload an image{" "}
                            <span className="small">
                              (Optional but recommended)
                            </span>
                          </label>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text"></span>
                            </div>
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="inputGroupFile01"
                                onChange={this.fileSelectedHandler}
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="inputGroupFile01"
                              >
                                {this.state.imageName}
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="mx-auto">
                          <button
                            type="submit"
                            class="btn btn-primary text-right"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default AddResource;
