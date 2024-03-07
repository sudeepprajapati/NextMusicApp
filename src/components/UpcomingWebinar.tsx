import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinar() {
    return (
        <div className='p-12 bg-gray-950'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className='text-lg uppercase text-teal-500 font-semibold tracking-wide'>featured Webinars</h2>
                    <p className='mt-2 text-3xl  leading-8 font-bold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
                </div>
                <div className="mt-10">
                    <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={featuredWebinars.map(webinar => (
                            {
                                title: webinar.title,
                                description: webinar.description,
                                link: '/'
                            }
                        ))} />
                    </div>
                </div>
                <div className="text-center mt-10">
                    <Link href={"/"}
                        className="px-5 py-3 font-medium rounded-md border-[2px] border-white text-white bg-gray-950 hover:bg-slate-700 hover:text-white hover:border-slate-700 transition duration-200 "
                    >View All Webinars</Link>
                </div>
            </div>
        </div>
    )
}

export const featuredWebinars = [
    {
        title: 'Understanding Music Theory',
        description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        slug: 'understanding-music-theory',
        isFeatured: true,
    },
    {
        title: 'The Art of Songwriting',
        description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
        slug: 'the-art-of-songwriting',
        isFeatured: true,
    },
    {
        title: 'Mastering Your Instrument',
        description:
            'Advanced techniques to master your musical instrument of choice.',
        slug: 'mastering-your-instrument',
        isFeatured: true,
    },
    {
        title: 'Music Production Essentials',
        description:
            'Get started with music production with this comprehensive overview.',
        slug: 'music-production-essentials',
        isFeatured: true,
    },
    // Added two more webinars
    {
        title: 'Live Performance Techniques',
        description:
            'Enhance your live performance skills with expert tips and strategies.',
        slug: 'live-performance-techniques',
        isFeatured: true,
    },
    {
        title: 'Digital Music Marketing',
        description:
            'Learn how to promote your music effectively in the digital age.',
        slug: 'digital-music-marketing',
        isFeatured: true,
    },
];

export default UpcomingWebinar