const { get_user_details } = require('../../models/features/userdetails');
const { get_status_code } = require('../../services/common-service');

const getuserdetail_controller = async (req, res) => {
    const id = req.user?.id;
    if (!id) {
        return res.status(200).json({
            success: true,
            message: 'No data found for these user',
            user: {
                name: '',
                picture: '',
                email: '',
                login_time: ''
            }
        })
    }
    try {
        const { user } = await get_user_details(id);
        // Dynamically create details array
        const details = Object.entries(user).map(([key, value]) => ({
            label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
            value: value ?? 'N/A' // handle nulls gracefully
        }));

        return res.status(200).json({
            success: true,
            message: 'User details succesfully fetched',
            user: user,
            details: details
        })
    }
    catch (err) {
        return res.status(get_status_code(err)).json({
            success: false,
            message: err
        })
    }
}
module.exports = { getuserdetail_controller }