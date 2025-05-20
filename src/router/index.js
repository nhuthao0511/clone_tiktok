//page
import Search from '../pages/Search'
import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'

// layout
import { DefaulLayout } from '../components/Layout'
import { HeaderOnly } from '../components/Layout'



const PublicRouter = [
    { path: '/', component: Home},
    { path: '/Following', component: Following},
    { path: '/Profile', component: Profile},
    { path: '/Upload', component: Upload, layout: HeaderOnly},
    { path: '/Search', component: Search, layout: null}

    
]



const PrivateRouter = [

]

export {PublicRouter, PrivateRouter};