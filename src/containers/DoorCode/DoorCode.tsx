import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../app/store.ts";
import {addNumber, deleteNumber, submitPassword} from "./DoorCodeSlice.ts";

const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '<', '0', 'E']

const DoorCode = () => {
    const {currentPassword, status} = useSelector((state: RootState) => state.doorCode);
    const dispatch = useDispatch();

    const onButtonClick = (button: string) => {
        if (button === 'E') {
            dispatch(submitPassword());
        } else if (button === '<') {
            dispatch(deleteNumber());
        } else {
            dispatch(addNumber(button));
        }
    }

    let backgroundStatus = 'bg-light';
    let displayStatus: string;

    if (status === 'granted') {
        displayStatus = 'Access granted';
        backgroundStatus = 'bg-success text-white';
    } else if (status === 'denied') {
        displayStatus = 'Access denied';
        backgroundStatus = 'bg-danger text-white';
    } else {
        if (currentPassword.length > 0) {
            displayStatus = '*'.repeat(currentPassword.length);
        } else {
            displayStatus = 'Enter code...';
        }
    }

    return (
        <div className="container mt-5" style={{maxWidth: '300px'}}>
            <div className="card p-3">
                <div className={`mb-3 d-flex align-items-center justify-content-center ${backgroundStatus}`}>
                    {displayStatus}
                </div>
                <div className="row g-2">
                    {buttons.map((btn) => (
                        <div key={btn} className="col-4">
                            <button
                                className='btn btn-light w-100 py-3 fw-bold'
                                onClick={() => onButtonClick(btn)}>
                                {btn}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoorCode;