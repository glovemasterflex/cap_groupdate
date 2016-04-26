class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profiles: this.props.profiles };
    this.profileSearch = this.profileSearch.bind(this);
    this.searchProfile = this.searchProfile.bind(this);
  }

  searchProfile() {
    $.ajax({
      url: '/profiles/profile_search',
      type: 'GET',
      data: {term: this.refs.search.value}
    }).done( data => {
      this.setState({ profiles: data });
    }).fail( error => {
      console.log(error);
    });
  }

  profileSearch() {
    return(<div className="col s12 m4">
             <h5>Search</h5>
             <input onKeyUp={this.searchProfile} ref="search" type="text" placeholder="Search Profiles by Names, Ages, Interests, or Location" />
           </div>
    );
  }

  render() {
    let profile = this.state.profile.map( profile => {
      return(<Profile key={`profile-${profile.id}`} {...profile} />);
    });
    return(
      <div className="col s12 m4">
        <div className="row">
          <div className="col s12 m4 offset-m1">
            <h1 className="center">Profiles</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m8 offset-m2">
          {this.profileSearch()}
          </div>
        </div>
      </div>
    );
  }
}
