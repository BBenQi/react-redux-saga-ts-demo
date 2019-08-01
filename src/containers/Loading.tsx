import React from 'react'
import { connect } from 'react-redux'

interface ILoadingStateProps {
    loading: any
}

export class Loading extends React.PureComponent<ILoadingStateProps>{
    render() {
        return (
            this.props.loading ?
                <div style={{ textAlign: 'center' }}>
                    <h1>LOADING</h1>
                    <h1>LOADING</h1>
                    <h1>LOADING</h1>
                </div> :
                null
        )
    }
}

const mapStateToProps = (state:any)=>({
    loading: state.loading
})

export default connect(mapStateToProps,null)(Loading)