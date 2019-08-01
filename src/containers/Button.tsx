import React from 'react'
import { connect } from 'react-redux'
import { getNews } from '../actions/index'
import { compose } from 'redux';

interface IButtonProps {
    loadNews: () => any
}

export class Button extends React.PureComponent<IButtonProps>{
    render() {
        return (
            <button onClick={this.props.loadNews}>Press to see news</button>
        )
    }
}

const mapDispatchToProps = {
    loadNews: getNews
};

export default connect(null,mapDispatchToProps)(Button);