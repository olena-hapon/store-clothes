import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { setModal } from '../../redux/slices/filter';
import { Product } from '../../Types/Product';
import '../SizeGuide/SizeGuide.scss';

type Props = {
  singleProduct?: Product;
  openModal: boolean;
  setOpenModal: (boolean) => void;
  selectValue: string,
  openSizeInfo: boolean,
  setOpenSizeInfo: (boolean) => void;
}

const Modal:React.FC<Props> = ({
  singleProduct,
  openModal,
  setOpenModal,
  selectValue,
  openSizeInfo,
  setOpenSizeInfo,
}) => {

  let modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  let size = [
    { name: 'chai',
      sizes: ['sizes','s', 'm', 'l', 'xl', 'xxl']
    },
    { 
      name: 'dff',
      chest: ['chaist', '86', '90', '94', '98', '102']
    },
    {
      name: 'klll',
      waist: ['waist', '70', '74', '78', '82', '86']
    }
  ]

  useEffect(() => {
    const closeSelect = (e) => {
      if (modalRef.current !==null && !modalRef.current.contains(e.target)) {
        setOpenModal(false);
        setOpenSizeInfo(false)
        dispatch(setModal(false))
        console.log('select2')
      }
    }

  document.addEventListener('mousedown', closeSelect)
    return () => {
      document.removeEventListener('mousedown', closeSelect)
    }
  })

  return (
    <div className="modal">
      <div className="modal__styled" ref={modalRef}>
        <div className="modal__content">
          <div className="modal__header">
            <button
              className="modal__close"
              onClick={() => {setOpenModal(!openModal); dispatch(setModal(false)); setOpenSizeInfo(false)}}
            >
            </button>
          </div>
          {singleProduct && !openSizeInfo && (
          <>
            <div className="modal__body">
              <div className="modal__icon"></div>
              <h4 className="modal__title">Product added</h4>
              <div className="modal__body__wrapper">
                <img src={singleProduct?.images[0]} alt="" className="modal__img" />
                  <div className="modal__desc">
                    <div className="modal__name">{singleProduct?.title}</div>
                    <div className="modal__price">{singleProduct?.discountPrice}$</div>
                    <div className="modal__size">Size {selectValue.toUpperCase()}</div>
                  </div>
              </div>
            </div>
            <div className="modal__buttons">
              <button
                className="modal__btn"
                onClick={() => {setOpenModal(!openModal); dispatch(setModal(false))}}
              >
                Continue Shopping
              </button>
              <Link
                className="modal__btn"
                to={'/cart'}>Procesed to payment
              </Link>
            </div>
          </>
        )}

        {openSizeInfo && (
          <div>
            {size.map(el => (
              el.sizes?.map(el2 => (
                <>
                <div className={el2 === el2[0] ? "el1" : "el2"}>{el2}</div>
                </>
              ))
            ))}
            {size.map(el => (
              el.chest?.map(el2 => (
                <div className={el2 === el2[0] ? "el1" : "el2"}>{el2}</div>
              ))
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
)}

export default Modal