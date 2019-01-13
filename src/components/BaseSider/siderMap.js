// 侧边导航栏配置文件
const siderMap = [
    {
        title: '需求管理',
        key: 'xqgl',
        icon: 'schedule',
        toPath: '', // 有子目录时此处不需要填写
        hasSubMenu: true,
        sub: [
            {
                title: '需求录入',
                key: 'xqlr',
                icon: 'form',
                toPath: '/need',
                hasSubMenu: false,
                sub: []
            },
            {
                title: '常规版本',
                key: 'cgbb',
                icon: 'tag',
                toPath: '',
                hasSubMenu: true,
                sub: [
                    {
                        title: '20190110',
                        key: '20190110',
                        icon: 'calendar',
                        toPath: '',
                        hasSubMenu: false,
                        sub: [],
                    },
                ], // 此处需要动态插入数据
            },
            {
                title: '快开版本',
                key: 'kkbb',
                icon: 'rocket',
                toPath: '',
                hasSubMenu: true,
                sub: [
                    {
                        title: '20190115',
                        key: '20190115',
                        icon: 'calendar',
                        toPath: '',
                        hasSubMenu: false,
                        sub: [],
                    },
                ], // 此处需要动态插入数据
            },
            {
                title: '归档需求',
                key: 'gdxq',
                icon: 'lock',
                toPath: '',
                hasSubMenu: false,
                sub: []
            },
        ]
    },
    {
        title: '代码评审',
        key: 'dmgl',
        icon: 'code',
        toPath: '/codereview',
        hasSubMenu: false,
    },
    {
        title: '需求评审',
        key: 'xqps',
        icon: 'desktop',
        toPath: '/users',
        hasSubMenu: false,
        sub: []
    },
    {
        title: '用户管理',
        key: 'yhgl',
        icon: 'team',
        toPath: '/welcome',
        hasSubMenu: true,
        sub: [
            {
                title: '用户管理',
                key: 'hhgl',
                icon: 'solution',
                toPath: '',
                hasSubMenu: false,
                sub: []
            },
            {
                title: '权限管理',
                key: 'qxgl',
                icon: 'appstore',
                toPath: '',
                hasSubMenu: false,
                sub: []
            },
        ]
    },
    {
        title: '个人中心',
        key: 'grzx',
        icon: 'user',
        toPath: '/users',
        hasSubMenu: false,
        sub: []
    }
]

export default siderMap;
