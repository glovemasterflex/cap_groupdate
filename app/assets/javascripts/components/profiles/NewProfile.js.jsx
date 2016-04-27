class NewProfile extends React.Component {
  constructor(props) {
    super(props);
    this.addProfile = this.addProfile.bind(this);
  }

  addProfile(e) {
    e.preventDefault();
    let user_id = this.props.user_id;
    let id = this.props.profile.id;
    let first_name_one = this.refs.first_name_one.value;
    let last_name_one = this.refs.last_name_one.value;
    let first_name_two = this.refs.first_name_two.value;
    let last_name_two = this.refs.last_name_two.value;
    let age_one = this.refs.age_one.value;
    let age_two = this.refs.age_two.value;
    let hobbies = this.refs.hobbies.value;
    let location = this.refs.location.value;
    let picture = this.refs.picture.value;

    $.ajax({
      url: `/users/${user_id}/profiles`,
      type: 'POST',
      data: { profile: {first_name_one: first_name_one, last_name_one: last_name_one, 
                        first_name_two: first_name_two, last_name_two: last_name_two, 
                        age_one: age_one, age_two: age_two, 
                        hobbies: hobbies, location: location, picture: picture} },
      dataType: 'JSON',
    }).success( profile => {
      window.location = `/users/${user_id}/profiles/${id}`;
      debugger
    }).error( errors => {
      alert(errors)
    }).complete( () => {
      first_name_one.value = null;
      last_name_one.value = null;
    });
  }

  render() {
    return(
      <div className="main-background">
        <div className="container col s12 m10 offset-m1">
          <br />
          <h4>Create Profile</h4>
          <form onSubmit={this.addProfile} >
            <input placeholder="First Name" ref="first_name_one" required={true} />
            <input placeholder="Last Name" ref="last_name_one" required={true} />
            <input placeholder="Age" ref="age_one" required={true} />
            <input placeholder="Partner First Name" ref="first_name_two" required={true} />
            <input placeholder="Partner Last name" ref="last_name_two" required={true} />
            <input placeholder="Partner Age" ref="age_two" required={true} />
            <input placeholder="Hobbies/Interests" ref="hobbies" required={true} />
            <input placeholder="Location (city, state)" ref="location" required={true} />
            <input placeholder="Profile picture link (any url will do)" ref="picture" required={true} />

            <button className="btn">Create</button>
          </form>
          <br />
        </div>
      </div>
    );
  }
}