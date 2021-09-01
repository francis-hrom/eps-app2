const menuItems = {
    items: [
        {
            id: 'main',
            title: 'Main',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'home',
                    title: 'Home',
                    type: 'item',
                    url: '/main/home',
                    icon: 'feather icon-home'
                }
            ]
        },
        {
            id: 'data',
            title: 'Data',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'targets',
                    title: 'Targets',
                    type: 'item',
                    url: '/data/targets',
                    icon: 'feather icon-target'
                },
                {
                    id: 'rankings',
                    title: 'Rankings',
                    type: 'item',
                    url: '/data/rankings',
                    icon: 'feather icon-server'
                }
            ]
        },
        {
            id: 'tools',
            title: 'Tools',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'find-selector',
                    title: 'Find Selector',
                    type: 'item',
                    url: '/tools/find-selector',
                    icon: 'feather icon-crosshair'
                },
                {
                    id: 'get-rankings',
                    title: 'Get Rankings',
                    type: 'item',
                    url: '/tools/get-rankings',
                    icon: 'feather icon-box'
                }
            ]
        }
        // {
        //     id: 'navigation',
        //     title: 'Navigation',
        //     type: 'group',
        //     icon: 'icon-navigation',
        //     children: [
        //         {
        //             id: 'dashboard',
        //             title: 'Dashboard',
        //             type: 'item',
        //             url: '/app/dashboard/default',
        //             icon: 'feather icon-home'
        //         }
        //     ]
        // },
        // {
        //     id: 'ui-element',
        //     title: 'UI ELEMENT',
        //     type: 'group',
        //     icon: 'icon-ui',
        //     children: [
        //         {
        //             id: 'basic',
        //             title: 'Components',
        //             type: 'collapse',
        //             icon: 'feather icon-box',
        //             children: [
        //                 {
        //                     id: 'button',
        //                     title: 'Button',
        //                     type: 'item',
        //                     url: '/basic/button'
        //                 },
        //                 {
        //                     id: 'badges',
        //                     title: 'Badges',
        //                     type: 'item',
        //                     url: '/basic/badges'
        //                 },
        //                 {
        //                     id: 'breadcrumb',
        //                     title: 'Breadcrumb',
        //                     type: 'item',
        //                     url: '/basic/breadcrumb'
        //                 },
        //                 {
        //                     id: 'collapse',
        //                     title: 'Collapse',
        //                     type: 'item',
        //                     url: '/basic/collapse'
        //                 },
        //                 {
        //                     id: 'tabs-pills',
        //                     title: 'Tabs & Pills',
        //                     type: 'item',
        //                     url: '/basic/tabs-pills'
        //                 },
        //                 {
        //                     id: 'typography',
        //                     title: 'Typography',
        //                     type: 'item',
        //                     url: '/basic/typography'
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     id: 'ui-forms',
        //     title: 'Forms & Tables',
        //     type: 'group',
        //     icon: 'icon-group',
        //     children: [
        //         {
        //             id: 'forms',
        //             title: 'Forms',
        //             type: 'item',
        //             url: '/forms/form-basic',
        //             icon: 'feather icon-file-text'
        //         },
        //         {
        //             id: 'bootstrap',
        //             title: 'Bootstrap Table',
        //             type: 'item',
        //             url: '/tables/bootstrap',
        //             icon: 'feather icon-server'
        //         }
        //     ]
        // },
        // {
        //     id: 'chart-maps',
        //     title: 'Chart & Maps',
        //     type: 'group',
        //     icon: 'icon-charts',
        //     children: [
        //         {
        //             id: 'charts',
        //             title: 'Charts',
        //             type: 'item',
        //             url: '/charts/nvd3',
        //             icon: 'feather icon-pie-chart'
        //         },
        //         {
        //             id: 'maps',
        //             title: 'Maps',
        //             type: 'item',
        //             url: '/maps/google-map',
        //             icon: 'feather icon-map'
        //         }
        //     ]
        // },
        // {
        //     id: 'pages',
        //     title: 'Pages',
        //     type: 'group',
        //     icon: 'icon-pages',
        //     children: [
        //         {
        //             id: 'auth',
        //             title: 'Authentication',
        //             type: 'collapse',
        //             icon: 'feather icon-lock',
        //             children: [
        //                 {
        //                     id: 'signup-2',
        //                     title: 'Sign UP (template)',
        //                     type: 'item',
        //                     url: '/auth/signup-2',
        //                     target: true,
        //                     breadcrumbs: false
        //                 },
        //                 {
        //                     id: 'signin-2',
        //                     title: 'Sign IN (template)',
        //                     type: 'item',
        //                     url: '/auth/signin-2',
        //                     target: true,
        //                     breadcrumbs: false
        //                 }
        //             ]
        //         },
        //         {
        //             id: 'sample-page',
        //             title: 'Sample Page',
        //             type: 'item',
        //             url: '/sample-page',
        //             classes: 'nav-item',
        //             icon: 'feather icon-sidebar'
        //         },
        //         {
        //             id: 'test-page',
        //             title: 'Test Page',
        //             type: 'item',
        //             url: '/test-page',
        //             classes: 'nav-item',
        //             icon: 'feather icon-pie-chart'
        //         }
        //     ]
        // },
        // {
        //     id: 'resources',
        //     title: 'Resources',
        //     type: 'group',
        //     icon: 'icon-pages',
        //     children: [
        //         {
        //             id: 'product-page',
        //             title: 'Download Product',
        //             type: 'item',
        //             url: 'https://appseed.us/product/react-node-js-datta-able',
        //             classes: 'nav-item',
        //             icon: 'feather icon-download',
        //             target: true,
        //             external: true
        //         },
        //         {
        //             id: 'support',
        //             title: 'Get Support',
        //             type: 'item',
        //             icon: 'feather icon-help-circle',
        //             classes: 'nav-item',
        //             url: 'https://appseed.us',
        //             target: true,
        //             external: true
        //         }
        //     ]
        // }
    ]
};

export default menuItems;
