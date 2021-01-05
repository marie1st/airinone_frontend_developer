
import React from 'react'
import { isThisTypeNode } from 'typescript';
import { CustomerCard } from "../src/containers/Shop/Customer/CustomerCard";
import styles from './containers/Shop/Customer/Customer.module.css';

class customerMName extends React.Component {
 
    constructor(props, context) {
        super(props, context);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/customers")
            .then(response => response.json())
            .then((posts) => this.setState({ posts }));
        let arr = [];
        this.state.posts.map(post => (
            arr.push(post)
        ));
    }
    findElement(arrayi, propName, propValue) {
        for(i=0; i <arrayi.length;i++){
            if(arrayi[i][propName] == propValue){
                return arr[i]
            }
        }

    }
    render() {
        if(this.state.posts.length === 0 ){
            return <div>React Fetch Loading</div>

        }

        return (
            <div className="user-container">
              {this.state.posts.map(post => 
               (
                  <div className={`${styles.wrapperCardBodyC2}`}>
                  <div>ชื่อ : { post.find[post.id === order_by].first_name}</div>
                  <div>
                    ที่อยู่ : 252 ถ.รัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง
                    กรุงเทพฯ 10310
                  </div>
                </div>
              ))}
            </div>
        )
    }
}

export default Posts;