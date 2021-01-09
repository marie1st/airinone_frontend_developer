import React from 'react'
import { FaShopify } from 'react-icons/fa'
import {
  Button,
  Card,
  Dropdown,
  Modal,
  Spacer,
  Textarea,
  Textbox,
} from '../../../../components'
import { useModal } from '../../../../hooks'
import styles from './Promotion.module.css'

export const Promotion = () => {
  const modalA = useModal()
  const modalB = useModal()
  const modalC = useModal()

  return (
    <>
      <Card.Container className={styles.page}>
        <Card.Body className={styles.content}>
          <header className="flex  items-baseline font-lg weight-md">
            <FaShopify />
            <Spacer x={0.5} />
            โปรโมชั่น
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
                ลดราคาสินค้า
                <Button color="yellow" size="sm" onClick={modalA.open}>
                  +เพิ่ม
                </Button>
              </Card.Header>
              <Card.Body className={styles['three-body']}>
                <Card.Container className={styles.card}>
                  <Card.Body>ABC</Card.Body>
                  <Card.Footer>
                    <Button color="red" size="xs">
                      D
                    </Button>
                    <Spacer x={0.25} />
                    <Button color="lightblue" size="sm">
                      แก้ไข
                    </Button>
                  </Card.Footer>
                </Card.Container>

                <Card.Container className={styles.card}>
                  <Card.Body>ABC</Card.Body>
                  <Card.Footer>
                    <Button color="red" size="xs">
                      D
                    </Button>
                    <Spacer x={0.25} />
                    <Button color="lightblue" size="sm">
                      แก้ไข
                    </Button>
                  </Card.Footer>
                </Card.Container>
              </Card.Body>
            </Card.Container>

            <Card.Container className={styles['three-col']}>
              <Card.Header className={styles['three-header']}>
                ลดราคารูปแบบ %
                <Button color="yellow" size="sm" onClick={modalB.open}>
                  +เพิ่ม
                </Button>
              </Card.Header>
              <Card.Body className={styles['three-body']}>
                <Card.Container>
                  <Card.Body>ABC</Card.Body>
                  <Card.Footer>
                    <Button color="red" size="xs">
                      D
                    </Button>
                    <Spacer x={0.25} />
                    <Button color="lightblue" size="sm">
                      แก้ไข
                    </Button>
                  </Card.Footer>
                </Card.Container>
              </Card.Body>
            </Card.Container>

            <Card.Container className={styles['three-col']}>
              <Card.Header className={styles['three-header']}>
                ของแถม
                <Button color="yellow" size="sm" onClick={modalC.open}>
                  +เพิ่ม
                </Button>
              </Card.Header>
              <Card.Body className={styles['three-body']}>
                <Card.Container>
                  <Card.Body>ABC</Card.Body>
                  <Card.Footer>
                    <Button color="red" size="xs">
                      D
                    </Button>
                    <Spacer x={0.25} />
                    <Button color="lightblue" size="sm">
                      แก้ไข
                    </Button>
                  </Card.Footer>
                </Card.Container>
              </Card.Body>
            </Card.Container>
          </div>
        </Card.Body>
      </Card.Container>

      {/* ModalA here */}
      <Modal modal={modalA}>
        <Modal.Header>+ ลดราคาสินค้า</Modal.Header>
        <Modal.Body>
          <div className={styles.row}>
            <div className={styles.col}>
              <label>ประเภท</label>
              <Dropdown className={styles.width} />
            </div>
            <div className={styles.col}>
              <label>BTU/H</label>
              <Dropdown className={styles.width} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <label>ชื่อ</label>
              <Textbox className={styles.width} />
            </div>
            <div className={styles.col}>
              <label>ราคา</label>
              <Textbox className={styles.width} />
            </div>
          </div>
          <label>รายละเอียด</label>
          <Textarea className={styles.width} />
        </Modal.Body>
        <Modal.Footer className="flex">
          <Button color="red">ลบทั้งหมด</Button>
          <Spacer flexFill />
          <Button color="grey">ปิด</Button>
          <Spacer />
          <Button color="green">บันทึก</Button>
        </Modal.Footer>
      </Modal>

      {/* ModalB here */}
      <Modal modal={modalB}>
        <Modal.Header>+ ลดราคารูปแบบ %</Modal.Header>
        <Modal.Body>
          <div className={styles.row}>
            <div className={styles.col}>
              <label>ประเภท</label>
              <Dropdown list={[]} className={styles.width} />
            </div>
            <div className={styles.col}>
              <label>BTU/H</label>
              <Dropdown list={[]} className={styles.width} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <label>ชื่อ</label>
              <Textbox className={styles.width} />
            </div>
            <div className={styles.col}>
              <label>ราคา</label>
              <Textbox className={styles.width} />
            </div>
          </div>
          <label>รายละเอียด</label>
          <Textarea className={styles.width} />
        </Modal.Body>
        <Modal.Footer className="flex">
          <Button color="red">ลบทั้งหมด</Button>
          <Spacer flexFill />
          <Button color="grey">ปิด</Button>
          <Spacer />
          <Button color="green">บันทึก</Button>
        </Modal.Footer>
      </Modal>

      {/* ModalC here */}
      <Modal modal={modalC}>
        <Modal.Header>+ ของแถม</Modal.Header>
        <Modal.Body>
          <div className={styles.row}>
            <div className={styles.col}>
              <label>ประเภท</label>
              <Dropdown list={[]} className={styles.width} />
            </div>
            <div className={styles.col}>
              <label>BTU/H</label>
              <Dropdown list={[]} className={styles.width} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <label>ชื่อ</label>
              <Textbox className={styles.width} />
            </div>
            <div className={styles.col}>
              <label>ราคา</label>
              <Textbox className={styles.width} />
            </div>
          </div>
          <label>รายละเอียด</label>
          <Textarea className={styles.width} />
        </Modal.Body>
        <Modal.Footer className="flex">
          <Button color="red">ลบทั้งหมด</Button>
          <Spacer flexFill />
          <Button color="grey">ปิด</Button>
          <Spacer />
          <Button color="green">บันทึก</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
