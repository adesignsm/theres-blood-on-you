export default {
    name: "entryImages",
    title: "Entry Animation Images",
    type: "document",
    fields: [
        {
            name: "entryTitle",
            title: "Title of the image set",
            type: "string",
            description: "Title of the image set",
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: 'image', options: { hotspot: true } }],
            description: 'Select up to 7 images for the entry image animation',
            validation: (Rule) => Rule.max(7).error('Maximum of 7 images allowed.'),
        }
    ]
}