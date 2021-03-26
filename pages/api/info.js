import fs from 'fs';
import path from 'path';

const handler = (req,res) => {
    if(req.method==='POST') {
        const name = req.body.name;
        const email = req.body.email;
        const feedbacc = req.body.feedbacc;

        const newFeedback = {
            id: Date.now().toString(),
            name, email, feedbacc
        }
        const filePath = path.join(process.cwd(), 'data', 'info.json');
        //read data in file first the overwrite it using updated data. Use readfileAsync to block the method until operation is complete.
        const fileInfo = fs.readFileSync(filePath);
        const arrayFileData = JSON.parse(fileInfo);
        arrayFileData.unshift(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(arrayFileData));

        return res.status(201).json({message: `Thank you for your feedback, ${name}. Your Information has been saved`});
    } else {
        const filePath = path.join(process.cwd(),'data','info.json');
        const jsonData = fs.readFileSync(filePath);
        const stringifiedData = JSON.parse(jsonData);
        return res.status(200).json({data: stringifiedData})
    }
}

export default handler;