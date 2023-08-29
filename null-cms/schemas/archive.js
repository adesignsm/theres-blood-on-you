export default {
    name: "archiveImages",
    title: "Archive Page Images",
    type: "document",
    fields: [
        {
            name: "archiveTitle",
            title: "Title of the image set",
            type: "string",
            description: "Title of the image set",
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: 'image', options: { hotspot: true } }],
            description: 'Upload images to the Archive page',
            // validation: (Rule) => Rule.max(7).error('Maximum of 7 images allowed.'),
        }
    ]
}