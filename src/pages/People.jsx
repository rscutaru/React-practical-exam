import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Person from '../components/Person';


function People(props) {
    console.log(props.people);
    return (
        <div>
            {
                
                props.people.length
                    ? props.people.map((person, id) => {
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
