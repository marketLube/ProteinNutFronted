import React from "react";
import { useForm } from "react-hook-form";

export const Bill = () => {
  const form = useForm();
  const { register, handleSubmit } = form;

  const onSubmitftn = (data) => {
    console.log(data);
  };

  return (
    <div>
      <style>
        {`
          // .checkout__container {
          //   display: flex;
          //   flex-direction: column;
          //   width: 100%;
          //   max-width: 500px;
          //   margin: auto;
          //   border-radius: 8px;
          //   overflow: hidden;
          //   padding: 20px;
          //   height: auto;
          //   background-color:white;
          // }
          
          .checkout__content {
            width: 100%;
            // background-color:#ff6666;
            
          }
          
          .checkout__item,
          .checkout__details > div {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          }
          
          .checkout__coupon {
            display: flex;
            flex-direction: row;
            gap: 10px;
            margin-bottom: 20px;
            margin-top: 40px;
          }
          
          .checkout__coupon input {
            flex: 1;
            padding: 15px;
            border: 1px solid #00004d;
            border-radius: 4px;
          }
          
          .checkout__coupon button {
            color: #00004d;
            border: 1px solid #00004d;
            padding: 8px 16px;
            cursor: pointer;
            border-radius: 4px;
          }
          
          .checkout__total {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            margin-top: 20px;
            font-size: 20px;
          }
          
          .checkout__shipping, .checkout__subtotal {
            display: flex;
            justify-content: space-between;
            color: #00004d;
            margin-top: 20px;
            font-size: 17px;
          }

          .checkout__items {
            display: flex;
            align-items: center;
            color: #00004d;
            margin-bottom: 20px;
          }

          .checkout__image {
            width: 40px;
            height: 40px;
            background-color: #ff4d4d;
            border-radius: 6px;
            margin-right: 20px;
          }

          .checkout__data h2 {
            font-size: 18px;
            margin: 0;
            flex: 1;
          }

          .checkout__data h3 {
            font-size: 20px;
            margin: 0;
          }

          @media (min-width: 600px) {
            .checkout__container {
              flex-direction: row;
              height: 100vh;
            }
            .checkout__content {
              width: 70%;
              padding: 20px;
            }
            .checkout__image {
              width: 40%;
              background-color: #ff4d4d;
              border-radius: 6px;
            }
          }

          @media (min-width: 768px) {
            .checkout__container {
              max-width: 700px;
            }
            .checkout__image {
              width: 50px;
              height: 50px;
            }
            .checkout__data h2 {
              font-size: 20px;
            }
            .checkout__data h3 {
              font-size: 24px;
            }
            .checkout__total {
              font-size: 24px;
            }
            .checkout__shipping, .checkout__subtotal {
              font-size: 20px;
            }
          }

          @media (min-width: 1024px) {
            .checkout__container {
              max-width: 900px;
            }
            .checkout__image {
              width: 60px;
              height: 60px;
            }
            .checkout__data h2 {
              font-size: 22px;
            }
            .checkout__data h3 {
              font-size: 26px;
            }
            .checkout__total {
              font-size: 26px;
            }
            .checkout__shipping, .checkout__subtotal {
              font-size: 22px;
            }
          }
        `}
      </style>
      <div className="checkout__container">
        <div className="checkout__content">
          <form onSubmit={handleSubmit(onSubmitftn)}>
            <div className="checkout__data">
              <div className="checkout__items">
                <div className="checkout__image"></div>
                <h2>Crunchy Peanut Butter 500g x 1</h2>
                <h3>$234</h3>
              </div>
            </div>

            <div className="checkout__coupon">
              <input
                type="text"
                placeholder="Coupon Code"
                {...register("coupon")}
              />
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
          </form>
        </div>
      </div>
    </div>
  );
};
