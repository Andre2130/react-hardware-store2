import React, { Component } from 'react';

class EditSaleItem extends Component {
    render() {
        return (
            <div>
                 <span><button onClick={this.props.toggleEditSaleItem}>{
                   this.props.editSaleItem ? "Hide" : "Edit Sale Item"}
                   </button></span>
               <div>
                {this.props.editSaleItem ? <input type="text" 
                placeholder={this.props.itemCurrentlyOnSale} 
                onChange={this.props.handleItemCurrentlyOnSaleChange} 
                /> 
                : null}
               </div>
            </div>
        );
    }
}

export default EditSaleItem;