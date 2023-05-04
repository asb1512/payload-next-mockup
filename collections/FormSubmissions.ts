import { CollectionConfig } from 'payload/types';

const FormSubmission: CollectionConfig = {
  slug: 'form-submissions',
  fields: [
    {
      type: 'text',
      name: 'name',
      label: 'Name',
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
    },
    {
      type: 'number',
      name: 'phone',
      label: 'Phone',
    },
    {
      type: 'textarea',
      name: 'message',
      label: 'Message',
    },
  ],
};

export default FormSubmission;
