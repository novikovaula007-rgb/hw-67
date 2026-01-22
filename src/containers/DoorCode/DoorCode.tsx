const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '<', '0', 'E']

const DoorCode = () => {
    return (
        <div className="container mt-5" style={{maxWidth: '300px'}}>
            <div className="card p-3">
                <div style={{height: '80px', fontSize: '30px', textAlign: 'center'}}>
                    Enter the code...
                </div>
                <div className="row g-2">
                    {buttons.map((btn) => (
                        <div key={btn} className="col-4">
                            <button className={`btn btn btn-light w-100 py-3 fw-bold `}>
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