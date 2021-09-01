import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
const { REACT_APP_API } = process.env;

const RankingsTable = () => {
    const [rankings, setRankings] = useState([
        {
            _id: {
                $oid: '611e4244248af55f14b10e65'
            },
            item: 'google pixel 4a just black',
            url: 'https://geizhals.eu/?m=5',
            rank: 1,
            date: {
                $date: '2021-08-19T11:36:36.609Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e79'
            },
            item: 'apple iphone 12',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 1,
            date: {
                $date: '2021-08-19T11:36:36.771Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e66'
            },
            item: 'xiaomi poco m3 64gb power black',
            url: 'https://geizhals.eu/?m=5',
            rank: 2,
            date: {
                $date: '2021-08-19T11:36:36.611Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e7a'
            },
            item: 'samsung galaxy s20 fe',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 2,
            date: {
                $date: '2021-08-19T11:36:36.771Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e7b'
            },
            item: 'apple iphone 12 pro',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 3,
            date: {
                $date: '2021-08-19T11:36:36.771Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e7c'
            },
            item: 'samsung galaxy a52',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 4,
            date: {
                $date: '2021-08-19T11:36:36.771Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e7d'
            },
            item: 'apple iphone 12 mini',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 5,
            date: {
                $date: '2021-08-19T11:36:36.771Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e7e'
            },
            item: 'xiaomi redmi note 10 pro',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 6,
            date: {
                $date: '2021-08-19T11:36:36.772Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e7f'
            },
            item: 'oneplus 9 pro',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 7,
            date: {
                $date: '2021-08-19T11:36:36.772Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e80'
            },
            item: 'huawei p30 pro',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 8,
            date: {
                $date: '2021-08-19T11:36:36.772Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e67'
            },
            item: 'google pixel 5 just black',
            url: 'https://geizhals.eu/?m=5',
            rank: 3,
            date: {
                $date: '2021-08-19T11:36:36.611Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e81'
            },
            item: 'apple iphone 11',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 9,
            date: {
                $date: '2021-08-19T11:36:36.772Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e82'
            },
            item: 'samsung galaxy s21 ultra 5g',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 10,
            date: {
                $date: '2021-08-19T11:36:36.772Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e83'
            },
            item: 'apple iphone 12 pro max',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 11,
            date: {
                $date: '2021-08-19T11:36:36.772Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e84'
            },
            item: 'samsung galaxy s21 5g',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 12,
            date: {
                $date: '2021-08-19T11:36:36.773Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e85'
            },
            item: 'apple iphone se (2020)',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 13,
            date: {
                $date: '2021-08-19T11:36:36.773Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e86'
            },
            item: 'samsung galaxy s20 fe 5g',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 14,
            date: {
                $date: '2021-08-19T11:36:36.773Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e87'
            },
            item: 'apple iphone 12 128gb schwarz',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 15,
            date: {
                $date: '2021-08-19T11:36:36.773Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e88'
            },
            item: 'samsung galaxy a52 6gb/128gb awesome black',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 16,
            date: {
                $date: '2021-08-19T11:36:36.773Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e89'
            },
            item: 'apple iphone 12 mini 64gb schwarz',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 17,
            date: {
                $date: '2021-08-19T11:36:36.773Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e68'
            },
            item: 'samsung galaxy z flip 3 5g f711b 128gb phantom green',
            url: 'https://geizhals.eu/?m=5',
            rank: 4,
            date: {
                $date: '2021-08-19T11:36:36.611Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e8a'
            },
            item: 'xiaomi poco f3',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 18,
            date: {
                $date: '2021-08-19T11:36:36.773Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e8b'
            },
            item: 'samsung galaxy s20 fe 2021 128gb cloud navy',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 19,
            date: {
                $date: '2021-08-19T11:36:36.774Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e8c'
            },
            item: 'apple iphone 12 pro 128gb graphit',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 20,
            date: {
                $date: '2021-08-19T11:36:36.774Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e8d'
            },
            item: 'xiaomi poco x3 pro',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 21,
            date: {
                $date: '2021-08-19T11:36:36.774Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e8e'
            },
            item: 'samsung galaxy a21s',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 22,
            date: {
                $date: '2021-08-19T11:36:36.774Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e8f'
            },
            item: 'apple iphone 12 64gb schwarz',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 23,
            date: {
                $date: '2021-08-19T11:36:36.774Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e90'
            },
            item: 'xiaomi redmi note 10s',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 24,
            date: {
                $date: '2021-08-19T11:36:36.774Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e91'
            },
            item: 'samsung galaxy s20 fe 128gb cloud navy',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 25,
            date: {
                $date: '2021-08-19T11:36:36.774Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e92'
            },
            item: 'apple iphone 12 pro 256gb pazifikblau',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 26,
            date: {
                $date: '2021-08-19T11:36:36.775Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e69'
            },
            item: 'google pixel 4a 5g just black',
            url: 'https://geizhals.eu/?m=5',
            rank: 5,
            date: {
                $date: '2021-08-19T11:36:36.611Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e93'
            },
            item: 'xiaomi redmi note 9',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 27,
            date: {
                $date: '2021-08-19T11:36:36.775Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e94'
            },
            item: 'samsung galaxy s21 ultra 5g 128gb phantom black',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 28,
            date: {
                $date: '2021-08-19T11:36:36.775Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e95'
            },
            item: 'apple iphone 11 128gb black',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 29,
            date: {
                $date: '2021-08-19T11:36:36.775Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e6a'
            },
            item: 'apple airpods pro (mwp22zm/a)',
            url: 'https://geizhals.eu/?m=5',
            rank: 6,
            date: {
                $date: '2021-08-19T11:36:36.612Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e96'
            },
            item: 'samsung galaxy a72',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 30,
            date: {
                $date: '2021-08-19T11:36:36.775Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e97'
            },
            item: 'apple iphone 11 pro',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 31,
            date: {
                $date: '2021-08-19T11:36:36.775Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e98'
            },
            item: 'samsung galaxy a52 5g',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 32,
            date: {
                $date: '2021-08-19T11:36:36.776Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e99'
            },
            item: 'apple iphone 12 mini 128gb schwarz',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 33,
            date: {
                $date: '2021-08-19T11:36:36.776Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e9a'
            },
            item: 'samsung galaxy a51',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 34,
            date: {
                $date: '2021-08-19T11:36:36.776Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e9b'
            },
            item: 'apple iphone 11 64gb black',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 35,
            date: {
                $date: '2021-08-19T11:36:36.776Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e6b'
            },
            item: 'samsung galaxy a52 a525f/ds 128gb awesome black',
            url: 'https://geizhals.eu/?m=5',
            rank: 7,
            date: {
                $date: '2021-08-19T11:36:36.612Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e9c'
            },
            item: 'samsung galaxy s20 fe 5g 128gb cloud navy',
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 36,
            date: {
                $date: '2021-08-19T11:36:36.776Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e6c'
            },
            item: 'apple iphone 12 64gb black',
            url: 'https://geizhals.eu/?m=5',
            rank: 8,
            date: {
                $date: '2021-08-19T11:36:36.612Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e6d'
            },
            item: 'samsung galaxy z flip 3 5g f711b 256gb phantom black',
            url: 'https://geizhals.eu/?m=5',
            rank: 9,
            date: {
                $date: '2021-08-19T11:36:36.612Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10e6e'
            },
            item: 'oneplus north 2 128gb blue haze (5011101808)',
            url: 'https://geizhals.eu/?m=5',
            rank: 10,
            date: {
                $date: '2021-08-19T11:36:36.612Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10ec1'
            },
            item: 'nokia 123',
            url: 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch',
            rank: 1,
            date: {
                $date: '2021-08-19T11:36:36.926Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10ec2'
            },
            item: 'lg optimus',
            url: 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch',
            rank: 2,
            date: {
                $date: '2021-08-19T11:36:36.926Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10ec3'
            },
            item: 'samsung galaxy',
            url: 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch',
            rank: 3,
            date: {
                $date: '2021-08-19T11:36:36.926Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10ec4'
            },
            item: 'nokia x',
            url: 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch',
            rank: 4,
            date: {
                $date: '2021-08-19T11:36:36.926Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10ec5'
            },
            item: 'sony xperia',
            url: 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch',
            rank: 5,
            date: {
                $date: '2021-08-19T11:36:36.926Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10ec6'
            },
            item: 'ubuntu edge',
            url: 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch',
            rank: 6,
            date: {
                $date: '2021-08-19T11:36:36.926Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10ec7'
            },
            item: 'iphone',
            url: 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch',
            rank: 7,
            date: {
                $date: '2021-08-19T11:36:36.927Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10ec8'
            },
            item: 'iphone',
            url: 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch',
            rank: 8,
            date: {
                $date: '2021-08-19T11:36:36.927Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4244248af55f14b10ec9'
            },
            item: 'iphone',
            url: 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch',
            rank: 9,
            date: {
                $date: '2021-08-19T11:36:36.927Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ed3'
            },
            item: 'samsung galaxy s20 fe 5g factory unlocked android cell phone 128gb us…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 1,
            date: {
                $date: '2021-08-19T11:36:37.892Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ed4'
            },
            item: '(refurbished) apple iphone 8, us version, 64gb, gold - unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 2,
            date: {
                $date: '2021-08-19T11:36:37.892Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ed5'
            },
            item: 'google pixel 4a - new unlocked android smartphone - 128 gb of storage - up to 24…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 3,
            date: {
                $date: '2021-08-19T11:36:37.892Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ed6'
            },
            item: 'moto g power | 2021 | 3-day battery | unlocked | made for us by motorola | 4/64gb | 48mp…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 4,
            date: {
                $date: '2021-08-19T11:36:37.892Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ed7'
            },
            item: 'google pixel 4a - unlocked android smartphone - 128 gb of storage - up to 24 hour battery…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 5,
            date: {
                $date: '2021-08-19T11:36:37.892Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ed8'
            },
            item: '(refurbished) apple iphone xr, us version, 64gb, black - unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 6,
            date: {
                $date: '2021-08-19T11:36:37.892Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ed9'
            },
            item: '(refurbished) samsung galaxy s9, 64gb, midnight black - fully unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 7,
            date: {
                $date: '2021-08-19T11:36:37.893Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10eda'
            },
            item: 'samsung galaxy s21 ultra 5g factory unlocked android cell phone 256gb us…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 8,
            date: {
                $date: '2021-08-19T11:36:37.893Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10edb'
            },
            item: '(renewed) apple iphone 8, us version, 64gb, space gray - unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 9,
            date: {
                $date: '2021-08-19T11:36:37.893Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10edc'
            },
            item: '(refurbished) samsung galaxy s10, 128gb, prism black - fully unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 10,
            date: {
                $date: '2021-08-19T11:36:37.893Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10edd'
            },
            item: 'moto e | unlocked | made for us by motorola | 2/32gb | 13mp camera | 2020 | blue',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 11,
            date: {
                $date: '2021-08-19T11:36:37.893Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ede'
            },
            item: '(refurbished) samsung galaxy s10+, 128gb, prism black - fully unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 12,
            date: {
                $date: '2021-08-19T11:36:37.893Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10edf'
            },
            item: '(refurbished) apple iphone 7, 32gb, black - fully unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 13,
            date: {
                $date: '2021-08-19T11:36:37.893Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ee0'
            },
            item: '(renewed) apple iphone 7, 32gb, rose gold - fully unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 14,
            date: {
                $date: '2021-08-19T11:36:37.894Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ee1'
            },
            item: 'apple iphone x, us version, 64gb, space gray - fully unlocked (renewed)',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 15,
            date: {
                $date: '2021-08-19T11:36:37.894Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ee2'
            },
            item: '(refurbished) samsung galaxy s10e, 128gb, prism black - fully unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 16,
            date: {
                $date: '2021-08-19T11:36:37.894Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ee3'
            },
            item: 'moto g play | 2021 | 3-day battery | unlocked | made for us by motorola | 3/32gb | 13mp…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 17,
            date: {
                $date: '2021-08-19T11:36:37.894Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ee4'
            },
            item: 'samsung electronics galaxy a12, factory unlocked smartphone, android cell phone,…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 18,
            date: {
                $date: '2021-08-19T11:36:37.894Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ee5'
            },
            item: 'samsung galaxy s10, 128gb, prism white - fully unlocked (renewed)',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 19,
            date: {
                $date: '2021-08-19T11:36:37.894Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ee6'
            },
            item: 'moto g power | 3-day battery1 | unlocked | made for us by motorola | 4/64gb | 16mp…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 20,
            date: {
                $date: '2021-08-19T11:36:37.895Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ee7'
            },
            item: 'tracfone my flip 2 4g lte prepaid flip phone (locked) - black - 4gb - sim card included…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 21,
            date: {
                $date: '2021-08-19T11:36:37.895Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ee8'
            },
            item: '(renewed) apple iphone 8 plus, us version, 64gb, gold - unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 22,
            date: {
                $date: '2021-08-19T11:36:37.895Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ee9'
            },
            item: '(renewed) apple iphone xs, us version, 64gb, space gray - unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 23,
            date: {
                $date: '2021-08-19T11:36:37.895Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10eea'
            },
            item: 'samsung galaxy s10, 128gb, prism blue - fully unlocked (renewed)',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 24,
            date: {
                $date: '2021-08-19T11:36:37.895Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10eeb'
            },
            item: 'oneplus nord n10 5g unlocked smartphone, midnight ice​, 90hz refresh rate, 6gb ram +…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 25,
            date: {
                $date: '2021-08-19T11:36:37.895Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10eec'
            },
            item: 'tracfone carrier-locked alcatel myflip 4g prepaid flip phone- black - 4gb - sim card…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 26,
            date: {
                $date: '2021-08-19T11:36:37.895Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10eed'
            },
            item: 'tcl 10 se unlocked android smartphone, 6.52" v-notch display, us version cell phone with…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 27,
            date: {
                $date: '2021-08-19T11:36:37.896Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10eee'
            },
            item: 'motorola one 5g ace | 2021 | 2-day battery | unlocked | made for us by motorola | 6…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 28,
            date: {
                $date: '2021-08-19T11:36:37.896Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10eef'
            },
            item: '(refurbished) samsung galaxy s9, 64gb, lilac purple - fully unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 29,
            date: {
                $date: '2021-08-19T11:36:37.896Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ef0'
            },
            item: 'nokia 225 | unlocked | 4g cell phone | black',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 30,
            date: {
                $date: '2021-08-19T11:36:37.896Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ef1'
            },
            item: 'apple iphone x, us version, 64gb, silver - unlocked (renewed)',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 31,
            date: {
                $date: '2021-08-19T11:36:37.897Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ef2'
            },
            item: 'samsung galaxy s10+, 128gb, prism white - fully unlocked (renewed)',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 32,
            date: {
                $date: '2021-08-19T11:36:37.897Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ef3'
            },
            item: '(renewed) apple iphone 7, us version, 128gb, black - unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 33,
            date: {
                $date: '2021-08-19T11:36:37.897Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ef4'
            },
            item: 'zte blade a5 2020 (32gb, 2gb) 6.09" hd edge to edge display, 3200mah battery, dual…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 34,
            date: {
                $date: '2021-08-19T11:36:37.897Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ef5'
            },
            item: 'oneplus 8 glacial green,​ 5g unlocked android smartphone u.s version, 8gb ram+128gb…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 35,
            date: {
                $date: '2021-08-19T11:36:37.897Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ef6'
            },
            item: 'samsung galaxy s10+, 128gb, prism blue - fully unlocked (renewed)',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 36,
            date: {
                $date: '2021-08-19T11:36:37.897Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ef7'
            },
            item: '(refurbished) apple iphone xr, us version, 64gb, red - unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 37,
            date: {
                $date: '2021-08-19T11:36:37.897Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ef8'
            },
            item: '(renewed) apple iphone xr, us version, 64gb, white - unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 38,
            date: {
                $date: '2021-08-19T11:36:37.898Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10ef9'
            },
            item: 'moto g7 plus | unlocked | made for us by motorola | 4/64gb | 16mp camera | 2019 |…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 39,
            date: {
                $date: '2021-08-19T11:36:37.898Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10efa'
            },
            item: '(refurbished) samsung galaxy s9, 64gb, coral blue - fully unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 40,
            date: {
                $date: '2021-08-19T11:36:37.898Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10efb'
            },
            item: 'rugged flip phone 4g gsm unlocked water proof shock proof ip68 military grade…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 41,
            date: {
                $date: '2021-08-19T11:36:37.898Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10efc'
            },
            item: 'blu advance l5 -unlocked dual sim, 16gb -black',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 42,
            date: {
                $date: '2021-08-19T11:36:37.898Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10efd'
            },
            item: '(renewed) apple iphone 8, 64gb, silver - fully unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 43,
            date: {
                $date: '2021-08-19T11:36:37.899Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10efe'
            },
            item: '(renewed) samsung galaxy note 9, 128gb, ocean blue - fully unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 44,
            date: {
                $date: '2021-08-19T11:36:37.899Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10eff'
            },
            item: '(renewed) apple iphone xr, us version, 64gb, blue - unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 45,
            date: {
                $date: '2021-08-19T11:36:37.899Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10f00'
            },
            item: 'google - pixel 3 with 64gb memory cell phone (unlocked) - not pink',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 46,
            date: {
                $date: '2021-08-19T11:36:37.899Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10f01'
            },
            item: 'moto g power | 2021 | 3-day battery | unlocked | made for us by motorola | 3/32gb | 48mp…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 47,
            date: {
                $date: '2021-08-19T11:36:37.899Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10f02'
            },
            item: '(refurbished) apple iphone 11, us version, 64gb, black - unlocked',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 48,
            date: {
                $date: '2021-08-19T11:36:37.899Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10f03'
            },
            item: 'oneplus nord n200 | 5g unlocked android smartphone u.s version | 6.49" full hd+lcd…',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 49,
            date: {
                $date: '2021-08-19T11:36:37.899Z'
            },
            __v: 0
        },
        {
            _id: {
                $oid: '611e4245248af55f14b10f04'
            },
            item: 'moto g stylus | 2020 | unlocked | made for us by motorola | 4/128gb | 48mp camera | indigo',
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            rank: 50,
            date: {
                $date: '2021-08-19T11:36:37.900Z'
            },
            __v: 0
        }
    ]);

    //   useEffect(() => {
    //     axios
    //       .get(`${REACT_APP_API}/rankings`, { headers: authHeader() })
    //       .then((response) => {
    //         setRankings(response.data);
    //       })
    //       .catch((e) => console.error(e));
    //   }, []);

    const columns = [
        {
            title: 'Item',
            field: 'item'
        },
        {
            title: 'Url',
            field: 'url'
        },
        {
            title: 'Rank',
            field: 'rank'
        }
    ];

    return (
        <MaterialTable
            title="Rankings"
            data={rankings}
            columns={columns}
            options={{
                search: true,
                paging: true,
                filtering: true,
                exportButton: true,
                exportAllData: true
            }}
            localization={{
                body: {
                    emptyDataSourceMessage: <p>Loading data ...</p>
                }
            }}
        />
    );
};

export default RankingsTable;
