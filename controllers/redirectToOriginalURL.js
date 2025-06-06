import url from '../model/URLModel.js'


export const redirectToOriginalURL = async ( req,res ) =>{
    const longURL = await url.findOne({shortURL : req.params.shortLink})
    if(longURL){
        
        longURL.clicks += 1
        await longURL.save()
        
        return res.redirect(longURL.originalURL)
        // return res.json({URL:longURL.originalURL});
    }
    res.status(404).json({message:"url not found"})
}