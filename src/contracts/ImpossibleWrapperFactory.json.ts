export default {
"abi":[
{"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"WrapCreated","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"WrapDeleted","type":"event"},
{"inputs":[{"internalType":"address","name":"underlying","type":"address"},{"internalType":"uint256","name":"ratioNumerator","type":"uint256"},{"internalType":"uint256","name":"ratioDenominator","type":"uint256"}],"name":"createPairing","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"wrapper","type":"address"}],"name":"deletePairing","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokensToWrappedTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wrappedTokensToTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
],
"bytecode":"608060405234801561001057600080fd5b50604051611b1a380380611b1a8339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055611ab5806100656000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806326c9c320146100675780635aa6e6751461008f5780636b95b0dc146100b3578063a37a826f146100d9578063a936579c1461010b578063ab033ea914610131575b600080fd5b61008d6004803603602081101561007d57600080fd5b50356001600160a01b0316610157565b005b6100976103f8565b604080516001600160a01b039092168252519081900360200190f35b610097600480360360208110156100c957600080fd5b50356001600160a01b0316610407565b610097600480360360608110156100ef57600080fd5b506001600160a01b038135169060208101359060400135610422565b6100976004803603602081101561012157600080fd5b50356001600160a01b031661062b565b61008d6004803603602081101561014757600080fd5b50356001600160a01b0316610646565b6000546001600160a01b031633146101a6576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b806001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101df57600080fd5b505afa1580156101f3573d6000803e3d6000fd5b505050506040513d602081101561020957600080fd5b505115610252576040805162461bcd60e51b815260206004820152601260248201527149463a204e4f4e5a45524f5f535550504c5960701b604482015290519081900360640190fd5b6001600160a01b03808216600081815260026020908152604091829020548251636f307dc360e01b81529251941693849392636f307dc3926004808301939192829003018186803b1580156102a657600080fd5b505afa1580156102ba573d6000803e3d6000fd5b505050506040513d60208110156102d057600080fd5b50516001600160a01b031614610321576040805162461bcd60e51b815260206004820152601160248201527024a31d1024a72b20a624a22faa27a5a2a760791b604482015290519081900360640190fd5b6001600160a01b03811661037c576040805162461bcd60e51b815260206004820152601a60248201527f49463a2041646472657373206d75737420686176652070616972000000000000604482015290519081900360640190fd5b6001600160a01b03808216600081815260016020908152604080832080546001600160a01b031990811690915594871680845260028352928190208054909516909455835192835282015281517f8fe58a4ccd7daf45d844d35e2022c5d89b70f4c8a8465c1f9d9b0e65680f5b8b929181900390910190a15050565b6000546001600160a01b031681565b6001602052600090815260409020546001600160a01b031681565b600080546001600160a01b03163314610472576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b6001600160a01b03848116600090815260016020526040902054161580156104b257506001600160a01b0384811660009081526002602052604090205416155b6104f5576040805162461bcd60e51b815260206004820152600f60248201526e49463a20504149525f45584953545360881b604482015290519081900360640190fd5b821580159061050357508115155b610548576040805162461bcd60e51b815260206004820152601160248201527049463a20494e56414c49445f524154494f60781b604482015290519081900360640190fd5b6000848484604051610559906106b7565b80846001600160a01b031681526020018381526020018281526020019350505050604051809103906000f080158015610596573d6000803e3d6000fd5b506001600160a01b03808716600081815260016020908152604080832080549587166001600160a01b0319968716811790915580845260028352928190208054909516841790945583519283528201528082018790526060810186905290519192507fd51e90b2371b8ef8f763b59dd4ca7088c28e2fdc4dc5010461d49f3240ed1497919081900360800190a1949350505050565b6002602052600090815260409020546001600160a01b031681565b6000546001600160a01b03163314610695576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6113bb806106c58339019056fe60806040526003805460ff191660121790553480156200001e57600080fd5b50604051620013bb380380620013bb833981810160405260608110156200004457600080fd5b508051602082015160409283015160016000908155600580546001600160a01b0319166001600160a01b0380871691909117918290556007859055600884905586516395d89b4160e01b8152965195969495939492939116916395d89b419160048083019286929190829003018186803b158015620000c257600080fd5b505afa158015620000d7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156200010157600080fd5b81019080805160405193929190846401000000008211156200012257600080fd5b9083019060208201858111156200013857600080fd5b82516401000000008111828201881017156200015357600080fd5b82525081516020918201929091019080838360005b838110156200018257818101518382015260200162000168565b50505050905090810190601f168015620001b05780820380516001836020036101000a031916815260200191505b506040525050506040516020018082805190602001908083835b60208310620001eb5780518252601f199092019160209182019101620001ca565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405290508060405160200180806a024a316abb930b83832b2160ad1b815250600b0182805190602001908083835b602083106200026c5780518252601f1990920191602091820191016200024b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260019080519060200190620002b792919062000352565b508060405160200180806302ba4a3160e51b81525060040182805190602001908083835b60208310620002fc5780518252601f199092019160209182019101620002db565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052600290805190602001906200034792919062000352565b5050505050620003fe565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200038a5760008555620003d5565b82601f10620003a557805160ff1916838001178555620003d5565b82800160010185558215620003d5579182015b82811115620003d5578251825591602001919060010190620003b8565b50620003e3929150620003e7565b5090565b5b80821115620003e35760008155600101620003e8565b610fad806200040e6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636f307dc311610097578063b58805be11610066578063b58805be146102ea578063cc91dcbb14610307578063dd62ed3e1461030f578063f3fef3a31461033d57610100565b80636f307dc31461026c57806370a082311461029057806395d89b41146102b6578063a9059cbb146102be57610100565b806323b872dd116100d357806323b872dd146101e4578063313ce5671461021a57806347e7ef241461023857806359356c5c1461026457610100565b806306fdde0314610105578063095ea7b3146101825780630b3ff1cf146101c257806318160ddd146101dc575b600080fd5b61010d610369565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561014757818101518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101ae6004803603604081101561019857600080fd5b506001600160a01b0381351690602001356103f6565b604080519115158252519081900360200190f35b6101ca61045d565b60408051918252519081900360200190f35b6101ca610463565b6101ae600480360360608110156101fa57600080fd5b506001600160a01b03813581169160208101359091169060400135610469565b610222610646565b6040805160ff9092168252519081900360200190f35b6101ca6004803603604081101561024e57600080fd5b506001600160a01b03813516906020013561064f565b6101ca61081e565b610274610824565b604080516001600160a01b039092168252519081900360200190f35b6101ca600480360360208110156102a657600080fd5b50356001600160a01b0316610833565b61010d610845565b6101ae600480360360408110156102d457600080fd5b506001600160a01b03813516906020013561089d565b6101ca6004803603602081101561030057600080fd5b5035610906565b6101ca610923565b6101ca6004803603604081101561032557600080fd5b506001600160a01b0381358116916020013516610929565b6101ca6004803603604081101561035357600080fd5b506001600160a01b038135169060200135610946565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103ee5780601f106103c3576101008083540402835291602001916103ee565b820191906000526020600020905b8154815290600101906020018083116103d157829003601f168201915b505050505081565b336000818152600a602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b60085481565b60045481565b6001600160a01b0383166000908152600960205260408120548211156104b0576040805162461bcd60e51b8152602060048201526000602482015290519081900360440190fd5b6001600160a01b038316610505576040805162461bcd60e51b815260206004820152601760248201527612518815dc985c1c195c8e881253959053125117d114d5604a1b604482015290519081900360640190fd5b6001600160a01b038416331480159061054357506001600160a01b0384166000908152600a6020908152604080832033845290915290205460001914155b156105d5576001600160a01b0384166000908152600a602090815260408083203384529091529020548211156105aa5760405162461bcd60e51b8152600401808060200182810382526023815260200180610f286023913960400191505060405180910390fd5b6001600160a01b0384166000908152600a602090815260408083203384529091529020805483900390555b6001600160a01b03808516600081815260096020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b60035460ff1681565b6000600260005414156106a9576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000556005546106c6906001600160a01b0316333085610a61565b600654600554604080516370a0823160e01b8152306004820152905160009361074f9390926001600160a01b03909116916370a0823191602480820192602092909190829003018186803b15801561071d57600080fd5b505afa158015610731573d6000803e3d6000fd5b505050506040513d602081101561074757600080fd5b505190610bbd565b905061077260085461076c60075484610c0d90919063ffffffff16565b90610c70565b6001600160a01b0385166000908152600960205260409020549092506107989083610cb2565b6001600160a01b0385166000908152600960205260409020556004546107be9083610cb2565b6004556006546107ce9082610cb2565b6006556040805183815290516001600160a01b038616916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a350600160005592915050565b60065481565b6005546001600160a01b031681565b60096020526000908152604090205481565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156103ee5780601f106103c3576101008083540402835291602001916103ee565b60006001600160a01b0383166108f4576040805162461bcd60e51b815260206004820152601760248201527612518815dc985c1c195c8e881253959053125117d114d5604a1b604482015290519081900360640190fd5b6108ff338484610469565b9392505050565b600061045760075461076c60085485610c0d90919063ffffffff16565b60075481565b600a60209081526000928352604080842090915290825290205481565b6000600260005414156109a0576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000908155338152600960205260409020546109be9083610bbd565b336000908152600960205260409020556004546109db9083610bbd565b6004556007546008546109f4919061076c908590610c0d565b600554909150610a0e906001600160a01b03168483610d01565b600654610a1b9082610bbd565b60065560408051838152905160009133917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3600160005592915050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b178152925182516000948594938a169392918291908083835b60208310610ae55780518252601f199092019160209182019101610ac6565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610b47576040519150601f19603f3d011682016040523d82523d6000602084013e610b4c565b606091505b5091509150818015610b7a575080511580610b7a5750808060200190516020811015610b7757600080fd5b50515b610bb55760405162461bcd60e51b8152600401808060200182810382526031815260200180610ef76031913960400191505060405180910390fd5b505050505050565b80820382811115610457576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6000811580610c2857505080820282828281610c2557fe5b04145b610457576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b60006108ff83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610e54565b80820182811015610457576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1781529251825160009485949389169392918291908083835b60208310610d7d5780518252601f199092019160209182019101610d5e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610ddf576040519150601f19603f3d011682016040523d82523d6000602084013e610de4565b606091505b5091509150818015610e12575080511580610e125750808060200190516020811015610e0f57600080fd5b50515b610e4d5760405162461bcd60e51b815260040180806020018281038252602d815260200180610f4b602d913960400191505060405180910390fd5b5050505050565b60008183610ee05760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ea5578181015183820152602001610e8d565b50505050905090810190601f168015610ed25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610eec57fe5b049594505050505056fe5472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472616e7366657246726f6d206661696c6564496d706f737369626c65577261707065723a20494e535546465f414c4c4f57414e43455472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c6564a2646970667358221220adcec3f7fc903a704c8d18ea04f31cfa7285187855651e5227ff822dd249330964736f6c63430007060033a2646970667358221220cc6d8463ccbc5d05e0594114b38f4d5ec1eb02c533baea319550aa109a40ebaf64736f6c63430007060033"
}