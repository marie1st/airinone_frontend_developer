import React from 'react'
import { FaCalculator, FaList, FaShoppingCart, FaTrash } from 'react-icons/fa'
import {
  Button,
  Card,
  SearchBox,
  Dropdown,
  Spacer,
  Modal,
  Textbox,
} from '../../../../components'
import { useModal } from '../../../../hooks'
import styles from './Pricing.module.css'
import iPriceapi from './iPriceapi'

export const Pricing = () => {
  const modal = useModal();

  return (
    <>

      <Card.Container className={styles.page}>
        <Card.Body className={styles.fill}>
          <header className="flex items-baseline font-lg weight-md">
            <FaShoppingCart />
            <Spacer x={0.5} />
            รายการสินค้าและราคาขาย
            <Spacer flexFill />
            <SearchBox />
            <Spacer />
            <Button>+เพิ่มสินค้า</Button>
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

          <div className={styles.container}>
            <div className={styles.overflow}>
              {Array(8)
                .fill('')
                .map(() => (
                  <Card.Container className={styles.card}>
                    <Card.Body className={styles.body}>
                      <div className={styles.photo} />
                      <div className={styles.text}>
                        รุ่น : Smile Lite Inverter
                        <br />
                        ยี่ห้อ : Daikin
                        <br />
                        BTU : 12,300 BTU/h
                      </div>
                      <div className={styles.line} />
                      <div className={styles.text}>
                        สถานะสินค้า : ออนไลน์
                        <br />
                        จำนวนสินค้าคงเหลือ : 10
                      </div>
                      <div className={styles.line} />
                      <div className={styles.text}>
                        ราคาขาย : 20,990 บาท
                        <br />
                        โปรโมชั่น : ลดราคา 30%
                        <br />
                        ราคาขายสุทธิ : 14,693 บาท
                      </div>
                      <div className={styles.pricebox}>
                        <s>20,990 บาท</s>
                        <div className={styles.rednumber}>14,693 บาท</div>
                      </div>
                    </Card.Body>
                    <Card.Footer className={styles.footer}>
                      <Button color="red">
                        <FaTrash /> ลบรายการ
                      </Button>
                      <Spacer flexFill />
                      <Button color="blue">
                        <FaList /> ดูรายละเอียด
                      </Button>
                      <Spacer />
                      <Button onClick={modal.open}>
                        <FaCalculator /> คำนวณ
                      </Button>
                    </Card.Footer>
                  </Card.Container>
                ))}
            </div>
          </div>
        </Card.Body>
      </Card.Container>

      {/* Modal here */}
      <Modal modal={modal} className={styles.modalbox}>
        <Modal.Header>+ คำนวณราคาสินค้า</Modal.Header>
        <Modal.Body>
          <Card.Container className={styles.greybox} noShadow>
            <Card.Body>
              <div className="weight-md">สินค้า</div>
              <div className={styles.row}>
                <div className={styles.col}>
                  <label>อุปกรณ์</label>
                  <Dropdown
                    list={['Smile Lite Inverter']}
                    className={styles.dropdown}
                  />
                </div>
                <Spacer />
                <div className={styles.col}>
                  <label>ยี่ห้อ</label>
                  <Dropdown list={['Daikin']} className={styles.dropdown} />
                </div>
                <Spacer />
                <div className={styles.col}>
                  <label>BTU/h</label>
                  <Dropdown list={['20,000']} className={styles.dropdown} />
                </div>
              </div>
            </Card.Body>
          </Card.Container>
          <div className={styles.row}>
            <Card.Container className={styles.greybox} noShadow>
              <Card.Body>
                <div className="weight-md">ตั้งราคาขาย</div>
                <label>ราคาขาย</label>
                <Textbox className={styles.input} />
                <label>โปรโมชั่น</label>
                <Dropdown list={['ลดราคา1 (500)']} className={styles.input} />
                <label>ราคาติดตั้ง กรณีพรีเมี่ยม</label>
                <Dropdown
                  list={['พรีเมี่ยมA (1,500)']}
                  className={styles.input}
                />
              </Card.Body>
            </Card.Container>
            <Card.Container className={styles.greybox} noShadow>
              <Card.Body>
                <div className="weight-md">ราคาต้นทุน</div>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <label>ราคาทุน</label>
                    <Textbox className={styles.input} />
                  </div>
                  <Spacer />
                  <div className={styles.col}>
                    <label>ค่าแรง</label>
                    <Dropdown
                      list={['ค่าแรง1 (500)']}
                      className={styles.dropdown}
                    />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <label>ค่าของ</label>
                    <Dropdown
                      list={['20,000 BTU (700)']}
                      className={styles.dropdown}
                    />
                  </div>
                  <Spacer />
                  <div className={styles.col}>
                    <label>ค่าใช้จ่ายอื่นๆ</label>
                    <Textbox className={styles.input} />
                  </div>
                </div>
                <label>ราคาทุนทั้งหมด</label>
                <Textbox />
              </Card.Body>
            </Card.Container>
          </div>
          <Card.Container className={styles.greybox} noShadow>
            <Card.Body>
              <div className="weight-md">คำนวณกำไร</div>
              <div className={styles.row}>
                <div className={styles.col}>
                  <label>ราคาขายสุทธิ</label>
                  <Textbox className={styles.input} />
                </div>
                <Spacer />
                <div className={styles.col}>
                  <label>กำไร (บาท)</label>
                  <Textbox className={styles.input} />
                </div>
                <Spacer />
                <div className={styles.col}>
                  <label>กำไร %</label>
                  <Textbox className={styles.input} />
                </div>
              </div>
            </Card.Body>
          </Card.Container>
        </Modal.Body>
        <Modal.Footer className={styles.row}>
          <Button color="red">
            <FaTrash />
            ลบรายการ
          </Button>
          <Button>ตั่งค่าโปรโมชั่น</Button>
          <Spacer flexFill />
          <Button color="grey">ปิด</Button>
          <Button color="green">ยืนยัน</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
