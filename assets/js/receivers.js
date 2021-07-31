var contract;

$(document).ready(async function() {
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIII")
    web3 = new Web3(web3.currentProvider);
    
    var address = "0xdfA431bC5bb061Bf72B0060F4A55414A7A1d2caA";

    var abi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Sent",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balances",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "data",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "minter",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "secretIds",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "secret",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendData",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "verification",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "verifyData",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];
    var accounts = await web3.eth.requestAccounts()
    var userAcc = accounts[0];
    var recAcc = "0xA62EDE996E17FA4315dc7D6E8cd2ef010524340d";
    contract = new web3.eth.Contract(abi,address);

    
    // var balances = await contract.methods.balances(userAcc).call();
    // $('.balance').text(balances);

    // var mint = await contract.methods.mint(userAcc,100).send({from : userAcc}).then( function () {
    //     contract.methods.balances(userAcc).call().then( function(bal) {
    //         console.log(bal);
    //     });
    // });
    
    // var send = await contract.methods.sendData(recAcc,"alpha",50).send({from : userAcc}).then( function () {
    //     contract.methods.balances(userAcc).call().then( function(bal) {
    //         console.log(bal);
    //     });
    // })
    // var data = await contract.methods.getData().call().then( function(data) {
    //     console.log(data);
    //     return data[0];
    // })
    // console.log(data);
    // var send = await contract.methods.verifyData(data,true,50).send({from : userAcc}).then(function() {
    //     contract.methods.balances(userAcc).call().then( function(bal) {
    //         console.log(bal);
    //     });
    // })
    $(".infoisverified").click(async function(event) {
        event.preventDefault();
        var id = $('.infoid').text();
        id = id.slice(1,);
        id = Number(id);
        var send = await contract.methods.verifyData(id,true,50).send({from : userAcc}).then(function() {
        contract.methods.balances(userAcc).call().then( function(bal) {
            console.log(bal);
        });

        var str = 'https://hackersxd.herokuapp.com/verify/:' + id;
        window.location.href = str;
    })
    })
    $(".infoisnotverified").click(async function(event) {
        event.preventDefault();
        var id = $('.infoid').text();
        id = id.slice(1,);
        id = Number(id);

        var str = 'https://hackersxd.herokuapp.com/decline/:' + id;
        window.location.href = str;
    })
})

