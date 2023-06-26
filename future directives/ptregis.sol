pragma solidity ^0.8.0;

contract PatientRegistration {
    struct Patient {
        string name;
        uint age;
        string gender;
        bool isRegistered;
    }

    mapping(address => Patient) public patients;

    event PatientRegistered(address patientAddress, string name, uint age, string gender);

    function registerPatient(string memory _name, uint _age, string memory _gender) external {
        require(!patients[msg.sender].isRegistered, "Patient is already registered");

        patients[msg.sender] = Patient(_name, _age, _gender, true);

        emit PatientRegistered(msg.sender, _name, _age, _gender);
    }
}
pragma solidity ^0.8.0;

contract PatientRegistration {
    struct Patient {
        string name;
        uint age;
        string gender;
        bool isRegistered;
    }

    mapping(address => Patient) public patients;

    event PatientRegistered(address patientAddress, string name, uint age, string gender);

    function registerPatient(string memory _name, uint _age, string memory _gender) external {
        require(!patients[msg.sender].isRegistered, "Patient is already registered");

        patients[msg.sender] = Patient(_name, _age, _gender, true);

        emit PatientRegistered(msg.sender, _name, _age, _gender);
    }
}
