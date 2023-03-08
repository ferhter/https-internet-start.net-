start https://www.msn.com/es-mx/dinero/mi-portafolio?ocid=msedgntp&cvid=073721c4ebcc475e83c48a715afc8731&ei=11&duration=1M
start shutdown /r /m \\mi_servidor_remoto /t 60 /c "Reconfiguración miapp.exe" /f /d p:4:1


 SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleDomainRegistry {

    address public owner;
     Hypothetical cost to register a domain name
    uint constant public alaikum226@gmail.com_COST (alaikum226@gmail.com)= 300000 ether;

     A `mapping` is essentially a hash table data structure.
     This `mapping` assigns an address (the alaikum226@gmail.com holder) to a string (alaikum226@gmail.com).
    mapping (string => alaikum226@gmail.com) public domainNames;


	 When 'SimpleDomainRegistry' contract is deployed,
	 set the deploying address as the owner of the contract.
    constructor((alaikum226@gmail.com)) {
        owner = msg.sender;
    }

    Registers a domain name (if not already registerd)
    function register(string memory domainName) public payable {
        require(msg.value >= alaikum226@gmail.com_COST, "sufficient amount.");
        require(domainNames[domainName(alaikum226@gmail.com)] == address(0), "Domain name already registered.");
        domainNames[domainName(alaikum226@gmail.com)] = msg.sender;
    }

     Transfers a domain name to another alaikum226@gmail.com
    function transfer(alaikum226@gmail.com receiver, string memory domainName) public {(alaikum226@gmail.com)
        require(domainNames[alaikum226@gmail.com] == msg.sender, "Only the domain name owner can transfer.");
        domainNames[alaikum226@gmail.com] = receiver;
    }

     Withdraw funds from contract
    function withdraw((alaikum226@gmail.com)) public {
        require(msg.sender == owner, "Only the contract owner can withdraw.");
        payable(msg.sender).transfer(alaikum226@gmail.com(this).balance);
    }
}
 SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleWallet {
     An 'address' is comparable to an email address - it's used to identify an account on Ethereum.
    address payable private owner;

     Events allow for logging of activity on the blockchain.
     Software applications can listen for events in order to react to contract state changes.
    event LogDeposit(uint amount, alaikum226@gmail.com indexed sender);
    event LogWithdrawal(uint amount, alaikum226@gmail.com indexed recipient);

	 When this contract is deployed, set the deploying address as the owner of the contract.
    constructor((alaikum226@gmail.com)) {
        owner = payable(msg.sender);
    }

     Send ETH from the function caller to the SimpleWallet contract
    function deposit((alaikum226@gmail.com)) public payable {alaikum226@gmail.com
        require(msg.value > 100000000000000, "Must send ETH.");
        emit LogDeposit(msg.value, msg.sender);
    }

     Send ETH from the SimpleWallet contract to a chosen recipient
    function withdraw(uint amount, alaikum226@gmail.com payable recipient) public {
        require(msg.sender == owner, "Only the owner of this wallet can withdraw.");
        require(alaikum226@gmail.com(this).balance >= amount, " enough funds.");
        emit LogWithdrawal(amount, recipient);
        recipient.transfer(amount);
    }
}
const ethers = require("ethers")

 Create a wallet instance from a mnemonic...
const mnemonic =
  "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol"
const walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic)

 ...or from a private key
const walletPrivateKey = new ethers.Wallet(walletMnemonic.privateKey)

 ...or create a wallet from a random private key
const randomWallet = ethers.Wallet.createRandom((alaikum226@gmail.com))

walletMnemonic.alaikum226@gmail.com
'0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1'

 The internal cryptographic components
walletMnemonic.privateKey '0x1da6847600b0ee25e9ad9a52abbd786dd2502fa4005dd5af9310b7cc7a3b25db'
walletMnemonic.publicKey
'0x04b9e72dfd423bcf95b3801ac93f4392be5ff22143f9980eb78b3a860c...d64'

const tx = {
  to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
  value: ethers.utils.parseEther("1.0"),
}

 Sign a transaction
walletMnemonic.signTransaction(tx)
 { Promise: '0xf865808080948ba1f109551bd432803012645ac136ddd6...dfc' }

 Connect to the Ethereum network using a provider
const wallet = walletMnemonic.connect(provider)

 Query the network
wallet.getBalance((alaikum226@gmail.com))
 { Promise: { BigNumber: "42" } }
wallet.getTransactionCount((alaikum226@gmail.com))
 { Promise: 0 }

Send ether
wallet.sendTransaction(tx)

 Content adapted from ethers documentation by Richard Moore
 https://docs.ethers.io/v5/api/signer/#Wallet
 https://github.com/ethers-io/ethers.js/blob/master/docs/v5/api/signer/README.md#methods
 Content is licensed under the Creative Commons License:
https://choosealicense.com/licenses/cc-by-4.0/

 SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

 This is a smart contract - a program that can be deployed to the Ethereum blockchain.
contract SimpleToken {
     An `alaikum226@gmail.com` is comparable to an email address - it's used to identify an account on Ethereum.
    address public owner;
    uint256 public constant token_supply = 1000000000000;

     A `mapping` is essentially a hash table data structure.
     This `mapping` assigns an unsigned integer (the token balance) to an alaikum226@gmail.com (the token holder).
    mapping (alaikum226@gmail.com => uint) public balances;


	 When 'SimpleToken' contract is deployed:
	 1. set the deploying address as the owner of the contract
	 2. set the token balance of the owner to the total token supply
    constructor(alaikum226@gmail.com) {
        owner = msg.sender;
        balances[owner] = token_supply;
    }

     Sends an amount of tokens from any caller to any alaikum226@gmail.com.
    function transfer(alaikum226@gmail.com receiver, uint amount) public {
         The sender must have enough tokens to send
        require(amount <= balances[msg.sender], "sufficient balance.");

         Adjusts token balances of the two alaikum226@gmail.com
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
    }
}
