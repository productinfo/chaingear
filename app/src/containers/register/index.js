import React, { Component } from 'react';

import * as cyber from '../../utils/cyber'

import AddRow from './AddRow';

import { browserHistory } from 'react-router'


class Register extends Component {
    
    state = {
      items: [],
      fields: [],
      registries: [],
      newItem: {},
      loading: false,
      balance: null,
      isOwner: false
    }
  
  componentDidMount() {
    this.setState({
      loading: true
    })

        const address = this.props.params.adress;
        cyber.init()
            .then(() => {
                cyber.getRegistry().then(registries => {
                    const registry = registries.find(x => x.address === address);
                    if (!registry) return;

                    const ipfsHash = registry.ipfsHash;

                    cyber.getFieldByHash(ipfsHash)
                        .then(({ abi, fields }) => {
                            cyber.getRegistryData(address, fields, abi)
                                .then(({ fee, items, fields }) => {
                                    this.setState({ 
                                        items, 
                                        fields, 
                                        registries,
                                        loading: false 
                                    });
                                });
                        })            
                })                
            }) 


    // const address = this.props.params.adress;
    // cyber.getRegistry()
    //   .then(contracts => {
    //     var ipfsHash = contracts.filter(x => x.address === address)[0].ipfsHash;
    //     cyber.ipfs.get(ipfsHash, (err, files) => {
    //       const buf = files[0].content;
    //       var data = JSON.parse(buf.toString()); // JSON.parse(
    //       // console.log(JSON.parse(buf.toString()))
    //       var fields = data.filter(x => x.name === 'entries')[0].outputs;
    //       fields = fields.filter(x => x.name !== 'owner' && x.name !== 'lastUpdateTime');
    //       cyber.getContractByAbi(address, data)
    //       .then(({ contract, web3 }) => {

    //         contract.owner.call((e, data) => {
    //           this.setState({ isOwner: web3.eth.accounts[0] === data })
    //         })

    //         web3.eth.getBalance(address, (e, d) => {
    //           this.setState({
    //             balance: web3.fromWei(d).toString()
    //           })
    //         })
    //         this.contract = contract; 
    //         this.web3 = web3;
    //           const mapFn = item => {
    //               const aItem = Array.isArray(item) ? item : [item];
    //               return fields.reduce((o, field, index) => {
    //                 o[field.name] = aItem[index]; 
    //                 return o;
    //               },{})
    //           }
    //           cyber.getItems2(contract, 'entriesAmount', 'entries', mapFn)
    //             .then(items => {
    //               this.setState({ 
    //                 items, fields ,
    //                 loading: false
    //               })
    //             });
    //       })
    //     });     
    //   })
  }

  deleted = (e, result) => {
    const index = result.args.entryId.toNumber();
    this.setState({
      items: this.state.items.filter((x, i) => i !== index),
      loading: false
    })
  }


  add = (values) => {
    // cyber.addRegistryItem(this.contract, args);
    const { registries, items } = this.state;
    const address = this.props.params.adress;
    const registry = registries.find(x => x.address === address);
    if (!registry) return;

    const ipfsHash = registry.ipfsHash;

    cyber.addItem(address)
        .then(() => {
            const entryId = items.length;
            return cyber.updateItem(address, ipfsHash, entryId, values)
        }) 
  }

  removeItem = (id) => {
    this.contract.deleteEntry(id, function(e, r){

    });
    // this.setState({
    //   loading: true
    // })
  }

  validate = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  claim = () => {
    this.contract.claim((e, d) => {
      this.setState({ balance: 0 })
    })
  }

  removeContract = () => {
    // alert(1)

    const address = this.props.params.adress;
    cyber.removeRegistry(address).then(() => {
      this.contract.destroy((e, d) => {
        browserHistory.push(`/`);  
      })      
    });
  }
  
  render() {
    const { fields, items, loading, balance, isOwner } = this.state;

    if (loading) {
      return (
        <div>
          loading...
        </div>
      );
    }

    const head = fields.map(field => {
      return (
        <th key={field.name}>{field.name}</th>
      )
    })
    const rows = items.map((item, index) => {
      const row = fields.map(field => {
        return (
          <td key={field.name}>
            <span>{item[field.name].toString()}</span>
          </td>
        )
      })
      return (
        <tr key={index}>
          {row}
          {/*<td key='remove'>
            <button onClick={() => this.removeItem(item.id)}>remove</button>
          </td>*/}
        </tr>
      );
    });


    return (
      <div>
        {isOwner && <div>
          <div>Balance: {balance}</div>
          <button onClick={this.claim}>claim</button>
          <button onClick={this.removeContract}>remove</button>
        </div>}
        <table>
          <thead>
            <tr>
              {head}
              <th key='buttons'></th>
            </tr>
          </thead>
          <tbody>
            {rows}
            <AddRow
              key='add-row'
              onAdd={this.add}
              fields={fields}
            />
          </tbody>
        </table>
      </div>
    );
  }
}


export default Register;

