import Home from './../page/home';
import MessageBox from './../page/messageBox';
import TagsInput from './../page/tagsInput';
// import {Products} from '../page/company/products';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';//引入icons
// 配置路由
const routes = [
    {
        path: "/",
        component: Home,
        resourceName: '首页',
        icon: <MailOutlined/>,
        resourceKey: 'home',
        exact: true,
    }, {
        path: "/products",
        icon: <ContainerOutlined/>,
        resourceName: 'antV图表',
        resourceKey: 'products',
        component: MessageBox,
        routes: [
            {
                path: "/products/list",
                component: MessageBox,
                icon: <ContainerOutlined/>,
                resourceName: 'antV图表',
                resourceKey: 'productsa'
            }
        ]
    },
    {
        path: "/messageBox",
        resourceName: '菜单2',
        resourceKey: 'messageBox',
        component: MessageBox,
        icon: <PieChartOutlined/>,
    },
    {
        path: "/tagsInput",
        resourceName: '菜单3',
        resourceKey: 'TagsInput',
        component: TagsInput,
        icon: <MenuFoldOutlined/>,
    },
];

//将路由表数组导出
export default routes;