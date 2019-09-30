import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import MembershipDetails from './components/MembershipDetails'
import BrushDetails from './components/BrushDetails'
import EditForm from './components/EditForm'
import beam_logo from './assets/image/beam_logo.svg'
import './App.css'

export class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        correctUser: {},
        preferences: {}
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = () => {
    let membership = fetch('https://member-data.beam.dental/searchResults.json');
    let brushPreference = fetch('https://member-data.beam.dental/memberPreferences.json');

    Promise.all([membership, brushPreference])
        .then(values => {
          console.log(values)
          return Promise.all(values.map(value => value.json()))
        })
        .then(finalVals => {
            this.storeCorrectMemberData(finalVals[0])
            this.storePreferenceData(finalVals[1])
        })  
        .catch(err => {
            console.log(err);
        })
  }

  storeCorrectMemberData = data =>{
    this.setState({correctUser: this.findCorrectUser(data)})
    console.log(this.state.correctUser)
  }

  storePreferenceData = data => {
    this.setState({preferences: this.findBrushPreference(data, this.state.correctUser)})
    console.log(this.state.preferences)
  }

  findCorrectUser(data){
      const latest = data.sort((a,b) => b.effective_date - a.effective_date).find(item => item.primary_insured_id === null && item.terminated_at === null)
      return latest;
  }

  findBrushPreference(preferences, userData){
      return preferences.find(preference => preference.member_id === userData.id)
  }

  updateShippingAddress = updatedAddress => {
    let currentAddress = this.state.correctUser;
    currentAddress.shipping_address = updatedAddress.address;
    currentAddress.shipping_city = updatedAddress.city;
    currentAddress.shipping_state = updatedAddress.state;
    currentAddress.shipping_zip_code = updatedAddress.zipcode;

    this.setState({correctUser: currentAddress})
  }

  render() {

    const {correctUser, preferences} = this.state;

    return (
      <div className="app">
        <header className="header-container beam-brush-blue">
          <Link to="/">
            <img className="logo" src={beam_logo} alt="beam logo"/>
          </Link>
        </header>
        <div className="membership-container">
          <h1 className="membership-title beam-title">Membership Details</h1>
          <p className="membership-name beam-text"><span className="beam-label">Name:</span> {correctUser.name}</p>
          <Route
            path="/" exact
            render={() => <MembershipDetails member={correctUser}/>}
          />
          <Route 
            path="/edit-shipping"
            render={() => <EditForm member={correctUser} updateShippingAddress={updateShippingAddress => this.updateShippingAddress(updateShippingAddress)}/>}
          />
          <BrushDetails brushPreference={preferences}/>
        </div>
        <footer></footer>
      </div>
    )
  }
}

export default App
