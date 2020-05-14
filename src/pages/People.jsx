import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Person from '../components/Person';
import Layout from '../components/Layout';
import SidebarList from '../components/SidebarList';

function People(props) {

    return (
        <Layout>
            <div className='row'>
                <div className="col-6">
            <SidebarList />
            </div>
            <div className="col-6">
                {
                    props.filteredPeople.length
                        ? props.filteredPeople.map((person, id) => {
                            return <Person
                                surname={person.surname}
                                firstname={person.firstname}
                                job={person.job}
                                salary={person.salary}
                                date={person.date}
                                key={id}
                            />
                        })
                        : <div>
                            <p>Nu sunt persoane adaugate!</p>
                        </div>
                }
            </div>    
                <Link to='/'>
                    <button className="btn btn-outline-dark ml-5">Catre adaugare utilizatori</button>
                </Link>
            </div>
        </Layout>
    );
}



function applyFilters(person, filters) {
    if(filters.length===0){
        return true;
    }
    for (const filter of filters) {
        if (person.salary >= filter.min && person.salary <= filter.max) {
            return true;
        }
    }
    return false;
}


function mapStateToProps(state) {
    const filters = state.filter.filters;
    const people = state.people.people;
    const filteredPeople = people.filter(person => applyFilters(person, filters));
    if(state.sort.sortBy===''){
        return {
            filteredPeople
        }
    }
    const filteredAndSortedPeople=filteredPeople.sort((person1, person2)=> {
        if(state.sort.sortBy==='surname'){
            return person1.surname-person2.surname;
        }
        if(state.sort.sortBy==="salary"){
            return person1.salary-person2.salary;
        }
    })
    return {
        filteredPeople: filteredAndSortedPeople
    }
}

export default connect(mapStateToProps)(People);
