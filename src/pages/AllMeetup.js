import React from 'react'
import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList'

function AllMeetup() {
    const [isloading, setIsLoading] = useState(true)
    const [loadedMeetups, setLoadedMeetup] = useState([]);
    useEffect(() => {
        setIsLoading(true)
    fetch(
        'https://react-get-start-default-rtdb.firebaseio.com/meetups.json'
    )
        .then((res) => {
        return res.json();
    }).then((data) => {
        const meetups = [];
        for (const key in data) {
            const meetup = {
                id: key,
                ...data[key]
            };
            meetups.push(meetup);
        }
        setIsLoading(false)
        setLoadedMeetup(meetups)
    });
    
}, [])
    if (isloading) {
        return <section>
            <p>
                Loading...
            </p>
        </section>
    }
        
    return (
        <section>
            <h1> All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    )
}

export default AllMeetup
