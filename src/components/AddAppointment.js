import React, { Component } from 'react';
import InputMoment from 'input-moment';
import moment from 'moment';

class AddAppointment extends Component {

    state = {
        dateTime: moment().add(1, 'hour'),
        durration: 15
    };

    onDateChange = (newDateTime) => {
        this.setState({ newDateTime });
    }

    onDurrationChange = (e) => {
        this.setState({ durration: e.target.value });
    }

    onAddAppointment = () => {
        let endTime = moment(this.state.dateTime).add(this.state.durration, 'minutes');
        
        this.props.onAddAppointment(this.state.dateTime.unix(), endTime.unix());
    }

    render() {
        let displayTime = this.state.dateTime.format('MMMM Do, YYYY (hh:mm a)');
        
        return (
            <div className="modal fade" id="add-appointment-model" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Event</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <InputMoment
                                            moment={this.state.dateTime}
                                            minStep={1}
                                            hourStep={1}
                                            onChange={this.onDateChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Proposed Time</label>
                                            <input readOnly type="text" className="form-control" value={displayTime}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Duration</label>
                                            <select onChange={this.onDurrationChange} className="form-control" value={this.state.durration}>
                                                <option value="15">15 min</option>
                                                <option value="30">30 min</option>
                                                <option value="45">45 min</option>
                                                <option value="60">60 min</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Room</label>
                                            <select onChange={this.onRoom} className="form-control" value={this.state.room}>
                                                <option value="A">Room A</option>
                                                <option value="B">Room B</option>
                                                <option value="C">Room C</option>
                                                <option value="D">Room D</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Training Name</label>
                                            <select onChange={this.onTraining} className="form-control" value={this.state.training}>
                                                <option value="Training1">Training 1</option>
                                                <option value="Training2">Training 2</option>
                                                <option value="Training3">Training 3</option>
                                                <option value="Training4">Training 4</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Department Name</label>
                                            <select onChange={this.onDept} className="form-control" value={this.state.dept}>
                                                <option value="dept1">Department 1</option>
                                                <option value="dept2">Department 2</option>
                                                <option value="dept3">Department 3</option>
                                                <option value="dept4">Department 4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button onClick={this.onAddAppointment} type="button" className="btn btn-primary" data-dismiss="modal">Add Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAppointment;