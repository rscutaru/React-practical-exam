import React from 'react';

class SidebarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [
                {
                    name: "filter1",
                    checked: false
                },
                {
                    name: "filter2",
                    checked: false
                },
                {
                    name: "filter3",
                    checked: false
                }
            ]
        }
    }

    checkValue(name){
        selectedFilter=this.state.filters.find(filter => filter.name === name)
        return selectedFilter.checked;
    }

    filterSalary(event, min, max){
        if (event.target.checked) {
            this.props.filterSalaryCallback(lowerLimit, upperLimit);
        } else {
            this.props.filterSalaryCallback(0, Infinity);
        }
        this.handleCheckboxes(event.target.name);
    }

    render(){
        return(
            <div className="col-12 col-md-3">
                <p>Filtreaza dupa pret:</p>
                <div>
                    <div className="filter">
                        <input
                         type="checkbox"
                         name="filter1"
                         checked={this.checkValue('filter1')}
                         onChange={(event) => this.filterSalary(event, 0, 2500)}
                        />
                        <label htmlFor="filter1">&lt; 2500 LEI</label>
                    </div>

                    <div className="filter" >
                        <input
                         type="checkbox"
                         name="filter2"
                         checked={this.checkValue('filter2')}
                         onChange={(event) => this.filterSalary(event, 2500, 4000)}
                        />
                        <label htmlFor="filter2">2500 - 4000 LEI</label>
                    </div>

                    <div className="filter" >
                        <input
                         type="checkbox"
                         name="filter3"
                         checked={this.checkValue('filter3')}
                         onChange={(event) => this.filterSalary(event, 4000, Infinity)}
                        />
                        <label htmlFor="filter2">&gt; 4000 LEI</label>
                    </div>

                </div>

            </div>
        );
    }
}

export default SidebarList;
