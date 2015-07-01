var React = require('react');

var Repos = React.createClass({
  render: function(){
    return (
      <div>
        Repos<br/>
        Username: {this.props.username}<br/>
        repos: {this.props.repos}
      </div>
    )
  }
});

module.exports = Repos;