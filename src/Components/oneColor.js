import React, { Component } from 'react';
class OneColor extends Component {
    state = {  } 
    render() { 
        return (
            <div className='oneColor'  style={{backgroundColor: this.props.color.hex}}>
                {/* <div className="colorSquare" style={{backgroundColor: this.props.color.hex}}></div> */}
                <span className='hexCode'>
                    hex code:{this.props.color.hex}; RGB: {this.props.color.r},{this.props.color.g},{this.props.color.b}  
                </span>
                {/* <div className="colorSquare" style={{backgroundColor: this.props.color.hex}}></div> */}
                {this.props.color.removable? <button onClick={()=>this.props.delete(this.props.color.hex)}
                style={{backgroundColor: this.props.color.hex}} className='oneColor-Button'>x
                </button> : null}
            </div>
        );
    }
}
 
export default OneColor;