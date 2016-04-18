class NewProfile extends React.Component {
  constructor(props) {
    super(props);
    this.addProfile = this.addProfile.bind(this);
  }

  addProfile(e) {
    e.preventDefault();
    let user_id = this.props.current_user;
    let first_name_one = this.refs.first_name_one;
    let last_name_one = this.refs.last_name_one;
    let first_name_two = this.refs.first_name_two;
    let last_name_two = this.refs.last_name_two;
    let age_one = this.refs.age_one;
    let age_two = this.refs.age_two;
    let hobbies = this.refs.hobbies;
    let location = this.refs.location;
    $.ajax({
      url: `/users/${user_id}/profiles`,
      type: 'POST',
      data: { profile: {first_name_one: first_name_one.value, last_name_one: last_name_one.value, 
                        first_name_two: first_name_two.value, last_name_two: last_name_two.value, 
                        age_one: age_one.value, age_two: age_two.value, 
                        hobbies: hobbies.value, location: location.value } },
      dataType: 'JSON',
    }).success( user_id => {
      this.props.addProfile(user_id);
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
            <input placeholder="Location" ref="location" required={true} />
            <button className="btn">Create</button>
          </form>
          <br />
        </div>
      </div>
    );
  }
}