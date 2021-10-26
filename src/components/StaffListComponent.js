import { Component } from 'react';
import StaffDetail from './StaffDetailComponent';

class StaffList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            selectedStaff : null,
        };
    }

    onStaffSelect(staff) {
        this.setState({
            selectedStaff: staff
        })
    }

    render() {
        
        const staffList = this.props.staffs.map(staff => {
            return(
                <div key={staff.id} className="col-12 col-md-2 text-center mt-2">
                    <div className="card" onClick={() => this.onStaffSelect(staff)} style={{cursor:"pointer"}}>
                        <img className="card-img-top" src={staff.image} style={{width:"100%"}} alt={staff.name} />
                        <div className="card-body">
                            <h5 className="card-title">{staff.name}</h5>
                            
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div className="container">

                <div className="row mt-1" style={{color:'blue'}}>
                    <h5>Click chọn, xem thông tin nhân viên </h5>
                </div>
                
                <StaffDetail staff={this.state.selectedStaff}/>

                <div className="row">
                    {staffList}
                </div>
                
            </div>
        )
    
    }

}

export default StaffList;