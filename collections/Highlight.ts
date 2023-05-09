import { CollectionConfig } from 'payload/types';

const Highlight: CollectionConfig = {
  slug: 'highlights',
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Location',
    },
    {
      type: 'textarea',
      name: 'description',
      label: 'Description',
    },
    {
      type: 'upload',
      name: 'image',
      label: 'Logo or Image',
      relationTo: 'media',
    },
  ],
};

export default Highlight;
