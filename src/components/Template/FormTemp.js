import React, { Component } from 'react';

class FormTemp extends Component{
  render(){
    var row = [];
    for(var i = 0; i < this.props.ncols.length ; i++){
      row.push(
        <div key={i} className={this.props.ncols[i]}>
          <FieldGroup
            {...this.props.proprieties[i]}
          />
        </div>
      );
    }
    return (
      <Row>
        {row}
      </Row>
    );
  }
}

export default FormTemp;
