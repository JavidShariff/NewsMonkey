import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    catogery : 'general'
  }
  static propTypes = {
    catogery : PropTypes.string,
  }
  articles= []
  constructor(){
    super()
    this.state={
      articles : this.articles,
      loading : false,
      page : 1,
      pagesize : 5
    }
  }
  // https://newsapi.org/v2/everything?q=${this.props.category}&from=2023-12-04&sortBy=publishedAt&apiKey=14a0feff060842fda283083a2b554928&page=${this.state.page}&pagesize=${this.state.pagesize}
  async componentDidMount(){
    console.log("cdn")
    let url =`
https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=22c083fcbab344b19a900754b7903a8a`;
    let data = await fetch(url);
    let pdata = await data.json();
    console.log(pdata);
    this.setState({articles : pdata.articles})

  }
  // https://newsapi.org/v2/everything?q=${this.props.category}&from=2023-12-04&sortBy=publishedAt&apiKey=14a0feff060842fda283083a2b554928&page=${this.state.page}&pagesize=${this.state.pagesize}
  handleNextPage= async()=>{
    this.setState({
      page : this.state.page + 1
    })
    let url =`https://newsapi.org/v2/everything?q=tesla&from=2024-03-02&sortBy=publishedAt&apiKey=14a0feff060842fda283083a2b554928`;
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({articles : pdata.articles})
    console.log('hi')
  }
  handleprevpage= async ()=>{
    this.setState({
      page : this.state.page - 1
    })
    // 14a0feff060842fda283083a2b554928
    // https://newsapi.org/v2/everything?q=${this.props.category}&from=2023-12-04&sortBy=publishedAt&apiKey=&page=14a0feff060842fda283083a2b554928${this.state.page}&pagesize=${this.state.pagesize}
    let url =`https://newsapi.org/v2/everything?q=tesla&from=2024-03-02&sortBy=publishedAt&apiKey=14a0feff060842fda283083a2b554928`;
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({articles : pdata.articles})
    console.log('hi')
    }


  render() {
    // let {catogery}=this.props
    // 14a0feff060842fda283083a2b554928
    return (
      <>
       <div className="container">
        <h1>Top News-NewsMonkey</h1>
         <div className="row">
        {this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                  <NewsItems title={element.title} description={element.description} urlToImage={!element.urlToImage?"https://www.marketscreener.com/images/twitter_MS_fdnoir.png":element.urlToImage} url={element.url}/>
                    </div>
        })}
        </div>
        </div>
        <div className=" container d-flex justify-content-between">
        <button type="button" class="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handleprevpage}>Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNextPage}>Next</button>
        </div>

      </>
    )
}
}

export default News
