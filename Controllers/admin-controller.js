const User = require('../Models/auth-model.js');
const Contact= require('../Models/Contact.js');
const handleAdmin = async (req, res) => {
    try {
        // Check if the user is authenticated and has admin privileges
        const user = await User.find({}).select({ password: 0 }); // Exclude password field from the response
        if (!user || user.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.json({
            message: 'Admin Dashboard',
             user: user
        });
    } catch (error) {
        console.error('Error in admin controller:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
const handleContact = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: 'No contacts found' });
        }
        res.json({
            message: 'Contact List',
            contacts: contacts
        });
    } catch (error) {
        console.error('Error in contact controller:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
const handledelete= async(req,res)=>{
    try{
        const id=req.params.id
        const deletedata=await User.deleteOne({_id:id});
    return res.status(200).json({
        message:'user deleted succesfully' 
    })

    }catch(error){
       console.error('Error in contact controller:', error);
        res.status(500).json({ message: 'Internal Server Error' });   
    }
}
const handlecontactdelete= async(req,res)=>{
    try{
        const id=req.params.id
        const deletedata=await Contact.deleteOne({_id:id});
    return res.status(200).json({
        message:'data deleted succesfully' 
    })

    }catch(error){
       console.error('Error in contact controller:', error);
        res.status(500).json({ message: 'Internal Server Error' });   
    }
}
module.exports = {
    handleAdmin,
    handleContact,
    handledelete,
    handlecontactdelete
};
