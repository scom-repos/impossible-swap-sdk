export default {
"abi":[
{"inputs":[{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},
{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}
],
"bytecode":"608060405234801561001057600080fd5b50604051610b49380380610b498339818101604052602081101561003357600080fd5b5051604080518082018252601481527f4465666c6174696e67205465737420546f6b656e0000000000000000000000006020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527ff89e31130e6fd3d87d62a1ac2770fba58bed5a06c47ce70fa97f8218b1b2743a818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015246608082018190523060a0808401919091528451808403909101815260c09092019093528051910120600355610125338361012c565b505061022c565b610145816000546101ce60201b6106781790919060201c565b60009081556001600160a01b0383168152600160209081526040909120546101769183906106786101ce821b17901c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b80820182811015610226576040805162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b92915050565b61090e8061023b6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b411461025b578063a9059cbb14610263578063d505accf1461028f578063dd62ed3e146102e2576100cf565b80633644e5151461020757806370a082311461020f5780637ecebe0014610235576100cf565b806306fdde03146100d4578063095ea7b31461015157806318160ddd1461019157806323b872dd146101ab57806330adf81f146101e1578063313ce567146101e9575b600080fd5b6100dc610310565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101165781810151838201526020016100fe565b50505050905090810190601f1680156101435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561016757600080fd5b506001600160a01b038135169060200135610340565b604080519115158252519081900360200190f35b610199610357565b60408051918252519081900360200190f35b61017d600480360360608110156101c157600080fd5b506001600160a01b0381358116916020810135909116906040013561035d565b6101996103f1565b6101f1610415565b6040805160ff9092168252519081900360200190f35b61019961041a565b6101996004803603602081101561022557600080fd5b50356001600160a01b0316610420565b6101996004803603602081101561024b57600080fd5b50356001600160a01b0316610432565b6100dc610444565b61017d6004803603604081101561027957600080fd5b506001600160a01b038135169060200135610463565b6102e0600480360360e08110156102a557600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610470565b005b610199600480360360408110156102f857600080fd5b506001600160a01b038135811691602001351661065b565b604051806040016040528060148152602001732232b33630ba34b733902a32b9ba102a37b5b2b760611b81525081565b600061034d3384846106c7565b5060015b92915050565b60005481565b6001600160a01b0383166000908152600260209081526040808320338452909152812054600019146103dc576001600160a01b03841660009081526002602090815260408083203384529091529020546103b79083610729565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b6103e7848484610779565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b60016020526000908152604090205481565b60046020526000908152604090205481565b6040518060400160405280600381526020016211151560ea1b81525081565b600061034d338484610779565b428410156104af576040805162461bcd60e51b81526020600482015260076024820152661156141254915160ca1b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa1580156105ca573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906106005750886001600160a01b0316816001600160a01b0316145b610645576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5349474e415455524560781b604482015290519081900360640190fd5b6106508989896106c7565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b80820182811015610351576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b80820382811115610351576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b606481046107878482610846565b60006107938383610729565b6001600160a01b0386166000908152600160205260409020549091506107b99082610729565b6001600160a01b0380871660009081526001602052604080822093909355908616815220546107e89082610678565b6001600160a01b0380861660008181526001602090815260409182902094909455805185815290519193928916927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35050505050565b6001600160a01b0382166000908152600160205260409020546108699082610729565b6001600160a01b038316600090815260016020526040812091909155546108909082610729565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a3505056fea264697066735822122018cd9643b73b6793754948b4169462ea56cc743ca8df3707af7e49364cb2b7c264736f6c63430007060033"
}