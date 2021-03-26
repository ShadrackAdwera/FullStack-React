const handler = (req,res) => {
    if(req.method==='POST') {
        const name = req.body.name;
        const email = req.body.email;
        const feedbacc = req.body.feedbacc;

        const newFeedback = {
            id: Date.now().toString(),
            name, email, feedbacc
        }
    }
    return res.status(200).json({message: 'Hello World'})
}

export default handler;