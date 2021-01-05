import React from 'react'
import { Card, Table, Button, Dropdown, Spacer } from '../../../../components/'
import styles from './Stock.module.css'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../hooks'
import { FaDollarSign }from 'react-icons/fa'
import { SearchBox } from '../../../../../src/components/Input/SearchBox'
import { Calendar } from '../../../../../src/components/Input/Calendar'

/**
 * Define each field of headers
 */
const headers = ['วันที่', 'รายการ', 'จำนวนเงิน', 'สถานะรายการ', 'ขอเบิกเงิน', ''];
export const Stock = observer(() => {
  const { productStore } = useStore()

  return (
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

        <Table.Container className={styles.space}>
          <Table.Header headers={headers} />
          {productStore.products.map((stock, index) => (
            <Table.Row key={stock.id}>
              <Table.Col>{index + 1}</Table.Col>
              <Table.Col>{stock.product_name}</Table.Col>
              <Table.Col>{stock.product_brand}</Table.Col>
              <Table.Col>{stock.product_generation}</Table.Col>
              <Table.Col>{stock.product_price}</Table.Col>
              <Table.Col>_</Table.Col>
            </Table.Row>
          ))}
        </Table.Container>
      </Card.Body>
    </Card.Container>
  )
})
