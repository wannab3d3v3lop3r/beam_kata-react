import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class MembershipDetails extends Component {

    render() {
        const { member } = this.props;
        return (
            member ? 
                <div className="membership-details">
                    <h2 className="membership-address-title beam-title">Shipping Address</h2>
                    <p className="membership-address beam-text"><span className="beam-label">Address: </span>{member.shipping_address}</p>
                    <p className="membership-city beam-text"><span className="beam-label">City: </span>{member.shipping_city}</p>
                    <p className="membership-state beam-text"><span className="beam-label">State: </span>{member.shipping_state}</p>
                    <p className="membership-zip beam-text"><span className="beam-label">Zip Code: </span>{member.shipping_zip_code}</p>
                    <Link to="/edit-shipping">
                        <button type="button" className="edit-btn">Edit</button>
                    </Link>
                </div>  
             : ''
        )
    }
}

export default MembershipDetails