
        var contract = new web3.eth.Contract(
[
    {
	"anonymous": false,
	"inputs": [
	    {
		"indexed": true,
		"internalType": "contract IERC721",
		"name": "token",
		"type": "address"
		},
	    {
		"indexed": false,
		"internalType": "uint256",
		"name": "id",
		"type": "uint256"
		},
	    {
		"indexed": true,
		"internalType": "bytes32",
		"name": "hash",
		"type": "bytes32"
		},
	    {
		"indexed": false,
		"internalType": "address",
		"name": "bidder",
		"type": "address"
		},
	    {
		"indexed": false,
		"internalType": "uint256",
		"name": "bidPrice",
		"type": "uint256"
		}
	    ],
	"name": "Bid",
	"type": "event"
	},
    {
	"anonymous": false,
	"inputs": [
	    {
		"indexed": true,
		"internalType": "contract IERC721",
		"name": "token",
		"type": "address"
		},
	    {
		"indexed": false,
		"internalType": "uint256",
		"name": "id",
		"type": "uint256"
		},
	    {
		"indexed": true,
		"internalType": "bytes32",
		"name": "hash",
		"type": "bytes32"
		},
	    {
		"indexed": false,
		"internalType": "address",
		"name": "seller",
		"type": "address"
		}
	    ],
	"name": "CancelOrder",
	"type": "event"
	},
    {
	"anonymous": false,
	"inputs": [
	    {
		"indexed": true,
		"internalType": "contract IERC721",
		"name": "token",
		"type": "address"
		},
	    {
		"indexed": false,
		"internalType": "uint256",
		"name": "id",
		"type": "uint256"
		},
	    {
		"indexed": true,
		"internalType": "bytes32",
		"name": "hash",
		"type": "bytes32"
		},
	    {
		"indexed": false,
		"internalType": "address",
		"name": "seller",
		"type": "address"
		},
	    {
		"indexed": false,
		"internalType": "address",
		"name": "taker",
		"type": "address"
		},
	    {
		"indexed": false,
		"internalType": "uint256",
		"name": "price",
		"type": "uint256"
		}
	    ],
	"name": "Claim",
	"type": "event"
	},
    {
	"anonymous": false,
	"inputs": [
	    {
		"indexed": true,
		"internalType": "contract IERC721",
		"name": "token",
		"type": "address"
		},
	    {
		"indexed": false,
		"internalType": "uint256",
		"name": "id",
		"type": "uint256"
		},
	    {
		"indexed": true,
		"internalType": "bytes32",
		"name": "hash",
		"type": "bytes32"
		},
	    {
		"indexed": false,
		"internalType": "address",
		"name": "seller",
		"type": "address"
		}
	    ],
	"name": "MakeOrder",
	"type": "event"
	},
    {
	"anonymous": false,
	"inputs": [
	    {
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
		},
	    {
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
		}
	    ],
	"name": "OwnershipTransferred",
	"type": "event"
	},
    {
	"inputs": [
	    {
		"internalType": "bytes32",
		"name": "_order",
		"type": "bytes32"
		}
	    ],
	"name": "bid",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "bytes32",
		"name": "_order",
		"type": "bytes32"
		}
	    ],
	"name": "buyItNow",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "bytes32",
		"name": "_order",
		"type": "bytes32"
		}
	    ],
	"name": "cancelOrder",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "bytes32",
		"name": "_order",
		"type": "bytes32"
		}
	    ],
	"name": "claim",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "contract IERC721",
		"name": "_token",
		"type": "address"
		},
	    {
		"internalType": "uint256",
		"name": "_id",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "_startPrice",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "_endPrice",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "_endBlock",
		"type": "uint256"
		}
	    ],
	"name": "dutchAuction",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "contract IERC721",
		"name": "_token",
		"type": "address"
		},
	    {
		"internalType": "uint256",
		"name": "_id",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "_startPrice",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "_endBlock",
		"type": "uint256"
		}
	    ],
	"name": "englishAuction",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "contract IERC721",
		"name": "_token",
		"type": "address"
		},
	    {
		"internalType": "uint256",
		"name": "_id",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "_price",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "_endBlock",
		"type": "uint256"
		}
	    ],
	"name": "fixedPrice",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "address",
		"name": "",
		"type": "address"
		},
	    {
		"internalType": "address",
		"name": "",
		"type": "address"
		},
	    {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		},
	    {
		"internalType": "bytes",
		"name": "",
		"type": "bytes"
		}
	    ],
	"name": "onERC721Received",
	"outputs": [
	    {
		"internalType": "bytes4",
		"name": "",
		"type": "bytes4"
		}
	    ],
	"stateMutability": "nonpayable",
	"type": "function"
	},
    {
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "address",
		"name": "_feeAddress",
		"type": "address"
		}
	    ],
	"name": "setFeeAddress",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
		}
	    ],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "uint16",
		"name": "_percent",
		"type": "uint16"
		}
	    ],
	"name": "updateFeePercent",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "uint16",
		"name": "_feePercent",
		"type": "uint16"
		}
	    ],
	"stateMutability": "nonpayable",
	"type": "constructor"
	},
    {
	"inputs": [],
	"name": "feeAddress",
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
	"inputs": [],
	"name": "feePercent",
	"outputs": [
	    {
		"internalType": "uint16",
		"name": "",
		"type": "uint16"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "bytes32",
		"name": "_order",
		"type": "bytes32"
		}
	    ],
	"name": "getCurrentPrice",
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
		"internalType": "address",
		"name": "",
		"type": "address"
		},
	    {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	    ],
	"name": "orderIdBySeller",
	"outputs": [
	    {
		"internalType": "bytes32",
		"name": "",
		"type": "bytes32"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "contract IERC721",
		"name": "",
		"type": "address"
		},
	    {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	    ],
	"name": "orderIdByToken",
	"outputs": [
	    {
		"internalType": "bytes32",
		"name": "",
		"type": "bytes32"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "bytes32",
		"name": "",
		"type": "bytes32"
		}
	    ],
	"name": "orderInfo",
	"outputs": [
	    {
		"internalType": "uint8",
		"name": "orderType",
		"type": "uint8"
		},
	    {
		"internalType": "address",
		"name": "seller",
		"type": "address"
		},
	    {
		"internalType": "contract IERC721",
		"name": "token",
		"type": "address"
		},
	    {
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "startPrice",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "endPrice",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "startBlock",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "endBlock",
		"type": "uint256"
		},
	    {
		"internalType": "uint256",
		"name": "lastBidPrice",
		"type": "uint256"
		},
	    {
		"internalType": "address",
		"name": "lastBidder",
		"type": "address"
		},
	    {
		"internalType": "bool",
		"name": "isSold",
		"type": "bool"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	},
    {
	"inputs": [],
	"name": "owner",
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
		"name": "_seller",
		"type": "address"
		}
	    ],
	"name": "sellerOrderLength",
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
		"internalType": "contract IERC721",
		"name": "_token",
		"type": "address"
		},
	    {
		"internalType": "uint256",
		"name": "_id",
		"type": "uint256"
		}
	    ],
	"name": "tokenOrderLength",
	"outputs": [
	    {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	}
], "0x4DF941C3356DA878D07E18906fCcd4FBc48eeD58");

