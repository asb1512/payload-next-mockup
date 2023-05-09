import { CollectionConfig } from 'payload/types';

const JobListing: CollectionConfig = {
  slug: 'job-listings',
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Job Title',
      required: true,
    },
    {
      type: 'textarea',
      name: 'description',
      label: 'Job Description',
      required: true,
    },
    {
      type: 'text',
      name: 'link',
      label: 'Job Posting Link',
      required: true,
    },
  ],
};

export default JobListing;
