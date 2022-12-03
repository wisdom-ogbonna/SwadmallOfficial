# SwadmallOfficila
This is the official website of swadmall
User and admmin signup

1) init
2) expresss
3) mongoose
4) Src - index.server.js
5)env - 2000
model - Database
Routes - Routers
Controler - Logic
Bycrpt - HashPasword


Admin and user signin
1)Signin - Controller: Login
2)JWT -  password Authentification
3)SIgnin - Router
4)Admin folder - Controler and Router

Admin Layout
1) npx create react app "app name"
2) npm install react boostrap
3)npm install react-router-dom
4)google fonts
5)boostrap cdn
6) React-boostrap - navbar
7) App.js Navbar'
8)Src - components
9) Src - Containers
10) Src-components-layout-index.js
11)Src-Header-index.js
12) Container-Home-index.js
13) container- Signin-index.js
14) Container-Signup - index.js
15) App.js - react-router-dom
16) Src - component - UI -Input -index.js- props

Api Request Validation
1)express-validator
2)From routes - auth.js - signup to controler
3) Validation-auth.js

Categories and Sub Categories Rest Api

1) routh-category
2) model-category
3) controler- category-npm install --save slugify
4 ) Check authentification: only loggedin user can create category
5) common-middleware

Product Creation Api
1) routes
2)model
3)Contoler
4) common-middleware
5) npm install multer - For file upload - others are formidable, file-uploader
6) npm install -- save shortid - create unique id for your files
7)controler - product.js const shortid = require('shortid');
8)routes - product.js- const multer  = require('multer')

Add product to cart api
1) controler - cart.js
2) routes - cart.js
3) model - cart.js
4) findOneAndUpdate - controller - cart.js: helps to update the add to cart 

Fix Cart Api & Update Category Api
1) expose static file from index.server.js

 Admin Redux Store Setup
 1) Store setup
 2) State Setup
 3) Store helps to manage the state of application
 4) Libraries required to create store
 5) npm install redux - helps to create store
 5) npm install react-redux - connect component to store
 6) npm install react-thunk - make api call asyncroniously
 7) create folder for store management - src - store
 8) create folder for actions - src - actions
 9)create folder for reducers - src - reducers
 10) create store-index.js
 11) index.js - import store
 12) reducers - index.js
13) actions - auth.actions.js
14) actions - constants.js
15) actions - index.js

Admin Login & Private Route
1) create the helpers folder
2) install axios for API calls
3) axios.js - helpers
4) urlConfig.js
5) add http://localhost:2000 to urlConfig.js
6) useState in signin.js is a hook that helps to create a state in function component
7) from signin.js - value - Input 
8) from signin.js -onChange - Input
9) install cores
10) For private Route - Create HOC - AdminApp - Src - Component - HOC - PrivateRoute.js
11) App.js - setup private route

Admin Signout and Signup
1) userauthentification - signin - useEffect
2) useSelector - signup.js for private route
3) Container - home- style.css
4) Header - index.js - renderLoggedInLinks: this views for only logged in users
5) action - constants.js
6) action - user.actions.js
7) reducer - user.reducer.js

Signout Api & Admin Dashboard
1) private route for Order and product in App.js
2) Routs in Home - index.js
3) Container - product - index.js
4) Container - orders - index.js

Show and Add Categories
1) src - actions - category.action.js
2) src - actions - order.action.js
3) src - actions - product.action.js
4) src - reducer - category.reducer.js
5) src - reducer - product.reducer.js
6) src - reducer - order.reducer.js
7) src - container - Category
8) src - container - Order
9) src - container - Product

 Categories and Product display
 1) remove useEffedt from Category.js
 2) Add dispatch(getAllCategory()); to App.js
 3) src  - components - UI
 4) import table from react botsrap to src - container - product - index
 5) Swadmall-Backend - src -controller - admin - initialData.js
 6) Swadmall-Backend - src - routes - admin - initialData.js