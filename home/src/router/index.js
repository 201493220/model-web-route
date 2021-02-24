import demo from "../views/demo/demo.vue";
import RouteModel from "../views/yunying/RouteModel.vue";
import RouteModelResult from "../views/yunying/RouteModelResult.vue";
import DemandSide from "../views/yunying/DemandSide.vue";
import ResourceSide from "../views/yunying/ResourceSide.vue";
import YieldResults from "../views/yunying/YieldResults.vue";
import VolumeResults from "../views/yunying/VolumeResults.vue";
import SalesResults from "../views/yunying/SalesResults.vue";

const routes = [
    {
        path: "/demo",
        name: "demo",
        component: demo,
        children: [
            {
                path: "/RouteModel",
                name: "RouteModel",
                component: RouteModel,
            },
            {
                path: "/RouteModelResult",
                name: "RouteModelResult",
                component: RouteModelResult,
            },
            {
                path: "/DemandSide",
                name: "DemandSide",
                component: DemandSide,
            },
            {
                path: "/ResourceSide",
                name: "ResourceSide",
                component: ResourceSide,
            },
            {
                path: "/YieldResults",
                name: "YieldResults",
                component: YieldResults,
            },
            {
                path: "/VolumeResults",
                name: "VolumeResults",
                component: VolumeResults,
            },
            {
                path: "/SalesResults",
                name: "SalesResults",
                component: SalesResults,
            },
        ],
    },
];

export default routes;
