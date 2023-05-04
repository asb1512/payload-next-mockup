import { CollectionConfig } from 'payload/types';

const FormSubmission: CollectionConfig = {
  slug: 'form-submissions',
  fields: [
    {
      type: 'text',
      name: 'name',
      label: 'Name',
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'number',
      name: 'phone',
      label: 'Phone',
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'textarea',
      name: 'message',
      label: 'Message',
      admin: {
        readOnly: true,
      },
    },
  ],
};

export default FormSubmission;
