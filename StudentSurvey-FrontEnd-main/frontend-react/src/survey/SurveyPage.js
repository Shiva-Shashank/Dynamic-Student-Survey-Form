
import './SurveyPageCSS.css';

import React, { useState } from 'react';
import axios from 'axios';

const SurveyPage = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfSurvey, setDateOfSurvey] = useState('');
    const [likedMost, setLikedMost] = useState([]);
    const [interestedBy, setInterestedBy] = useState('');
    const [likelihood, setLikelihood] = useState('');
    const [comments, setComments] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleStreetAddressChange = (e) => {
        setStreetAddress(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    const handleZipcodeChange = (e) => {
        setZipcode(e.target.value);
    };

    const handleTelephoneNumberChange = (e) => {
        setTelephoneNumber(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDateOfSurveyChange = (e) => {
        setDateOfSurvey(e.target.value);
    };

    const handleLikelihoodChange = (e) => {
        console.log(e.target.value);
        setLikelihood(e.target.value);
    };

    const handleCommentsChange = (e) => {
        setComments(e.target.value);
    };

    const handleInterestedByChange = (value) => {
        setInterestedBy(value);
    };

    const likedMostOptions = [
        { id: "likedStudents", value: 'Students' },
        { id: "likedLocation", value: 'Location' },
        { id: "likedCampus", value: 'Campus' },
        { id: "likedAtmosphere", value: 'Atmosphere' },
        { id: "likedDormRooms", value: 'Dorm Rooms' },
        { id: "likedSports", value: 'Sports' },
    ];


    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setLikedMost([...likedMost, value]);
        } else {
            setLikedMost(likedMost.filter((item) => item !== value));
        }
    };

    const handleSubmit = async (e) => {
        try {
            const formData = new FormData();
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('streetAddress', streetAddress);
            formData.append('city', city);
            formData.append('state', state);
            formData.append('zip', zipcode);
            formData.append('telephone', telephoneNumber);
            formData.append('email', email);
            formData.append('dateOfSurvey', dateOfSurvey);
            formData.append('likedMost', likedMost.join(','));
            formData.append('interestedBy', interestedBy);
            formData.append('likelihood', likelihood);
            formData.append('comments', comments);



            const response = await axios.post('http://localhost:8081/api/uploadData', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response && response.data) {
                alert("The survey is created successfully");
                handleReset();
            }
        } catch (error) {
            alert(error)
        }

    };

    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setStreetAddress('');
        setCity('');
        setState('');
        setZipcode('');
        setTelephoneNumber('');
        setEmail('');
        setDateOfSurvey('');
        setLikedMost([]);
        setInterestedBy('');
        setLikelihood('');
        setComments('');
    }

    return (
        <>
            <div className="survey-page d-flex">
                <div className="container">
                    <div className="container info-box" style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>
                        <h1>Student Survey</h1>
                    </div>
                    <div className="container survey-page-body">
                        <div id="surveyForm" autoComplete="on" style={{ marginBottom: '50px', marginTop: '25px', padding: '10px' }}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label><span className="required">*</span>
                                <input autoFocus type="text" className="form-control" name="firstName" id="firstName" placeholder="Tony"
                                    required
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label><span className="required">*</span>
                                <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Stark"
                                    required
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetAddress">Street Address</label><span className="required">*</span>
                                <input type="text" className="form-control" name="streetAddress" id="streetAddress" placeholder="Apt Number,Street"
                                    required
                                    value={streetAddress}
                                    onChange={handleStreetAddressChange}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label><span className="required">*</span>
                                <input type="text" className="form-control" name="city" id="city" placeholder="Fairfax"
                                    required
                                    value={city}
                                    onChange={handleCityChange}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label><span className="required">*</span>
                                <input type="text" className="form-control" name="state" id="state" placeholder="Virginia"
                                    required
                                    value={state}
                                    onChange={handleStateChange}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="zip">ZIP</label><span className="required">*</span>
                                <input type="text" className="form-control" name="zip" id="zip" placeholder="22030"
                                    required
                                    value={zipcode}
                                    onChange={handleZipcodeChange}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="telephone">Telephone Number</label><span className="required">*</span>
                                <input type="tel" className="form-control" name="telephone" id="telephone" placeholder="1234567890"
                                    required
                                    value={telephoneNumber}
                                    onChange={handleTelephoneNumberChange}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label><span className="required">*</span>
                                <input type="email" className="form-control" name="email" id="email" placeholder="username@mail.com"
                                    required
                                    value={email}
                                    onChange={handleEmailChange}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dateOfSurvey">Date of Survey</label><span className="required">*</span>
                                <input type="date" className="form-control" name="dateOfSurvey" id="dateOfSurvey" placeholder="09/09/2023"
                                    required
                                    value={dateOfSurvey}
                                    onChange={handleDateOfSurveyChange}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>What did you like most about the campus?</label><span className="required">*</span>
                                {likedMostOptions.map((option) => (
                                    <div key={option.id} className="form-check" >
                                        <input
                                            style={{ cursor: 'pointer' }}
                                            type="checkbox"
                                            value={option.value}
                                            onChange={handleCheckboxChange}
                                            checked={likedMost.includes(option.value)}
                                        />
                                        {option.value}
                                    </div>
                                ))}
                            </div>
                            <div className="form-group">
                                <label>How did you become interested in the university?</label>
                                <span className="required">*</span>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interestedBy"
                                        value="Friends"
                                        id="interestFriends"
                                        checked={interestedBy === 'Friends'}
                                        onChange={() => handleInterestedByChange('Friends')}
                                    />
                                    <label className="form-check-label" role="button" htmlFor="interestFriends">
                                        Friends
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interestedBy"
                                        value="Television"
                                        id="interestTV"
                                        checked={interestedBy === 'Television'}
                                        onChange={() => handleInterestedByChange('Television')}
                                    />
                                    <label className="form-check-label" role="button" htmlFor="interestTV">
                                        Television
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interestedBy"
                                        value="Internet"
                                        id="interestInternet"
                                        checked={interestedBy === 'Internet'}
                                        onChange={() => handleInterestedByChange('Internet')}
                                    />
                                    <label className="form-check-label" role="button" htmlFor="interestInternet">
                                        Internet
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interestedBy"
                                        value="Other"
                                        id="interestOther"
                                        checked={interestedBy === 'Other'}
                                        onChange={() => handleInterestedByChange('Other')}
                                    />
                                    <label className="form-check-label" role="button" htmlFor="interestOther">
                                        Other
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="likelihood">Likelihood of Recommending this School</label><span
                                    className="required">*</span>
                                <select className="form-control" name="likelihood" id="likelihood" required
                                    value={likelihood}
                                    onChange={handleLikelihoodChange}
                                >
                                    <option></option>
                                    <option>Very Likely</option>
                                    <option>Likely</option>
                                    <option>Unlikely</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="comments">Additional Comments</label>
                                <textarea className="form-control" name="comments" id="comments" rows="3"
                                    placeholder="Add comments"
                                    value={comments}
                                    onChange={handleCommentsChange}
                                ></textarea>
                            </div>
                            <button type="button" onClick={handleSubmit} className="btn btn-primary survey-button">Submit</button>
                            <button type="reset" onClick={handleReset} className="btn survey-button btn-secondary">Reset</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default SurveyPage;