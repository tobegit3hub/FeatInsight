import { createRouter, createWebHashHistory } from 'vue-router'

import OverviewPage from '../components/OverviewPage.vue'
import TablesPage from '../components/TablesPage.vue'
import ImportTable from '../components/ImportTable.vue'
import FeaturesPage from '../components/FeaturesPage.vue'
import FeatureViewsPage from '../components/FeatureViewsPage.vue'
import FeatureServicesPage from '../components/FeatureServicesPage.vue'
import TutorialPage from '../components/TutorialPage.vue'
import TableDetail from '../components/TableDetail.vue'
import DatabaseDetail from '../components/DatabaseDetail.vue'
import FeatureDetail from '../components/FeatureDetail.vue'
import FeatureViewDetail from '../components/FeatureViewDetail.vue'
import FeatureServiceDetail from '../components/FeatureServiceDetail.vue'
import FeatureServiceVersionDetail from '../components/FeatureServiceVersionDetail.vue'
import CreateFeature from '../components/CreateFeature.vue'
import TestFeatureService from '../components/TestFeatureService.vue'
import DagPage from '../components/DagPage.vue'
import OfflineJobsPage from '../components/OfflineJobsPage.vue'
import OfflineJobDetail from '../components/OfflineJobDetail.vue'
import OnlineDevelopment from '../components/OnlineDevelopment.vue'
import OfflineDevelopment from '../components/OfflineDevelopment.vue'
import OfflineSamplesPage from '@/components/offlinesample/OfflineSamplesPage.vue'
import OfflineSampleDetail from '../components/offlinesample/OfflineSampleDetail.vue'
import CreateOfflineSampleResult from '../components/result/CreateOfflineSampleResult.vue'
import CreateFeatureServiceResult from '../components/result/CreateFeatureServiceResult.vue'
import ImportDataMenu from '../components/importdata/ImportDataMenu.vue'
import ImportDataDatabases from '../components/importdata/ImportDataDatabases.vue'
import ImportDataTables from '../components/importdata/ImportDataTables.vue'
import ImportDataOnline from '../components/importdata/ImportDataOnline.vue'
import ImportDataOffline from '../components/importdata/ImportDataOffline.vue'


const router = createRouter({
  history: createWebHashHistory("/"),
  routes: [
    { path: '/', component: OverviewPage },
    { path: '/tables', component: TablesPage },
    { path: '/tables/import', component: ImportTable },
    { path: '/tables/:db/:name', component: TableDetail, props: true },
    { path: '/databases/:db', component: DatabaseDetail, props: true  },
    { path: '/features', component: FeaturesPage},
    { path: '/features/create', component: CreateFeature},
    { path: '/features/:featureViewName/:featureName', component: FeatureDetail, props: true },
    { path: '/featureviews', component: FeatureViewsPage},
    { path: '/featureviews/:name', component: FeatureViewDetail, props: true },
    { path: '/featureservices', component: FeatureServicesPage},
    { path: '/featureservices/test', component: TestFeatureService},
    { path: '/featureservices/:name', component: FeatureServiceDetail, props: true },
    { path: '/featureservices/:name/:version', component: FeatureServiceVersionDetail, props: true },
    { path: '/featureservices/:name/:version/result', component: CreateFeatureServiceResult, props: true },
    { path: '/offlinejobs', component: OfflineJobsPage},
    { path: '/offlinejobs/:id', component: OfflineJobDetail, props: true },
    { path: '/developprocess/import', component: ImportDataMenu, props: true,
      children: [
        { path: 'databases', component: ImportDataDatabases, props: true },
        { path: 'tables', component: ImportDataTables, props: true },
        { path: 'online', component: ImportDataOnline, props: true },
        { path: 'offline', component: ImportDataOffline, props: true }
      ]
    },
    { path: '/developprocess/online', component: OnlineDevelopment, props: true },
    { path: '/developprocess/offline', component: OfflineDevelopment, props: true },
    { path: '/dag', name: 'DagPage', component: DagPage, props: true},
    { path: '/tutorial', component: TutorialPage},
    { path: '/offlinesamples', component: OfflineSamplesPage},
    { path: '/offlinesamples/:id', component: OfflineSampleDetail, props: true },
    { path: '/offlinesamples/:id/result', component: CreateOfflineSampleResult, props: true },
    { path: '/404', redirect: "/" },
    //{ path: '/:pathMatch(.*)*', redirect: "/404" }
  ]
})

export default router
