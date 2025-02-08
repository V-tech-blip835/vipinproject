const express=require("express");
const router=express.Router();
const healthController=require("../controller/healthcontroller.js");

router.post("/activity",healthController.createActivity);
router.get("/activity/:id",healthController.getActivity);
router.put("/activity/:id",healthController.upadateActivity);
router.delete("/activity/:id",healthController.deleteActivity);

module.exports=router;