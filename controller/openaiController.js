// importing the openai
const {OpenAIApi, Configuration} = require('openai');

// configuring the secretkey
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {

    // destructure the data from the boody
    console.log(req.body, 'res body');
    const {imageType, size} = req.body;
    // set the size
    const imageSize =  size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

    try {
        const response = await openai.createImage({
            prompt:imageType,
            n:1,
            size: imageSize
        });
        const image_Url = response.data.data[0].url;

        // send the response
        res.status(200).json({
            success:true,
            imageUrl: image_Url
        })
    } catch (error) {
        res.status(error.response.status).json({
            succes:false,
            message: error.message
        })
    }
}

module.exports = {generateImage};