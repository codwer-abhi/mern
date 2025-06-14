const Service = require('../Models/Services');
const handleservice= async (req,res)=>{
    try{
        const response = await Service.find({});
        if(response.length === 0){
            return res.status(404).json({
                message: 'No services found',
            });
        }
        res.status(200).json({
            message: 'Services retrieved successfully',
            data: response,
        });
    }catch (error) {
        res.status(500).json({
            message: 'An error occurred while processing your request',
            error: error.message,
        });
    }
}
module.exports = {
    handleservice
};