class Checkmanage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: true,
        employees: [],
      };
    }
    componentDidMount() {
        fetch("http://localhost:3000/employees")
            .then(response=>response.json)
            .then((employees) => this.setState({ employees }))
    }

    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }
    render() {
      return (
        <div>
            <div className={`${styles.flexRow}`}>
              <div>เลือกหัวหน้าช่าง</div>
              <div>รายการที่เลือก: {this.state.isChecked.filter(props => props.checked).length}</div>
            </div>
            <Card.Container noShadow className={styles.cardContainer}>
              {this.state.employees
                .filter(employee => employee.roleId === 0 (
                  <Card.Body>
                    <div className={`${styles.detail}`}>
                      <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} ></input>
                      {employee.first_name + employee.last_name} เบอร์โทรติดต่อ : {employee.phone_number}
                    </div>
                    <div className={`${styles.chiefMac}`}></div>
                  </Card.Body>
                ))}
            </Card.Container>
          </div>
      );
    }
  }
export default Checkmanage;