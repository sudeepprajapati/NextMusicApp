"use client"
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image"

interface Course {
    id: number
    title: string
    slug: string
    description: string
    price: number
    instructor: string
    isFeatured: boolean
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className="py-12 bg-gray-950">
            <div className="text-center">
                <h2 className="text-xl text-teal-400 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">Learn With the Best </p>
            </div>
            <div className="mt-10 m-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 justify-center">
                {featuredCourses.map((course: Course) => (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-gray-950 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                    {course.title}</p>
                                <p className="text-sm text-neutral-200 dark:text-neutral-400 flex-grow">
                                    {course.description}</p>
                                <Link href={`/courses/${course.slug}`}>Learn More</Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}
                    className="px-4 py-3 rounded-md border-[2px] border-violet-400 text-white bg-gray-950 hover:bg-gray-300 hover:text-violet-950 transition duration-200 "
                >
                    View All courses
                </Link>

            </div>
        </div>
    )
}

export default FeaturedCourses