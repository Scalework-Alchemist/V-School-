import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import BountyCard from "./BountyCard";

export default class BountyList extends Component {
  state = {
    searchString: "",
    allBounties: [],
    loading: true
  };
  constructor() {
    super();
    this.getBounties();
  }

  getBounties = () => {
    axios
      .get("/api/bountylist/")
      .then(response => {
        this.setState({ allBounties: response.data });
      })
      .catch(error => {
        console.log("can't fetch");
        console.log(error);
      });
  };
  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getBounties();
  };

  render() {
    return (
      <div>
        {this.state.allBounties ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Quary A Contracts"
              margrin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.allBounties.map(currentBounty => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <BountyCard allBounties={currentBounty} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "no Contracts Found"
        )}
      </div>
    );
  }
}

// const mapedBountyData = allBounties.map(bounty => {
//     return loading ? (
//       <div> loading active contracts </div>
//     ) : err ? (
//       <div>sorry, lost comms with server </div>
//     ) : (
//       <div>
//         <Grid container spacing={24} style={{ padding: 24 }}>
//           <Grid item xs={12} sm={6} lg={4} xl={3}>
//             <div>
//               <header>
//                 <h1>
//                   {bounty.first_name} {bounty.last_name}
//                 </h1>
//               </header>
//               <ul>
//                 <li>{bounty.species}</li>
//                 <li>{bounty.reward}</li>
//                 <li>
//                   {bounty._id}
//                   USSF SSN
//                 </li>
//               </ul>
//             </div>
//           </Grid>
//         </Grid>
//       </div>
//     );
//   });

// getBountyData(url) {
//     return axios.get(url).then(response => response.data);
//   }
//   componentDidMount() {
//     this.getBountyData("/api/bountylist/").then(allBounties =>
//       this.setState({ allBounties, loading: false })
//     );
//   }
