import React from 'react';
import { setFilter } from '../redux/actions/filter';
import { connect } from 'react-redux';
import { setSort } from '../redux/actions/sort';

function SidebarList(props) {
    return (
        <div className="form-group">
            <div className="form-group col-6 col-md-3 ml-4">
                <p>Sortare dupa:</p>
                <div className="form-check">
                    <div className="sort ">
                        <label className="form-check-label">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="sortBy"
                                checked={props.sortBy==="surname"}
                                onChange={() => props.setSort({
                                    sortBy: "surname"
                                })}
                            />
                            Nume
                        </label>
                    </div>

                    <div className="sort">
                        <label className="form-check-label">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="sortBy"
                                checked={props.sortBy==="salary"}
                                onChange={() => props.setSort({
                                    sortBy: "salary"
                                })}
                            />
                            Salariu
                        </label>
                    </div>
                </div>
            </div>


            <div className="form-group col-6 col-md-3 ml-5">
                <p>Filtreaza dupa salariu:</p>
                <div className="filters-container">
                    <div className="filter">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter1"
                            checked={props.filters.some((e)=>e.filterName ==="filter1")}
                            onChange={() => props.setFilter({
                                filterName: "filter1",
                                min: 0,
                                max: 2500
                            })}
                        />
                        <label htmlFor="filter1" className="form-check-label">&lt; 2500 LEI</label>
                    </div>

                    <div className="filter" >
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter2"
                            checked={props.filters.some((e)=>e.filterName==="filter2")}
                            onChange={() => props.setFilter({
                                filterName: "filter2",
                                min: 2500,
                                max: 4000
                            })}
                        />
                        <label htmlFor="filter2" className="form-check-label">2500 - 4000 LEI</label>
                    </div>

                    <div className="filter" >
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter3"
                            checked={props.filters.some((e)=>e.filterName==="filter3")}
                            onChange={() => props.setFilter({
                                filterName: "filter3",
                                min: 4000,
                                max: Infinity
                            })}
                        />
                        <label htmlFor="filter3" className="form-check-label">&gt; 4000 LEI</label>
                    </div>

                </div>

            </div >
        </div>
    )
}
function mapStateToProps (state){
    return {
        sortBy: state.sort.sortBy,
        filters: state.filter.filters
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setFilter: (payload) => dispatch(setFilter(payload)),
        setSort: (payload) => dispatch(setSort(payload))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SidebarList);
