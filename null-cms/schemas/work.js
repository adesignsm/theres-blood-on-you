export default {
    name: "workImages",
    title: "Work Page Images",
    type: "document",
    fields: [
        {
            name: "workTitle",
            title: "Title of the image set",
            type: "string",
            description: "Title of the image set (Check for any trailing spaces in the title you set! Otherwise the images wont show up).",
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: 'image', options: { hotspot: true } }],
            description: 'Upload images to the Work page',
            // validation: (Rule) => Rule.max(7).error('Maximum of 7 images allowed.'),
        }
    ]
}