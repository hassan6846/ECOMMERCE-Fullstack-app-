import React from 'react';
import { Link, useParams } from 'react-router-dom';
// SWIPPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules';
// components
import TrendingCarsoul from '../../../components/TrendingSlider/TrendingCarsoul';
import Cathead from '../../../components/CatalogueHeading/Catalogue_Heading';
import Faq from "react-faq-component"
import Breadcrumb from "../../../Layouts/BreadCrumb/BreadCrumb"
// css
import './Singleproduct.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { blinkSVG } from '../../../helpers/GlobalVariables';
//lazy loading component
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
const Singleproduct = () => {
  const mockImages = [
"https://charcoal.com.pk/cdn/shop/files/DSC01422.jpg?v=1702534486&width=700",
"https://charcoal.com.pk/cdn/shop/files/DSC01422.jpg?v=1702534486&width=700",
"https://charcoal.com.pk/cdn/shop/files/DSC01422.jpg?v=1702534486&width=700",
"https://charcoal.com.pk/cdn/shop/files/DSC01422.jpg?v=1702534486&width=700",

  ];
  const faqdata = {
    title: "",
    rows: [
      {
        title: `PRODUCT DESCRIPTION`,
        content: `   <ol> 
      <li> WOMEN'S MOCASSINS SOFT These Stylish Pumps By Kelly Are Designed To Go Well With Your Wardrobe, Cute And Comfortable, All Day Long </li>
      <li>  Made With Good Quality Synthetic Material Which Gives Them Durability </li>
     <li> The Shoe Features A Classic Round-Toe Design For A Simple Yet Gorgeous Look</li> </ol>`
      },]
  }
  const OpenConfig={
    animate: true,
    tabFocus: true,
    openOnload: 0
  }
  //params
     const {title} =useParams()
  return (
    <>

    
      <Breadcrumb />
      <section className='single_product_page_container'>
        <div className='single_wrapper_80'>
          <div className='images_overflow_single'>
            <div className='container_desktop_images_preview'>
              {mockImages.map((imageUrl, index) => (
                <LazyLoadImage delayTime="1" width="48%" loading="lazy" effect="blur" className='single_images_shop' key={index} src={imageUrl} alt="product_imgs" />
              ))}
            </div>
            {/* MOBILE PREVIEW SLIDES PRODUCT NEEDED TO ADD LOADER */}
            <Swiper pagination={true} modules={[Pagination]} className='swiper_main_all' >
              {mockImages.map((imageUrl, index) => (
                <SwiperSlide className='Slide_shop'>   <LazyLoadImage effect='blur' className='single_images_shop' key={index} src={imageUrl} alt="Product_img" /></SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Flexbox for product details */}
          <div className='Single_product_details'>
            <p className='product_name_single'>{title}</p>
            <p className='product_full_single'>Kelly Women Premium Beige Pump</p>
            <p className='product_id_single'>ID : SH0061-KLY-BEIGE</p>
            <p className='single_price_page'><span className='price_before_single'>Rs 4000</span> <span className='price_after_single'>Rs 2349</span><span className='discount_percentage_single'>(-32%)</span></p>
            <p className='flash_few'>Only few left in Stock!</p>
            <p className='flash_Text_p_yellow'>Sale is <span className='flash_Text_p_yellow_span'>Live <img style={{ height: "10px" }} alt='blink_img' src={blinkSVG} /></span></p>
            <div className='button_flex_single'>
              <MDBBtn className='single_cart_btn' style={{ backgroundColor: "#4BB497", }}>ADD TO CART</MDBBtn>    <MDBBtn className='wishlist_single' style={{ backgroundColor: "#d01345", color: "white", fontWeight: "bolder" }}>ADD TO WISHLIST</MDBBtn>
            </div>
            {/* flex */}
            <div className='icon_delivery_time'>
              <p className='delivery_time_heading'>Delivery Time:</p>
              <p className='delivery_estimate'>Lahore, Rawalpindi, Islamabad: 1-2 days</p>
              <p className='delivery_estimate'>Other cities: 1-4 days</p>
            </div>

            <Faq config={OpenConfig} data={faqdata} />
            {/* links */}
            <div className='category_links_single_page'>
              <p className='delivery_time_heading'>#Tags</p>
              <div className='category_links_tags_flex'>
                <Link className='single_button_tag'>Shoes</Link>
                <Link className='single_button_tag'>Women</Link>
                <Link className='single_button_tag'>Shoes</Link>
                <Link className='single_button_tag'>Pumps</Link>
                <Link className='single_button_tag'>Kelly</Link>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Cathead display="none" heading="Recomendations &bull;" />
      <TrendingCarsoul margin="20px" />

    </>
  );
};

export default Singleproduct;
