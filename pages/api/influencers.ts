// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
const fs = require('fs');
const Papa = require('papaparse');

const csvFilePath = path.join(process.cwd(), '/public/instagram_influencers.csv')

const readCSV = async (filePath: String) => {
  const csvFile = fs.readFileSync(filePath)
  const csvData = csvFile.toString()  
  return new Promise(resolve => {
    Papa.parse(csvData, {
      header: true,
      complete: (results: Object) => {
        console.log('Complete', results); 
        resolve(results);
      }
    });
  });
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const parsed = await readCSV(csvFilePath); 

  res.status(200).json(parsed)
}

export default handler;

