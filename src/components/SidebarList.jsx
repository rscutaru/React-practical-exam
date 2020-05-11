import React from 'react';
import { setFilter } from '../redux/actions/filter';
import { connect } from 'react-redux';
import { setSort } from '../redux/actions/sort';

function SidebarList(props) {
    return (
        <div>
            <div className="col-12 col-md-3">
                <p>Sorteaza dupa nume si salariu:</p>
                <div className="sort-container">
                    <div className="sort">
                        <label>
                            <input
                                type="radio"
                                name="sortBy"
                                checked={props.sortBy==="surname"}
                                onChange={() => props.setSort({
                                    sortBy: "surname"
                                })}
                            />
                            Sorteaza dupa nume
                        </label>
                    </div>

                    <div className="sort">
                        <label>
                            <input
                                type="radio"
                                name="sortBy"
                                checked={props.sortBy==="salary"}
                                onChange={() => props.setSort({
                                    sortBy: "salary"
                                })}
                            />
                            Sorteaza dupa salariu
                        </label>
                    </div>
                </div>
            </div>


            <div className="col-12 col-md-3">
                <p>Filtreaza dupa salariu:</p>
                <div className="filters-container">
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

            </div >
        </div>
    )
}
function mapStateToProps (state){
    return {
        sortBy: state.sort.sortBy
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setFilter: (payload) => dispatch(setFilter(payload)),
        setSort: (payload) => dispatch(setSort(payload))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SidebarList);
