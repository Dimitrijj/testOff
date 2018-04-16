import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Button from './Button';

class User extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			editing: false
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		let name = this.refs.name.value;
		let role = this.refs.role.value;
		let phone = this.refs.phone.value;
		let birthday = this.refs.birthday.value;
		
		this.props.onEdit(this.props.id, name, role, phone, birthday);
		this.setState({ editing: false });
 	}
	
	render() {
	  return (this.state.editing ?
	     <form onSubmit={this.handleSubmit}>
		    <input type="text" ref="name" defaultValue={this.props.name} />
			<input type="text" ref="role" defaultValue={this.props.role} />
			<input type="text" ref="phone" defaultValue={this.props.phone} />
			<input type="text" ref="birthday" defaultValue={this.props.birthday} />
			<Checkbox checked={this.props.isArchive} onChange={() => this.props.onStatusChange(this.props.id)}/>В архиве
			 <Button type="submit">Сохранить</Button>
		</form>
	  :
	    <div>
		   <span>{this.props.name} {this.props.role} {this.props.phone}</span>
		   <Button onClick={()=> this.setState({ editing: true})}>Редактировать</Button>
		   <Button onClick={()=> this.props.onDelete(this.props.id)}>Удалить</Button>
		</div>
		
	   );
	}
	
}

User.propTypes = {
	name: PropTypes.string,
	checked: PropTypes.bool.isRequired,
	onStatusChange: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired
};

export default User;