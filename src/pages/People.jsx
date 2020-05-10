import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Person from '../components/Person';
import Layout from '../components/Layout';
import SidebarList from '../components/SidebarList';

function People(props) {

    return (
        <Layout>
            <div>
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
                <SidebarList />
                <Link to='/'>
                    <button>Catre adaugare utilizatori</button>
                </Link>
            </div>
        </Layout>
    );
}


function mapStateToProps(state) {
    const filters = state.filter.filters;
    const people = state.people.people;
    return {
        filteredPeople: people.filter(person => applyFilters(person, filters))
    }
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

export default connect(mapStateToProps)(People);
