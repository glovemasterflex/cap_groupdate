class Profiles extends React.Component{
  constructor(props) {
    super(props);
    this.state = { profiles: this.props.profiles };
    this.addProfile = this.addProfile.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  updateProfile(id, profile) {
    $.ajax({
      url: `/profile/${id}`,
      type: 'PUT',
      data: { profile: {...profile}},
      dataType: 'JSON'
    }).success( profile => {
      let profiles = this.state.profiles;
      let editProfile = profiles.find( p => p.id === profile.id)
      editProfile.first_name_one = profile.first_name_one;
      editProfile.last_name_one = profile.last_name_one;
      editProfile.first_name_two = profile.first_name_two;
      editProfile.last_name_two = profile.last_name_two;
      editProfile.age_one = profile.age_one;
      editProfile.age_two = profile.age_two;
      editProfile.hobbies = profile.hobbies;
      editProfile.location = profile.location;
      editProfile.picture = profile.picture
      setState({ profiles: profiles });
    });
  }

  deleteProfile(id) {
    $.ajax({
      url: `/profiles/${id}`,
      type: 'DELETE'
    }).success( profile => {
      let profiles = this.state.profiles;
      let index = profiles.findIndex( p => p.id === profile.id);
      profiles.splice(index, 1)
      this.setState({ profiles: profiles });
    });
  }

  addProfile(user_id) {
    this.setState({ profiles: [profile, ...this.state.profiles]});
  }

  render() {
    let profiles = this.state.profiles.map( profile => {
      return(<Profile key={`profile-${profile.id}`} {...profile} delete={this.deleteProfile} updateProfile={this.updateProfile} />);
    });
    return(
      <div className="row">
        <h2 className="center">Poopoo</h2>
        {profiles}
      </div>
    );
  }
}