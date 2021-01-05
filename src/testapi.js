
import React from 'react'
import { CustomerCard } from "../src/containers/Shop/Customer/CustomerCard";
import styles from './containers/Shop/Customer/Customer.module.css';

class Posts extends React.Component {
 
    constructor(props, context) {
        super(props, context);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/customers")
            .then(response => response.json())
            .then((posts) => this.setState({ posts }))
    }

    render() {
        if(this.state.posts.length === 0 ){
            return <div>React Fetch Loading</div>

        }

        return (
            <div className="user-container">
              {this.state.posts.map(post => (
                  <CustomerCard
                      name={post.first_name + " " + post.last_name} 
                      phone={post.phone_number}
                      address= {post.address+ " " + post.district + " " + post.subdistrict + " " + post.postcode + " " + post.country}
                      className={`${styles['customer-box']}`}
                      id={post.id}
                  />
              ))}
            </div>
        )
    }
}

export default Posts;