import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({
    cloud_name: 'productimg', 
    secure: true
});

export default cloudinary;
