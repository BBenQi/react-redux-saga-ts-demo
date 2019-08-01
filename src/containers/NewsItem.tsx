import React from 'react'
import { connect } from 'react-redux'

const imgStyle = {
    hight: 'auto',
    width: '80%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
};

const articleStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
}


interface INewsItemProps {
    article: any;
}

export class NewsItem extends React.PureComponent<INewsItemProps>{

    render() {
        return (
            this.props.article ?
                <article style={articleStyle} >
                    <div>
                        <h1>{this.props.article.title}</h1>
                        <img style={imgStyle} src={this.props.article.urlToImage} alt="" />
                        <h4>{this.props.article.description}</h4>
                        <a href={this.props.article.url} target="_blank">READ MORE</a>
                    </div>
                </article> :
                null
        )
    }
}

const mapStateToProps = (state: any) => ({
    article: state.news
})

export default connect(mapStateToProps,null)(NewsItem)