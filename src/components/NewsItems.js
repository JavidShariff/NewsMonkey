import React, { Component } from 'react'


export class NewsItems extends Component {
  render() {
    // let {title,description,urlToImage,url}=this.props
    return (
      <div>
        <div className="card col-md-4 my-3 mx-2" style={{width: "18rem"}}>
  <img src={this.props.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}...</h5>
    <p className="card-text">{this.props.description}...</p>
    <a href={this.props.url} target='_blank' className="btn btn-primary btn-dark">Read More</a>
  </div>
</div>
      </div>
      
    )
  }
}

export default NewsItems
