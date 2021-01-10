import React, { useEffect, useState }from 'react'
import { Card, Table, Button, Modal, Dropdown, Spacer, Textbox, Textarea } from '../../../../components'
import styles from './Return.module.css'
import { FaDollarSign} from 'react-icons/fa'
import { useModal } from '../../../../hooks'
import { SearchBox } from '../../../../components/Input/SearchBox'
import { Calendar } from '../../../../components/Input/Calendar'

import { ButtonT } from '../../../../components/ButtonT/ButtonT'
import { Tabbutton } from '../../../../components/Tabbutton/Tabbutton'



const headers = ['วันที่', 'รายการ', 'จำนวนเงิน', 'สถานะรายการ', 'ขอเบิกเงิน', ''];



export const IStockApi = () => {
  const modal= useModal();
  const [ErrorData, setErrors] = useState(false);
  const [OrderData, setOrder] = useState([]);
  const [ProductData, setProduct] = useState([]);


  async function fetchData() {
    const response = await fetch("http://localhost:3000/order-products")
      .then(response=>response.json())
      .then(response=>setOrder(response))
      .catch(err => setErrors(err));
    const resp = await fetch("http://localhost:3000/product-n-prices")
      .then(resp => resp.json())
      .then(resp => setProduct(resp));
    
  }


  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>

<div className="flexColumn">
    <div>
      <Card.Container>
        <Card.Body>
        <div className={`${styles.wrapperHeader}`}>
        <div className={`${styles.wrapperHeaderContent} font-xl weight-md`}>
          <FaDollarSign /> <Spacer x={0.5} />เบิก/ถอน
          <Spacer x={1.5} />
          <Dropdown list={['เลือกช่วงเวลา']} />
          <Spacer x={1.5} />
          <Calendar />
        </div>
        <div className='flex'>
          <SearchBox />
        </div>
        </div>
        <Table.Container className="a">
        <Table.Header headers={headers} />
         {OrderData.map((stock, index) => (
           <>
           {ProductData.filter(prod => prod.name=== `${stock.product}`).map((st, key) => (
        <Table.Row key={stock.id}>
          <Table.Col >{stock.created_at}</Table.Col>
          <Table.Col ><u>ออเดอร์#{stock.order_id}</u></Table.Col>
          <Table.Col >{st.total_cost}</Table.Col>
          <Table.Col><ButtonT color={"b"+`${stock.state}`}></ButtonT></Table.Col>
          <Table.Col><Tabbutton color={"b"+`${stock.state}`} size="xl"><FaDollarSign />เบิกเงิน</Tabbutton></Table.Col>
          <Table.Col> </Table.Col>
        </Table.Row>
            ))}
            </>
         ))}
          </Table.Container>
       </Card.Body>
      </Card.Container>
    </div>
  </div>
    </>
  )
}



export default IStockApi;