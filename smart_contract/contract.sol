// SPDX-License-Identifier: MIT
pragma solidity ^0.7.4;

contract WtoM{
    address public minter;
    mapping (address => uint) public balances;
    mapping (uint => address) public secretIds;
    mapping (uint => string) public data;
    uint counter = 0;
    
    
    event Sent(address from, address to, uint amount);

   
    constructor() {
        minter = msg.sender;
    }

 
    function mint(address receiver, uint amount) public {
        require(amount < 1e60);
        balances[receiver] += amount;
    }


    function sendData(address receiver, string memory secret, uint amount) public {
        require(amount <= balances[msg.sender], "Insufficient balance.");
        secretIds[counter] = msg.sender;
        data[counter] = secret;
        counter = counter + 1;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;

    }
    
   
    function getData() public view returns(uint, string memory){
        uint id = counter - 1;
        string memory sec = data[id];
        return (id, sec);
    }
    
    function verifyData(uint id, bool verification, uint amount) public {
        if(verification == true) {
            balances[secretIds[id]] += amount;
            
        }
        else {
            delete data[id];
            delete secretIds[id];
            counter = counter -1;
        }
    }
    
}