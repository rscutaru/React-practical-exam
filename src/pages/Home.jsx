import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {addPerson} from '../redux/actions/person';
import Layout from '../components/Layout';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            firstname: '',
            job: '',
            salary: '',
            date: ''
        };
    }

    updateSurname(event) {
        this.setState({ surname: event.target.value });
    }

    updateFirstName(event) {
        this.setState({ firstname: event.target.value });
    }

    updateJob(event) {
        this.setState({ job: event.target.value });
    }

    updateSalary(event) {
        this.setState({ salary: event.target.value });
    }

    updateDate(event) {
        this.setState({ date: event.target.value });
    } 

    render() {
        const{ surname, firstname, job, salary, date} =this.state;

        return (
            <Layout>
            <div>
                <Link to='/people' />
            <form
                className="user-add-form"
                onSubmit={(event) => {
                    event.preventDefault();
                    this.props.addPerson({
                         
                            surname, 
                            firstname, 
                            job, 
                            salary, 
                            date
                            }
                        );
                    this.setState({
                        surname: '',
                        firstname: '',
                        job: '',
                        salary: '',
                        date: ''
                    });
                }}
            >
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="surname">Nume:</label>
                <input
                    type="text"
                    name="surname"
                    onChange={(event) => this.updateSurname(event)}
                    // onBlur={(event) => this.validateSurname(event)}
                />
                <label htmlFor="firstname">Prenume:</label>
                <input
                    type="text"
                    name="firstname"
                    onChange={(event) => this.updateFirstName(event)}
                    // onBlur={(event) => this.validateFirstName(event)}
                />
                <label htmlFor="job">Meserie:</label>
                <input
                    type="text"
                    name="job"
                    onChange={(event) => this.updateJob(event)}
                    // onBlur={(event) => this.validateJob(event)}
                />

                <label htmlFor="salary">Salary:</label>
                <input
                    type="text"
                    name="salary"
                    onChange={(event) => this.updateSalary(event)}
                // onBlur={(event)=>this.validateSalary(event)}
                />

                <label htmlFor="date">Data angajarii:</label>
                <input
                    type="date"
                    name="date"
                    onChange={(event) => this.updateDate(event)}
                />
                <input className="input-data"
                    type="submit"
                    value="Introdu utilizatorul" />
            </form>
            <Link to='/people'><button className = "btn btn-outline-dark">Catre lista</button></Link>
            </div>
            </Layout>   
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        addPerson: (payload)=>dispatch(addPerson(payload))
    };
}

export default connect(null, mapDispatchToProps)(Home);
