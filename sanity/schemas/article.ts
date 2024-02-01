export default {
    name: 'article',
    title: 'Articles',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            description: `The url that the article will appear under, e.g. www.companyname.com/articles/[slug]. Click 'Generate' to create one automatically`,
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            description: `This image will appear in article previews on the website, Google and when shared on social media.`,
            options: {
                hotspot: true
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            description: `Most of the time just click 'Set to Current Time'.` ,
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'abstract',
            title: 'Abstract',
            type: 'string',
            description: 'Used for previews on the website and Google search results. Must be between 50 and 160 characters.',
            validation: (Rule: any) => [Rule.required().min(50).error('Min. 50 characters is required'), Rule.required().max(160).error('Max. 160 characters')]
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            description: `Use the editor below to format your article. You can also copy and paste preformatted text in.`,
            of: [{ type: 'block' }],
            validation: (Rule: any) => Rule.required(),
        }
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage'
        },
        prepare(selection: { author: any }) {
            const { author } = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`
            })
        }
    }
}