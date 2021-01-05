class Checkmanagerole extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: false,
        boolChecked: false,
        employees: [],
      };
    }

    componentWillMount = () => {
      this.selectedCheckboxes = new Set();
      const today = new Date();
      const timestamp = today.toISOString();
    }

    componentDidMount() {
        fetch("http://localhost:3000/employees")
            .then(response=>response.json)
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
          <div>
            <div className={`${styles.flexRow}`}>
              <div>เลือกหัวหน้าช่าง</div>
              <div>รายการที่เลือก: {this.state.boolChecked.filter(item => item === true).length}</div>
            </div>
            <Card.Container noShadow className={styles.cardContainer}>
              {this.state.employees
                .filter(employee => employee.roleId === 0 (
                  <Card.Body>
                    <div className={`${styles.detail}`}>
                      <input key ={employee.employee_id} type="checkbox" checked={this.state.boolChecked} onChange={this.toggledoChange} ></input>
                      {employee.first_name + employee.last_name} เบอร์โทรติดต่อ : {employee.phone_number}
                    </div>
                    <div className={`${styles.chiefMac}`}></div>
                  </Card.Body>
                ))}
            </Card.Container>
          </div>
        <div className={`${styles.flexRow}`}>
          <div>เลือกลูกทีมช่าง</div>
          <div>รายการที่เลือก: {this.state.isChecked.filter(item => item === true).length}</div>
        </div>
        <Card.Container noShadow className={styles.cardContainer}>
        {this.state.employees.filter(employee => employee.roleId === 1 
        (
              <Card.Body>
                <div className={`${styles.detail}`}>
                  <input key = {employee.employee_id} type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange}></input>
                  {employee.first_name + " " + employee.last_name}
                </div>
                <div className={`${styles.chiefMac}`}></div>
              </Card.Body>
        ))}
        </Card.Container>
        <div className={styles.flexRow}>
            <Button color="red" onClick = {() => orderdelete(order.order_by)}>
              <BsX />
              ปฏิเสธงาน
            </Button>
            <div className={styles.BBottom}>
              <Button color="grey" onClick={modalManage.close}>
                ปิด
              </Button>
              <Button color="green" onClick = {() => {this.selectedCheckboxes.map(item =>( orderpostapi(order.order_id, pass_value = { date: `${timestamp}`, employee_id: {item}, order_id: `${order.order_id}`})))}}>
                <AiOutlineCheck />
                รับงาน
              </Button>
            </div>
          </div>
      </div>
      );
    }
  }
export default Checkmanagerole;