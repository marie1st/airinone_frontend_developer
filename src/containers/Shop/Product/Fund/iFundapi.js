import React, { useEffect, useState }from 'react'
import {
  Badge,
  Button,
  Card,
  Modal,
  Dropdown,
  Textbox,
  Dropbox,
  Textarea,
  Spacer,
} from '../../../../components'
import styles from './Fund.module.css'

import { useModal } from '../../../../hooks'
import { FaDollarSign } from 'react-icons/fa'





export const IFundApi = () => {
  const modalA = useModal()
  const modalB = useModal()
  const modalC = useModal()
  const [WageData, SetWage] = useState([]);
  const [ItemData, SetItem] = useState([]);
  const [PromoData, SetPromo] = useState([]);
  const [ErrData, SetErrors] = useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:3000/wages")
      .then(res => res.json())
      .then(res => SetWage(res))
      .catch(err => SetErrors(err));
    const response = await fetch("http://localhost:3000/item-prices")
      .then(response => response.json())
      .then(response => SetItem(response));
    const resp = await fetch("http://localhost:3000/premium-setup-costs")
      .then(resp => resp.json())
      .then(resp => SetPromo(resp));
  }


  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
        <Card.Container className={styles.page}>
        <Card.Body className={styles.content}>
          <header className="flex items-center font-lg weight-md">
            <FaDollarSign />
            <Spacer x={0.5} />
            ราคาต้นทุน
          </header>

          {/* Filter customization */}
          <Card.Container className={styles.space}>
            <Card.Header>ค้นหาแบบละเอียด</Card.Header>
            <Card.Footer className={styles.filter}>
              <div className={styles['filter-col']}>
                <label>ประเภท</label>
                <Dropdown list={['Room Air']} />
              </div>
              <div className={styles['filter-col']}>
                <label>ยี่ห้อ</label>
                <Dropdown list={['All']} />
              </div>
              <div className={styles['filter-col']}>
                <label>รุ่น</label>
                <Dropdown list={['All']} />
              </div>
              <div className={styles['filter-col']}>
                <label>BTU/H</label>
                <Dropdown list={['3,400-10,900']} />
              </div>
              <div className={styles['filter-btn']}>
                <Button color="grey">ล้างข้อมูล</Button>
                <Button color="teal" size="xl">
                  ค้นหาแบบละเอียด
                </Button>
              </div>
            </Card.Footer>
          </Card.Container>
          {/* Three columns */}
          <div className={`${styles.space} ${styles.three}`}>
            <Card.Container className={styles['three-col']}>
              <Card.Header className={styles['three-header']}>
                ค่าแรง
                <Button color="yellow" size="sm" onClick={modalA.open}>
                  +เพิ่ม
                </Button>
              </Card.Header>
        {WageData.map((wage,key)=>(
            <div>

              <Card.Body className={styles['three-body']}>
                <Card.Container className={styles.card}>
                  <Card.Body>{wage.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{wage.price}</Card.Body>
                  <Card.Footer>
                    <Button color="red" size="xs">
                      ลบ
                    </Button>
                    <Spacer x={0.25} />
                    <Button color="lightblue" size="sm">
                      แก้ไข
                    </Button>
                  </Card.Footer>
                </Card.Container>
              </Card.Body>
            </div>
        ))}
            </Card.Container>
            <Card.Container className={styles['three-col']}>
              <Card.Header className={styles['three-header']}>
                ค่าของ
                <Button color="yellow" size="sm" onClick={modalB.open}>
                  +เพิ่ม
                </Button>
              </Card.Header>
            {ItemData.map((item,key)=>(
                <div>
                <Card.Body className={styles['three-body']}>
                <Card.Container>
                  <Card.Body>{item.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.price}</Card.Body>
                  <Card.Footer>
                    <Button color="red" size="xs">
                      ลบ
                    </Button>
                    <Spacer x={0.25} />
                    <Button color="lightblue" size="sm">
                      แก้ไข
                    </Button>
                  </Card.Footer>
                </Card.Container>
              </Card.Body>
                </div>
            ))}
              
            </Card.Container>

            <Card.Container className={styles['three-col']}>
              <Card.Header className={styles['three-header']}>
                ค่าติดตั้งพรีเมี่ยม
                <Button color="yellow" size="sm" onClick={modalC.open}>
                  +เพิ่ม
                </Button>
              </Card.Header>
              {PromoData.map((promo,key)=>(
                <Card.Body className={styles['three-body']}>
                <Card.Container>
                  <Card.Body>{promo.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{promo.price}</Card.Body>
                  <Card.Footer>
                    <Button color="red" size="xs">
                      ลบ
                    </Button>
                    <Spacer x={0.25} />
                    <Button color="lightblue" size="sm">
                      แก้ไข
                    </Button>
                  </Card.Footer>
                </Card.Container>
              </Card.Body>
              ))}
              
            </Card.Container>
          </div>
        </Card.Body>
      </Card.Container>

    </div>
  )
}
export default IFundApi;