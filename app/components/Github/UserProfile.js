var React = require('react');

var UserProfile = React.createClass({
  render: function(){
    return (
      <div>
        UserProfile<br/>
        Username: {this.props.username}<br/>
        bio: {this.props.bio}
      </div>
    )
  }
});

module.exports = UserProfile;