import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const jobDetails = useLoaderData();
    return (
        <div className='job-details'>
            <p><b>Job Title:</b> {jobDetails.title}</p>
            <p><b>Salary:</b> {jobDetails.salary}</p>
            <p><b>Job Location: </b>{jobDetails.location}</p>
            <p>J<b>ob Description:</b> {jobDetails.description}</p>
            <button>Apply Now</button>
        </div>
    )
}

export default JobDetails

export const jobDetailsLoader = async ({params}) => {
    const {id} = params;
    
    try {
        const res = await fetch('http://localhost:5000/jobs/' + id);
        
        if (!res.ok) {
            throw new Error(`Job with id ${id} not found`);
        }
        
        const data = await res.json();
        
        if (!data) {
            throw new Error('No data received');
        }
        
        return data;
        
    } catch (error) {
        throw new Error(error.message);
        // Hoặc có thể redirect đến trang 404
        // throw redirect('/not-found');
    }
}