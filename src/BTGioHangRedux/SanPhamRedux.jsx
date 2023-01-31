import React, { Component } from 'react'

import { connect } from 'react-redux';

class SanPhamRedux extends Component {
  render() {
    console.log(this.props)
    let { phone } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={phone.hinhAnh} alt="" />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <p className="card-text">{phone.giaBan}</p>
          <button onClick={() => {
            // Đẩy dữ liệu lên store
            //C1: sử dụng hàm dispatch(): gửi dữ liệu từ component lên trên store
            //để đẩy data lên store thì phải tạo action object
            const action = {
              type:"THEM_GIO_HANG",//bắt buộc phải có
              sanPham:phone
            }
            
            this.props.dispatch(action)

          }}
            data-toggle="modal" data-target="#modelId" className='btn btn-danger'>Thêm giỏ hàng</button>
        </div>
      </div>
    )
  }
}


// mapStateToProps: chỉ tạo khi cần lấy dữ liệu từ store xuống Component
//Nếu không cần lấy dữ liệu thì không tạo 



// có thể export trực tiếp component mới của connect tạo ra
export default connect()(SanPhamRedux);