import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import User from './User';
import Form from './Form';
import ToolBar from './ToolBar';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			users: this.props.initialData,
		};
	}
	
	handleStatusChange = (id) => {
		let users = this.state.users.map(user => {
			if(user.id === id) {
				user.isArchive = !user.isArchive;
			}
			
			return user;
		})
		this.setState({ users });
	}
	
	handleDelete = (id) => {
		let users = this.state.users.filter(user => user.id !== id);
		
		this.setState({ users })
	}
	
	nextId() {
		this._nextId = this._nextId || 18;
		return this._nextId++;
	}
	
	handleAdd = (name, role, phone, birthday) => {
		let user = {
			id:this.nextId(),
			name,
			role,
			phone,
			birthday,
			isArchive: false
		};
		let users = [...this.state.users, user];
		this.setState({ users });
	}
	
	handleEdit = (id, name, role, phone, birthday) => {
		let users = this.state.users.map(user => {
			if(user.id === id) {
				user.name = name;
				user.role = role;
				user.phone = phone;
				user.birthday = birthday;
			}
			return user;
		});
		this.setState({ users });
	}
	
	sortByName = (name) => {
		
     let users = this.state.users.sort((a, b) => {
             if (a.name > b.name) {
               return 1;
               }
             if (a.name < b.name) {
               return -1;
               }
              return 0;
            });
        this.setState({ users });
    };

    sortByAge = (birthday) => {
        
        let users = this.state.users.sort((a, b) => {
            if (a.birthday > b.birthday) {
               return 1;
               }
             if (a.birthday < b.birthday) {
               return -1;
               }
              return 0;
            });
        this.setState({ users });
    };
	
	render() {
		return (
	    <main>
		   <Header title={this.props.title} users={this.state.users} />
		   <ToolBar sortByName={this.sortByName} sortByAge={this.sortByAge}/>
		   <Form onAdd={this.handleAdd} />
		   <section>
		       {this.state.users.map(user => <User key={user.id}
				                              {...user}
                                              onStatusChange={this.handleStatusChange}
											  onDelete={this.handleDelete}
											  onEdit={this.handleEdit}
											  />)}
		      
		   </section>
		   
		</main>
	   );
	}
	
}

App.propTypes = {
	title:PropTypes.string,
	initialData:PropTypes.array.isRequired,

};

App.defaultProps = {
	title:'Тестовое задание'
};

export default App;

 