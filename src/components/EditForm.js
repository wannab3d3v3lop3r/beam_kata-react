import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

export class EditForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        let updatedAddress = {
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode
        }

        this.props.updateShippingAddress(updatedAddress)
        this.props.history.push('/')
    }

    render() {
        const { member } = this.props;
        return (
            <form id="shipping-form" onSubmit={e => this.handleSubmit(e)}>
                    <h2 className="membership-address-title beam-title">Shipping Address</h2>
                    <div className="input-container">
                        <label htmlFor="address" className="beam-label">Address</label>
                        <input 
                            className="shipping-address" 
                            id="address" 
                            type="text" 
                            name="address"
                            placeholder={member.shipping_address}
                            onChange={e => this.setState({address: e.target.value})}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="city" className="beam-label">City</label>
                        <input 
                            className="shipping-city" 
                            id="city" 
                            type="text" 
                            name="city"
                            placeholder={member.shipping_city} 
                            onChange={e => this.setState({city: e.target.value})}
                            required/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="state" className="beam-label">State</label>
                        <input 
                            className="shipping-state" 
                            id="state" 
                            type="text" 
                            name="state"
                            placeholder={member.shipping_state} 
                            onChange={e => this.setState({state: e.target.value})}
                            pattern="[A-za-z]{2}"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="zipcode" className="beam-label">Zip Code</label>
                        <input 
                            className="shipping-zip" 
                            id="zipcode" 
                            type="text" 
                            name="zipcode"
                            placeholder={member.shipping_zip_code} 
                            onChange={e => this.setState({zipcode: e.target.value})}
                            pattern="[0-9]{5}"
                            required
                        />
                    </div>
                    <button type="submit" className="update-btn">Update</button>
            </form>
        )
    }
}

export default withRouter(EditForm)
