import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Form extends Component {
	constructor(props) {
		super(props);
		
		this.state = {};
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		let name = this.refs.name.value;
		let role = this.refs.role.value;
		let phone = this.refs.phone.value;
		let birthday = this.refs.birthday.value;
		 if(name) {
			 this.props.onAdd(name, role, phone, birthday);
			 this.refs.name.value = '';
			  this.refs.role.value = '';
			 this.refs.phone.value = '';
			 this.refs.birthday.value = '';
		 }
	}
	render() {
		return(
		   <form onSubmit={this.handleSubmit}>
		      <input type="text" ref="name" placeholder="Введите имя" />
			  <input type="text" ref="role" placeholder="Введите должность" />
			  <input type="text" ref="phone" placeholder="Введите телефон" />
			  <input type="text" ref="birthday" placeholder="Введите дату рождения" />
			  
			  <Button type="submit">Добавить сотрудника</Button>
		   </form>
		);
	}
}

Form.propTypes = {
	onAdd: PropTypes.func.isReuired
};

export default Form;