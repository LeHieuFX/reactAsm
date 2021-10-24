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
                <div className="card" cursor="pointer" onClick={() => this.onStaffSelect(staff)}>
                    <div class="row g-0 mt-3">

                        <div class="col-md-2">
                            <img src={staff.image} className="card-img-top" alt={staff.name} style={{width: "100%"}} />
                            <h5 className="card-title text-center mt-2">{staff.name}</h5>
                            <p className="card-text"> Vai trò : {staff.name}</p>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <p className="card-text">Mã nhân viên : FUNIX-00-{staff.id}</p>
                                <p className="card-text">Ngày sinh : {staff.doB}</p>
                                <p className="card-text">Ngày vào công ty : {staff.startDate}</p>
                                <p className="card-text"> Phòng ban : {staff.id}</p>
                                <p className="card-text"> Số ngày nghỉ còn lại : {staff.annualLeave}</p>
                                <p className="card-text"> Số ngày làm thêm : {staff.overTime}</p>
                                
                            </div>
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