import './SurveysListPageCSS.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SurveysListPage = (props) => {


    const [surveys, setSurveys] = useState([]);


    const fetchSurveys = async (endPoint) => {
        try {
          const response = await axios.get('http://localhost:8081/api/getData');
          if(response && response.data){
            setSurveys(response.data);
          }
        } catch (error) {
            alert(error)
        }
    }    

    useEffect(()=>{
        fetchSurveys();
    },[]);

    return (
        <>
            <div className="background-image" style={{width:'100%',height:'100vh'}}>
                <div>
                    <div>
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Street Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>ZIP</th>
                                    <th>Telephone</th>
                                    <th>Email</th>
                                    <th>Date of Survey</th>
                                    <th>Liked Most</th>
                                    <th>Interested By</th>
                                    <th>Likelihood</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    surveys && surveys.map((survey) => {
                                        return (
                                            <tr>
                                                <td>{ survey.id}</td>
                                                <td>{ survey.firstName }</td>
                                                <td>{ survey.lastName }</td>
                                                <td>{ survey.streetAddress }</td>
                                                <td>{ survey.city }</td>
                                                <td>{ survey.state }</td>
                                                <td>{ survey.zip }</td>
                                                <td>{ survey.telephone }</td>
                                                <td>{ survey.email }</td>
                                                <td>{ survey.dateOfSurvey }</td>
                                                <td>{ survey.likedMost }</td>
                                                <td>{ survey.interestedBy }</td>
                                                <td>{ survey.likelihood }</td>
                                                <td>{ survey.comments }</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    )
};

export default SurveysListPage;