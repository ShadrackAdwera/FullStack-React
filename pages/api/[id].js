import fs from 'fs';
import path from 'path';

const detailsHandler = (req,res) => {
    const id = req.query.id;
    const filePath = path.join(process.cwd(),'data','info.json');
    const stringifiedData = fs.readFileSync(filePath);
    const jsonData = JSON.parse(stringifiedData);
    const foundInfo = jsonData.find(d=>d.id===id);
    return res.status(200).json({info: foundInfo});
}

export default detailsHandler;