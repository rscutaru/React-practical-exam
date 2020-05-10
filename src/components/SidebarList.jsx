import React from 'react';
import { setFilter } from '../redux/actions/filter';
import {connect} from 'react-redux';

function SidebarList(props) {
    return (
        <div className="col-12 col-md-3">
            <p>Filtreaza dupa salariu:</p>
            <div>
                <div className="filter">
                    <input
                        type="checkbox"
                        name="filter1"
                        onChange={() => props.setFilter({
                            filterName: "filter1",
                            min: 0,
                            max: 2500
                        })}
                    />
                    <label htmlFor="filter1">&lt; 2500 LEI</label>
                </div>

                <div className="filter" >
                    <input
                        type="checkbox"
                        name="filter2"
                        onChange={() => props.setFilter({
                            filterName: "filter2",
                            min: 2500,
                            max: 4000
                        })}
                    />
                    <label htmlFor="filter2">2500 - 4000 LEI</label>
                </div>

                <div className="filter" >
                    <input
                        type="checkbox"
                        name="filter3"
                        onChange={() => props.setFilter({
                            filterName: "filter3",
                            min: 4000,
                            max: Infinity
                        })}
                    />
                    <label htmlFor="filter3">&gt; 4000 LEI</label>
                </div>

            </div>

        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        setFilter: (payload) => dispatch(setFilter(payload))
    };
}
export default connect(null, mapDispatchToProps)(SidebarList);
