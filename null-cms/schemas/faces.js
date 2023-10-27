export default {
    name: "facesImages",
    title: "Faces Page Images",
    type: "document",
    fields: [
        {
            name: "facesTitle",
            title: "Name of the Face",
            type: "string",
            description: "The name of the face (Check for any trailing spaces in the name you set! Otherwise the names wont show up).",
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: 'image', options: { hotspot: true } }],
            description: 'Upload images to the Faces page',
            // validation: (Rule) => Rule.max(7).error('Maximum of 7 images allowed.'),
        }
    ]
}