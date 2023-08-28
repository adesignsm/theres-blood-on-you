export default {
    name: "contactLinks",
    title: "Contact Links",
    type: "document",
    fields: [
        {
            name: "contactTitle",
            title: "Title of the Contact Links set",
            type: "string",
            description: "Title of the contact links set",
        },
        {
            name: "socialLinks",
            title: "Social Media Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "platform",
                            title: "Social Media Platform",
                            type: "string",
                            options: {
                                list: [
                                    {title: "Facebook", value: "facebook"},
                                    {title: "Twitter", value: "twitter"},
                                    {title: "Instagram", value: "instagram"},
                                    {title: "Tumblr", value: "tumblr"},
                                    {title: "Tiktok", value: "titktok"},
                                ],
                            },
                        },
                        {
                            name: "link",
                            title: "Link",
                            type: "url"
                        }
                    ]
                }
            ]
        },
        {
            name: "emailAddress",
            title: "Email Address",
            type: "email",
            description: "Email address for people to contact"
        }
    ]
}