import React from 'react'
import styles from './Notification.module.css';
import {  
    Badge,
    Button,
    Card,
    Modal,
    Dropdown,
    Textbox,
    Dropbox,
    Spacer
} from '../../../../../src/components'


import { AiOutlineCheck } from 'react-icons/ai'
import { BsX } from 'react-icons/bs'
import orderdelete from '../../../../orderdelete'
import orderpostapi from '../../../../orderpostapi'

class sectiontwo extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            posts: [],
            customers: [],
            employees: [],
            isChecked: false,
            boolChecked: false,
            employees: [],
        };
    }
    componentWillMount = () => {

        this.selectedCheckboxes = new Set();
    }

    componentDidMount() {


        fetch("http://localhost:3000/order-products")
            .then(response => response.json())
            .then((posts) => this.setState({ posts }))
        this.state.posts.forEach(element => {
            fetch("http://localhost:3000/customers/"+element.order_by)
                .then(response => response.json())
                .then((customers) => this.setState({ customers }))
        });
        fetch("http://localhost:3000/employees")
            .then(response => response.json())
            .then((employees) => this.setState({ employees }))
    
    }

    toggleChange = key => {
        if(this.selectedCheckboxes.has(key)){
          this.selectedCheckboxes.delete(key)
        }else {
          this.selectedCheckboxes.add(key)
        }
        this.setState({
          isChecked: !this.state.isChecked,
        });
    }
  
      toggledoChange = key => {
        if(this.selectedCheckboxes.has(key)) {
          this.selectedCheckboxes.delete(key)
        }else {
          this.selectedCheckboxes.add(key)
        }
        this.setState({
          boolChecked: !this.state.isChecked,
        });
    }
  
    render() {
        return (
        <div>
            {this.state.orders.map(order =>(
                <div>
                    {this.state.customers.map(customer =>(
                        <div>
                            {this.state.employees.map(employee =>(
                                <div>
                                <div className="flex flex-row">
                                <Button size="md" color="green">
                                <AiOutlineCheck />
                                    รับงาน
                                </Button>
                                <Spacer x={0.25} />
                                <Button size="md" color="red" onClick = {() => orderdelete(order.order_id)}>
                                <BsX />
                                    ปฏิเสธงาน
                                </Button>
                                </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
        )
    }
}
export default sectiontwo;