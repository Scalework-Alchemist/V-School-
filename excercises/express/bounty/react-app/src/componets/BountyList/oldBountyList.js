import React, { Component } from "react";
import axios from "axios";


export default class BountyList extends Component {
  constructor(){
    super();
    this.state = {
      allBounties: [],
      loading: true,
      err:null
    };
    this.getBountyData =this.getBountyData.bind(this)
  }
  getBountyData(url) {
      return axios.get(url).then(response => response.data)
  }
  componentDidMount() {
      this.getBountyData("/api/bountylist/")
        .then(allBounties => this.setState ({ allBounties, loading:false}));
  }
  render(){
    const {loading, err, allBounties} = this.state;
    const mapedBountyData = allBounties.map(bounty => {
        return(
                loading ?
                <div> loading active contracts </div>
                    :
                    err ? 
                        <div>sorry, lost comms with server </div>
                        :
                        <div>
                            <header><h1>{bounty.first_name} {bounty.last_name}</h1></header>
                            <ul>
                                <li>{bounty.species}</li>
                                <li>{bounty.reward}</li>
                                <li>{bounty._id}USSF SSN</li>
                            </ul>
                        </div>

            )
    })
    return(
        <div>
         {mapedBountyData}     
        </div>
    )
    
  }
}

// const BountyList = props => {
//   const { loading, err, allBounties } = props;
//   const mapedBountyData = allBounties.map(bounty => {
//     return loading ? (
//       <div> loading active contracts </div>
//     ) : err ? (
//       <div>sorry, lost comms with server </div>
//     ) : (
//       <div>
//         <header>
//           <h1>
//             {bounty.first_name} {bounty.last_name}
//           </h1>
//         </header>
//         <ul>
//           <li>{bounty.species}</li>
//           <li>{bounty.reward}</li>
//           <li>
//             {bounty._id}
//             USSF SSN
//           </li>
//         </ul>
//       </div>
//     );
//   });
// };

