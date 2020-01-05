import React, {Component} from "react"

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      ramdomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
      const {memes} = response.data
      console.log(memes[0])
      this.setState({allMemeImgs: memes})
    })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({randomImg: randMemeImg})
  }

  render() {
    return (
      <div>
        <form>
          <input 
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange.bind(this)}
          />

          <input 
            type="text"
            name="bottomText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange.bind(this)}
          />

          <button onClick={this.handleSubmit.bind(this)}>Gen</button>
        </form>
        
        <div className="meme">
          <img align="center" src={this.state.ramdomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator