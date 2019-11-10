//动态路由
import Layout from '../pages/layout';

let router0 = [{
    path: '/base0',
    component: Layout,
    meta: {title: '用户管理', icon: 'parking', group: 'parking'},
    children: [{
        path: 'userInfo/manage',
        component: require('@/pages/app/userInfo/Manage.vue'),
        name: 'userInfo:manage',
        meta: {title: '车主信息', perm: 'user:manage'}
    }, {
        path: 'userInfo/recharge',
        component: require('@/pages/app/userInfo/Manage.vue'),
        name: 'recharge:manage',
        meta: {title: '充值记录', perm: 'user:recharge'}
    }
        //     {
        //     path: 'invoice/manage',
        //     component: require('@/pages/app/invoice/Manage.vue'),
        //     name: 'invoice:manage',
        //     meta: {title: '发票配置', perm: 'invoice:manage'}
        // }
    ]
},
    /*{
      path: '/act',
      component: Layout,
      meta: { title: '活动优惠', icon: 'promotion', group: 'parking' },
      children: [{
        path: 'promotion/manage',
        component: require('@/pages/app/act/promotionInfo/Manage.vue'),
        name: 'promotion:manage',
        meta: { title: '券类型管理' }
      }, {
        path: 'coupon/manage',
        component: require('@/pages/app/act/promotionCoupon/Manage.vue'),
        name: 'coupon:manage',
        meta: { title: '优惠券管理' }
      }]
    }, */
    {
        path: '/r',
        component: Layout,
        meta: {title: '订单管理', icon: 'cart', group: 'parking'},
        children: [
            {
                path: 'bookingOrder/manage',
                component: require('@/pages/app/bookingOrder/Manage.vue'),
                name: 'bookingOrder:manage',
                meta: {title: '预约订单', perm: 'bookingOrder:manage'}
            },
            {
                path: 'parkingOrder/manage',
                component: require('@/pages/app/parkingOrder/Manage.vue'),
                name: 'parkingOrder:manage',
                meta: {title: '停车订单', perm: 'parkingOrder:manage'}
            }, {
                path: 'accessInfo/manage',
                component: require('@/pages/app/accessInfo/Manage.vue'),
                name: 'acessInfo:manage',
                meta: {title: '停车记录', perm: 'access:manage'}
            }, {
                path: 'walletOrder/manage',
                component: require('@/pages/app/walletOrder/Manage.vue'),
                name: 'walletOrder:manage',
                meta: {title: '账单记录', perm: 'walletOrder:manage'}
            }]
    }, {
        path: '/f',
        component: Layout,
        meta: {title: '支付结算', icon: 'finance', group: 'parking'},
        children: [{
            path: 'settleAccount/manage',
            component: require('@/pages/app/settleAccount/Manage.vue'),
            name: 'settleAccount:manage',
            meta: {title: '账户管理', perm: 'settleAccount:manage'}
        }, {
            path: 'payOrder/manage',
            component: require('@/pages/app/payOrder/Manage.vue'),
            name: 'payOrder:manage',
            meta: {title: '支付记录', perm: 'payOrder:manage'}
        }, {
            path: 'invoiceInfo/manage',
            component: require('@/pages/app/invoiceInfo/Manage.vue'),
            name: 'invoiceInfo:manage',
            meta: {title: '发票记录', perm: 'invoice:manage'}
        }, {
            path: 'settlePeriodMake/balanceTask',
            component: require('@/pages/app/settlePeriodMake/Manage.vue'),
            name: 'settlePeriodMake:balanceTask',
            meta: {title: '帐单生成', perm: 'settlePeriod:balanceTask'}
        }, {
            path: 'settlePeriod/manage',
            component: require('@/pages/app/settlePeriod/Manage.vue'),
            name: 'settlePeriod:manage',
            meta: {title: '帐单查询', perm: 'settlePeriod:manage'}
        }, {
            path: 'settlePeriod/takeoutAudit',
            component: require('@/pages/app/settlePeriod/TakeoutAudit.vue'),
            name: 'settlePeriod:takeoutAudit',
            meta: {title: '提现审核', perm: 'settlePeriod:takeoutAudit'}
        }]
    }, {
        path: '/act',
        component: Layout,
        meta: {title: '活动管理', icon: 'promotion', group: 'parking'},
        children: [{
            path: 'promotion/manage',
            component: require('@/pages/app/act/promotionInfo/Manage.vue'),
            name: 'promotion:manage',
            meta: {title: '优惠管理', perm: 'promotion:manage'}
        }, {
            path: 'couponBatch/manage',
            component: require('@/pages/app/act/promotionCouponBatch/Manage.vue'),
            name: 'couponBatch:manage',
            meta: {title: '优惠券派发', perm: 'couponBatch:manage'}
        }, {
            path: 'coupon/manage',
            component: require('@/pages/app/act/promotionCoupon/Manage.vue'),
            name: 'coupon:manage',
            meta: {title: '优惠券', perm: 'coupon:manage'}
        }, {
            path: 'activityRules/manage',
            component: require('@/pages/app/act/activityRules/Manage.vue'),
            name: 'activityRules:manage',
            meta: {title: '活动规则', perm: 'activityRules:manage' }
        }, {
            path: 'promotionGroup/manage',
            component: require('@/pages/app/act/promotionGroup/Manage.vue'),
            name: 'promotionGroup/manage',
            meta: {title: '发放统计', perm: 'coupon:report'}
        }]
    }
];

export default router0;
