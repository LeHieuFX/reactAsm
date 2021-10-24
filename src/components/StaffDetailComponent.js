import { Component } from "react";

class StaffDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedStaffDetail: this.props.staffDetail
        }
    }

    renderStaff(staff) {
        if(staff != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <div className="card" cursor="pointer" onClick={() => this.onStaffSelect(staff)}>
                        <img src={staff.image} className="card-img-top" alt={staff.name} style={{width: "100%"}} />
                        <div className="card-body">
                            <h5 className="card-title">{staff.name}</h5>
                            <p className="card-text">{staff.doB}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {

        const staff = this.props.staff; // get data from parent component "StaffList"
        console.log(staff);

        if(staff == null) {
            return <div></div>
        }

        const staffItem = this.renderStaff(staff);

        return(
            <div className="row">
                {staffItem}
            </div>
        )
    
    }
}

export default StaffDetail;