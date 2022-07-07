// ** Navigation imports
import apps from './apps'
import pages from './pages'
import others from './others'
import charts from './charts'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import formsAndTables from './forms-tables'
import admin from '../adminNavigation/admin'

// ** Merge & Export
export default [...dashboards, ...admin, ...apps, ...uiElements, ...formsAndTables, ...pages, ...charts, ...others]
