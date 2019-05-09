import React, { Component } from "react";

class searchForm extends Component {
    
    searchText(e){
        e.preventDefault();
        console.log("Submitted");
    };

    render() {


        return (
            <div>
                <form onSubmit={this.searchText} className="well" >
                    <div>
                        <label>Search someting...</label>
                        <input type="text" className="" ref="text" />
                    </div>
                </form>
            </div>
        );
    }
}

export default searchForm;