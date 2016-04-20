class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.showProfile = this.showProfile.bind(this)
    this.state = { edit: false };
  }

  showProfile() {
    window.location.href = `/profile/${this.props.id}`;
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  updateProfile() {
    let profile = { name: this.refs.name.value, description: this.refs.description.value }
    this.toggleEdit();
    this.props.updateProfile(this.props.id, profile);
    $.ajax({
      url: `/profiles/${id}`,
      type: 'PUT',
      dataType: 'JSON'
    })
  }

  show() {
    return(
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{ this.props.name }</span>
            <p>{ this.props.description }</p>
          </div>
          <div className="card-action">
            <button onClick={ () => this.props.delete(this.props.id)} className="btn red">Delete</button>
            <button onClick={this.toggleEdit} className="btn blue">Edit</button>
            <button onClick={this.showProfile} className="btn">Show</button>
          </div>
        </div>
      </div>
    );
  }

  edit() {
    return(
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <input placeholder={this.props.name} defaultValue={this.props.name} ref="name" required={true} />
          <input placeholder={this.props.description} defaultValue={this.props.description} ref="description" required={true} />
          <div className="card-action">
            <button onClick={this.toggleEdit} className="btn blue">Cancel</button>
            <button onClick={this.updateProfile} className="btn">Save</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.edit)
      return this.edit();
    else
      return this.show();
  }

}







































