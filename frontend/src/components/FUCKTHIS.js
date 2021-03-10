import React, { Component } from "react"
import { gql, withApollo } from "@apollo/client"
import Play from "./Search"

class Search extends Component {
  state = {
    moments: [],
    searchText: "",
  }

  render() {
    return (
      <div>
        <div>
          Search
          <input
            type="text"
            onChange={(e) => this.setSate[{ searchText: e.target.value }]}
          />
          <button onClick={() => this._executeSearch()}>searchy</button>
        </div>
        {this.state.moments.map((moment) => (
          <Play key={moment.id} link={""} />
        ))}
      </div>
    )
    //    const _executeSearch = async () => {
    //     const { searchText } = this.state
    //     const result = await this.props.client.query({
    //         query: ALL_MOMENTS_SEARCH_QUERY,
    //         variables: { searchText }
    //     })
    //     const moments = result.data.allMoments
    //     this.setState({ moments })
    //     }
  }
}

const ALL_MOMENTS_SEARCH_QUERY = gql`
    query AllMomentsSearchQuery($searchText: String!) {
        allMoments(filter: {
            OR: [{
                name_contains: $searchText
            }, {
                type_contains: $searchText
            }, {
                description_contains: $searchText
            }, {
                set_contains: $searchText
            }

        }]

    })
    {
        id
        set{
            id
        }
        description
    }

`

export default withApollo(Search)
