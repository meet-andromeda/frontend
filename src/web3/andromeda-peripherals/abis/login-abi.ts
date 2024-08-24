const loginAbi = [{
  inputs: [], stateMutability: 'nonpayable', type: 'constructor',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: '_admin', type: 'address',
  }],
  name: 'AdminAdded',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: '_admin', type: 'address',
  }],
  name: 'AdminRemoved',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'user', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'newOwner', type: 'address',
  }],
  name: 'OwnershipTransferred',
  type: 'event',
}, {
  inputs: [{
    internalType: 'address', name: '_admin', type: 'address',
  }],
  name: 'addAdmin',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  inputs: [],
  name: 'getAdmins',
  outputs: [{
    internalType: 'address[]', name: '', type: 'address[]',
  }],
  stateMutability: 'view',
  type: 'function',
}, {
  inputs: [{
    internalType: 'address', name: '_admin', type: 'address',
  }],
  name: 'isAdmin',
  outputs: [{
    internalType: 'bool', name: '', type: 'bool',
  }],
  stateMutability: 'view',
  type: 'function',
}, {
  inputs: [],
  name: 'owner',
  outputs: [{
    internalType: 'address', name: '', type: 'address',
  }],
  stateMutability: 'view',
  type: 'function',
}, {
  inputs: [{
    internalType: 'address', name: '_admin', type: 'address',
  }],
  name: 'removeAdmin',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  inputs: [{
    internalType: 'address', name: 'newOwner', type: 'address',
  }],
  name: 'transferOwnership',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}] as const;

export default loginAbi;
