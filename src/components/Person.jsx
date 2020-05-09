import React from 'react';

function Person(props) {
    const { surname, firstname, job, salary, date, id } = props;
    return (
        <div>
            <p> {surname} </p>
            <p> {firstname} </p>
            <p> {job} </p>
            <p> {salary} </p>
            <p> {date} </p>
            <p> {id} </p>
        </div>
    )
}

export default Person;
