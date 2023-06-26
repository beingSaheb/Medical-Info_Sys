pragma solidity ^0.8.0;

contract HealthcareAccessControl {
    address public owner;

    struct Doctor {
        bool isRegistered;
        bool hasAccess;
    }

    mapping(address => Doctor) public doctors;
    mapping(address => bool) public patients;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerDoctor(address _doctorAddress) external onlyOwner {
        require(!doctors[_doctorAddress].isRegistered, "Doctor is already registered");
        doctors[_doctorAddress] = Doctor(true, false);
    }

    function grantAccess(address _patientAddress, address _doctorAddress) external {
        require(patients[_patientAddress], "Patient is not registered");
        require(doctors[_doctorAddress].isRegistered, "Doctor is not registered");
        require(!doctors[_doctorAddress].hasAccess, "Doctor already has access");

        doctors[_doctorAddress].hasAccess = true;
    }

    function revokeAccess(address _doctorAddress) external {
        require(doctors[_doctorAddress].isRegistered, "Doctor is not registered");
        require(doctors[_doctorAddress].hasAccess, "Doctor does not have access");

        doctors[_doctorAddress].hasAccess = false;
    }

    function registerPatient() external {
        require(!patients[msg.sender], "Patient is already registered");
        patients[msg.sender] = true;
    }
}
