import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import FormSubmission from './collections/FormSubmissions';
import JobListing from './collections/JobListing';
import Highlight from './collections/Highlight';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
    FormSubmission,
    JobListing,
    Highlight,
  ],
});
