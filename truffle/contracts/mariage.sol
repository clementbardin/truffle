// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract mariage {
    address public epoux;
    address public epouse;
    date public dateMariage;
    divorce public divorce;

    constructor(address _epoux, address _epouse){
        epoux = _epoux;
        epouse = _epouse;
        dateMariage = block.timestamp;
    }

    function divorcer() external {
        require(msg.sender == epoux || msg.sender == epouse, "Vous n'etes pas autorise.");
        require(marie, "Le mariage n'a pas eu lieu.");

        divorce = true;
    }
    
function getStatus() external view returns (string) {
    if (divorce) {
        return "Divorcé";
    } else {
        return "Marié";
    }
}
}