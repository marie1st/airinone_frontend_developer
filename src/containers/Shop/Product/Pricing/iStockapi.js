import React, { useEffect, useState }from 'react'
import { Card, Table, Button, Modal, Dropdown, Spacer, Textbox, Textarea } from '../../../../components'
import styles from './Pricing.module.css'
import { useModal } from '../../../../hooks'
import { SearchBox } from '../../../../components/Input/SearchBox'
import { FaCalculator, FaList, FaShoppingCart, FaTrash } from 'react-icons/fa'
import productdelete from './productdelete'





export const IStockApi = () => {
  const modal= useModal();
  const [ErrorData, setErrors] = useState(false);
  const [PromoData, setPromo] = useState([]);
  const [ProductData, SetProduct] = useState([]);
  const [EntireProductData, SetEntireProduct] = useState([]);
  const [WarehouseData, SetWarehouse] = useState([]);
  const [SearchDetail, setSearch] = useState([{brand: "", name: "", btu: ""}]);


  async function fetchData() {
    const res = await fetch("http://localhost:3000/promotional-products-giveaways")
      .then(res => res.json())
      .then(res => setPromo(res))
      .catch(err => setErrors(err));
    const response = await fetch("http://localhost:3000/product-n-prices")
      .then(response => response.json())
      .then(response => SetProduct(response));
    const resp = await fetch("http://localhost:3000/product-n-prices")
      .then(resp => resp.json())
      .then(resp => SetEntireProduct(resp));
    const respn = await fetch("http://localhost:3000/warehouses")
      .then(respn => respn.json())
      .then(respn => SetWarehouse(respn));
  }


  useEffect(() => {
    fetchData();
  }, [])

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
                <Dropdown list={['All']} id="brand" onChange={(event) => {setSearch({...SearchDetail, [event.target.id]: event.target.value}) }}/>
              </div>
              <div className={styles['filter-col']}>
                <label>รุ่น</label>
                <Dropdown list={['All']} id="name" onChange={(event) => {setSearch({...SearchDetail, [event.target.id]: event.target.value}) }}/>
              </div>
              <div className={styles['filter-col']}>
                <label>BTU/H</label>
                <Dropdown list={['3,400-10,900']} id="btu" onChange={(event) => {setSearch({...SearchDetail, [event.target.id]: event.target.value}) }}/>
              </div>
              <div className={styles['filter-btn']}>
                <Button color="grey">ล้างข้อมูล</Button>
                <Button color="teal" size="xl" >
                  ค้นหาแบบละเอียด
                </Button>
              </div>
            </Card.Footer>
          </Card.Container>
  {ProductData.map((prod, key)=>(
  <>
    {PromoData.filter(promod=> promod.name === `${prod.name}`).map((promo, key)=>(
      <>
   <div className={styles.container}>
            <div className={styles.overflow}>
                  <Card.Container className={styles.card}>
                    <Card.Body className={styles.body}>
                      <div className={styles.photo} />
                      <div className={styles.text}>
                        รุ่น : {prod.name}
                        <br />
                        ยี่ห้อ : {prod.brand}
                        <br />
                        BTU : {prod.btu} BTU/h
                      </div>
                      <div className={styles.line} />
                      {WarehouseData.filter(ware=> ware.name=`${prod.name}`).map((w, n)=>(
                      <div className={styles.text}>
                        สถานะสินค้า : ออนไลน์
                        <br />
                        จำนวนสินค้าคงเหลือ : {w.amount}
                      </div>
                ))}
                      
                      <div className={styles.line} />
                      <div className={styles.text}>
                        ราคาขาย : {prod.selling_price} บาท
                        <br />
                        โปรโมชั่น : {promo.description}
                        <br />
                        ราคาขายสุทธิ : {promo.price} บาท
                      </div>
                      <div className={styles.pricebox}>
                        <s>{ProductData.selling_price} บาท</s>
                        <div className={styles.rednumber}>{promo.price} บาท</div>
                      </div>
                    </Card.Body>
                    <Card.Footer className={styles.footer}>
                      <Button color="red" onClick={()=>productdelete(prod.id)}>
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
            </div>
          </div>
        

      </>
    ))}
    </>
  ))}

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
        {ProductData.map((pr, num)=>(
        <Modal.Footer className={styles.row}>
          <Button color="red" onClick ={()=>productdelete(pr.id)}>
            <FaTrash />
            ลบรายการ
          </Button>
          <Button>ตั่งค่าโปรโมชั่น</Button>
          <Spacer flexFill />
          <Button color="grey">ปิด</Button>
          <Button color="green">ยืนยัน</Button>
        </Modal.Footer>
        ))}
      </Modal>
  
       
    </>
  )
}



export default IStockApi;