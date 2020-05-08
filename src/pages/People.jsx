import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import { connect } from 'react-redux';


function People(props) {

    return (
        <div>
            {
                props.people.length
                    ? props.people.map(person => {
                        return (
                            <div>
                                <p>{person.surname}</p>
                                <p>{person.firstname}</p>
                                <p>{person.job}</p>
                                <p>{person.salary}</p>
                                <p>{person.date}</p>
                            </div>
                        )

                    })
                    : <div>
                        <p>Nu sunt persoane adaugate!</p>
                    </div>
            }

            <Link to='/'>
                <button>Catre adaugare utilizatori</button>
            </Link>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        people: state.people
    }
}

export default connect(mapStateToProps)(People);
