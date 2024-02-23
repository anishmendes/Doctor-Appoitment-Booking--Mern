import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

//getting all review

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});

        res
        .status(200)
        .json({success: true, message:"Sucessful", data: reviews});
    } catch (err) {
    res.status(404).json({success:false, message:"Not found"})
    }
};

//creating review
export const createReview = async(req,res)=>{

    if(!req.body.doctor) req.body.doctor = req.params.doctorId
    if(!req.body.user) req.body.user = req.userId

    const newReview = new Review(req.body);
     
    try {
        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor,{
            $push: { reviews: savedReview._id},
        });
        res
        .status(200)
        .json({success:true, message:"Review submitted", data:savedReview});
    } catch (err) {
        res.status(500).json({sucess:false, message:err.message});
    }

}