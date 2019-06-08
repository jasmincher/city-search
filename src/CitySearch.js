import React from 'react';

class CitySearch extends React.Component {

    render() {
        let elements = [];
        elements = this.props.zips.map((e, index) => {
            return (
                <div>
                    <label key={index}>{e}</label>
                </div>
            )
        });

        return (
            <div className="results">
                <h3>Zip Codes</h3>
                {elements}
            </div>
        );
    }
}

export default CitySearch;



