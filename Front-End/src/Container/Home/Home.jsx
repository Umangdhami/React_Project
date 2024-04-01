import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import Shop from '../../Components/Shop/Shop'
import Saller from '../../Components/Saller/Saller'
import Sale from '../../Components/Sale/Sale'
import Review from '../../Components/Review/Review'
import Explore from '../../Components/Explore/Explore'
import Subscription from '../../Components/Subscription/Subscription'
import axios from "axios";

const Home = () => {

  // const [data, setData] = useState(null);


  // useEffect(() => {
  //   const fetchInfo = async () => {

  //     await fetch('http://localhost:5011/register').then((res) => res.json()).then((data) => setData(data)).catch(error => console.error('Error fetching data:', error));
  //   console.log('data api',data);
  //   }

  //   fetchInfo();
  // }, [])


  return (
    <>
      <Banner />
      <Shop />
      <Saller />
      <Sale />
      <Review />
      <Explore />
      <Subscription />
    </>
  )
}

export default Home
