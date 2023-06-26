pragma solidity ^0.8.0;

contract DoctorRegistration {
    struct Doctor {
        string name;
        string qualification;
        string contactNumber;
        string email;
        string specialization;
        address doctorAddress;
        bool isRegistered;
    }

    mapping(address => Doctor) public doctors;

    event DoctorRegistered(
        address doctorAddress,
        string name,
        string qualification,
        string contactNumber,
        string email,
        string specialization
    );

    function registerDoctor(
        string memory _name,
        string memory _qualification,
        string memory _contactNumber,
        string memory _email,
        string memory _specialization
    ) external {
        require(!doctors[msg.sender].isRegistered, "Doctor is already registered");

        doctors[msg.sender] = Doctor(
            _name,
            _qualification,
            _contactNumber,
            _email,
            _specialization,
            msg.sender,
            true
        );

        emit DoctorRegistered(
            msg.sender,
            _name,
            _qualification,
            _contactNumber,
            _email,
            _specialization
        );
    }
}
