const express = require("express");
const { register, getRegister, delRegister } = require("../controllers/organizationController");
const{ orgAdminRegister ,login,getOrgName,createFeature, getFeatureFlags,toggleFeature,updateFeatureById,getFeatureById,deleteFeatureById }=require("../controllers/orgAdminController");
const {registerUser,userLogin,checkFeature} = require("../controllers/userController")
const authMiddleware = require("../middleware/authMiddleware");
const authUserMiddleware = require("../middleware/authUserMiddleware")


const router = express.Router();


router.post('/add',register);
router.get('/add',getRegister);
router.delete('/delete/:orgId',delRegister);
//this is admin routes
router.post('/admin/register',orgAdminRegister);
router.post('/admin/login',login)
router.get('/admin/org/name',authMiddleware,getOrgName)
router.post('/admin/feature/create',authMiddleware,createFeature)
router.get('/admin/featureflags',authMiddleware,getFeatureFlags)
router.put("/admin/feature/toggle/:featureKey",authMiddleware,toggleFeature);
router.put("/admin/update/feature/:featureKey",authMiddleware,updateFeatureById);
router.get("/admin/get/feature/:featureKey",authMiddleware,getFeatureById)
router.delete("/admin/delete/feature/:featureKey",authMiddleware,deleteFeatureById);

//this is end user routes
router.post("/signup",registerUser)
router.post("/login",userLogin)
router.post("/check/feature",authUserMiddleware,checkFeature)
module.exports = router;