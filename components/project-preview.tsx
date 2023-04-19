import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const ProjectPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  const [animationTriggered, setAnimationTriggered] = useState(false)

  useEffect(() => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true)
    }
  }, [inView])

  const animationClasses = animationTriggered
    ? 'fade-in'
    : 'opacity-0'

  return (
    <div ref={ref} className={animationClasses}>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/projects/${slug}`}
          href="/projects/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default ProjectPreview
