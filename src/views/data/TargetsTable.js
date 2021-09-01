import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

const { REACT_APP_API } = process.env;

const TargetsTable = (): JSX.Element => {
    const [targets, setTargets] = useState([
        {
            _id: {
                $oid: '611e40e5b3055aec484e8833'
            },
            url: 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch',
            selector: 'html>body>div>div>div>div>div>div>div>div>h4>a:nth-of-type(1)'
        },
        {
            _id: {
                $oid: '611e40e5b3055aec484e8834'
            },
            url: 'https://geizhals.eu/?m=5',
            selector: 'html>body>div>div>main>div>div>div>ol>li>div>div>div>a:nth-of-type(1)'
        },
        {
            _id: {
                $oid: '611e40e5b3055aec484e8835'
            },
            url: 'https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/7072561011',
            selector: 'html>body>div>div>div>div>div>div>ol>li>span>div>span>a>div:nth-of-type(1)'
        },
        {
            _id: {
                $oid: '611e40e5b3055aec484e8837'
            },
            url: 'https://www.idealo.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            selector: '.offerList-item-description-title'
        }
    ]);

    //   useEffect(() => {
    //     axios
    //       .get(`${REACT_APP_API}/targets`, { headers: authHeader() })
    //       .then((response) => {
    //         setTargets(response.data);
    //       })
    //       .catch((e) => console.error(e));
    //   }, []);

    const columns = [
        {
            title: 'Url',
            field: 'url'
        },
        {
            title: 'Selector',
            field: 'selector'
        }
    ];

    return (
        <MaterialTable
            title="Targets"
            data={targets}
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

export default TargetsTable;
