import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPerson } from '../redux/actions/person';
import Layout from '../components/Layout';
import './Home.css';

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
        const { surname, firstname, job, salary, date } = this.state;

        return (
            <Layout>
                <div className="form-group form-size">
                    <Link to='/people' />
                    <form
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

                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="firstname" className="col-form-label">Prenume:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="firstname"
                                        value={this.state.firstname}
                                        onChange={(event) => this.updateFirstName(event)}
                                    // onBlur={(event) => this.validateFirstName(event)}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="surname" className="col-form-label">Nume:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="surname"
                                        value={this.state.surname}
                                        onChange={(event) => this.updateSurname(event)}
                                    // onBlur={(event) => this.validateSurname(event)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="job">Meserie:</label>
                            <input
                                className="form-control"
                                type="text"
                                name="job"
                                value={this.state.job}
                                onChange={(event) => this.updateJob(event)}
                            // onBlur={(event) => this.validateJob(event)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="salary" className="col-form-label">Salary:</label>
                            <input
                                className="form-control"
                                type="text"
                                name="salary"
                                value={this.state.salary}
                                onChange={(event) => this.updateSalary(event)}
                            // onBlur={(event)=>this.validateSalary(event)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date" className="col-form-label" >Data angajarii:</label>
                            <input
                                className="form-control"
                                type="date"
                                name="date"
                                value={this.state.date}
                                onChange={(event) => this.updateDate(event)}
                            />
                        </div>
                        <div className="form-group">
                            <input className="btn btn-outline-dark "
                                type="submit"
                                value="Introdu utilizatorul" />
                        </div>
                    </form>
                    <br />
                    <br />

                    <Link to='/people'><button className="btn btn-outline-dark">Catre lista</button></Link>
                </div>
            </Layout>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPerson: (payload) => dispatch(addPerson(payload))
    };
}

export default connect(null, mapDispatchToProps)(Home);
