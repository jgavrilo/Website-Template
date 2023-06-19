/** api/hello.ts
 * 
 *  This file provides an example of an API route in Next.js.
 *  Currently, it is not used in the application but serves as a template for future API routes.
 * 
 *  @import {NextApiRequest, NextApiResponse} from 'next' - Importing the 'NextApiRequest' and 'NextApiResponse' types from 'next'.
 *      These types are used to type the request and response parameters of the API route function.
 *
 *  @type {Data} - A TypeScript type defining the shape of the data returned by the API. 
 *      In this case, the API returns an object with a 'name' property which is a string.
 *
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
};

export default function handler(
  req: NextApiRequest,  // The incoming request object.
  res: NextApiResponse<Data>  // The outgoing response object.
) {
  // The response object has a 'status' method to set the status code, and a 'json' method to send a JSON response.
  // Here, the status is set to 200 (success) and the JSON response contains an object with a 'name' property set to 'John Doe'.
  res.status(200).json({ name: 'John Doe' });
}
