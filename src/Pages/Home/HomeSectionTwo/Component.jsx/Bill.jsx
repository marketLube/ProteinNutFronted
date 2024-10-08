import React from 'react';

export const Bill = () => {
    return (
        <div>
            <style>
                {`
          .checkout__container {
            display: flex;
            width: 500px;
            // background-color: #f5f5f5;
            border-radius: 8px;
            overflow: hidden;
            height:100vh;
          }
          
          
        //   .checkout__image{
        //     width: 100%;
        //     height: 100%;
        //     object-fit: cover;
        //   }
          
          .checkout__content {
            width: 300rem;
            padding: 20px;
          }
          
          .checkout__item,
          .checkout__details > div {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          }
          
          .checkout__coupon {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            margin-top:40px;
          }
          
          .checkout__coupon input {
            flex: 1;
            padding: 15px;
            border: 1px solid #00004d;
            border-radius: 4px;
          }
          
          .checkout__coupon button {
            color: #00004d;
            border: #00004d;
            padding: 8px 16px;
            cursor: pointer;
            border-radius: 4px;
            border: 1px solid #00004d;
            
          }
          
          .checkout__total {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            margin-top: 20px;
            font-size:20px
          }
          
        //   hr {
        //     border: none;
        //     border-top: 1px solid #00004d;
        //     margin: 20px 0;
        //   }
         
          .checkout__shipping{
          display:flex;
          justify-content: space-between;
          color:#00004d;
          margin-top:20px;
          font-size:17px;
          }

          .checkout__subtotal{
          display:flex;
          justify-content: space-between;
          color:#00004d;
          margin-top:20px;
          font-size:17px;
          }
        
          .checkout__items{
          display:flex;
          color:#00004d;

          }


          .checkout__data{
          display:flex;
          justify-content: space-between;
          color:

          h3{
          font-size:100px;
          }

          }
          .checkout__image{
            width: 40%;
            background-color: ff4d4d;
            border-radius: 6px;
          }
          
        `}
            </style>
            <div className="checkout__container">
                <div className="checkout__content">
                    <div className='checkout__data'>
                        <div className="checkout__items">
                            <div className="checkout__image"></div>
                            <h2>Crunchy Peanut Butter 500g x 1</h2>
                        </div>
                        <h3>$234</h3>
                    </div>

                    <div className="checkout__coupon">
                        <input type="text" placeholder="Coupon Code" />
                        <button>Apply</button>
                    </div>
                    <div className="checkout__subtotal">
                        <p>Subtotal (1 item)</p>
                        <p>$234</p>
                    </div>
                    <div className="checkout__shipping">
                        <p>Shipping</p>
                        <p>Your address</p>
                    </div>
                    <div className="checkout__total">
                        <p>Total</p>
                        <p>$234</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
