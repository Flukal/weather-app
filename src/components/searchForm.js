import React, { Component } from "react";

class searchForm extends Component {
    
    searchText(e){
        e.preventDefault();
        var text = this.title;
        console.log();
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