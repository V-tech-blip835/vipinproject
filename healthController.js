const HealthActivity=require("../models/HealthActivity.js");
exports.createActivity=async (req,res)=>{
	try{
		const {userId,activityType,description,duration,calories}=req.body;
		const activity=await HealthActivity.create({userId,activityType,description,duration,calories});
		res.status(201).json({success:true,activity});
	}catch(error){
		res.status(400).json({success:false,message:error.message})
	}
};

exports.getActivity=async (req,res)=>{
	
}