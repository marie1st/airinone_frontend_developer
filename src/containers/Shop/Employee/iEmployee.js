
import React from 'react'
import { Card, Button } from '../../../components'
import { CgProfile } from 'react-icons/cg'
import { EmployeeCard } from './EmployeeCard'
import styles from './Employee.module.css'

class IEmployee extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/employees")
            .then(response => response.json())
            .then((posts) => this.setState({ posts }))
    }

    render() {
        let className = "";
        if(this.state.posts.length === 0 ){
            return <div>React Fetch Loading</div>

        }

        return (
            <div>
              {this.state.posts.map(post=>(
                  <div>
                  <EmployeeCard
                    role={post.role}
                    name={post.first_name + " " +post.last_name}
                    phone={post.phone_number}
                    address={post.address + " " + post.subdistrict + " "+ post.country + " "+ post.postcode}
                    className={`${styles['employee-box']}`}
                    id={post.employee_id}
                  />
                
                  </div>
            ))}
                
            </div>
        )
    }
}

export default IEmployee;