import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllProjects } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Project from '../interfaces/project'
import Footer from '../components/footer'

type Props = {
  allProjects: Project[]
}

export default function Index({ allProjects: projects }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Paul Chen`}</title>
        </Head>
        <Container>
          <Intro />
          {projects.length > 0 && <MoreStories projects={projects} />}
        </Container>
        <Footer />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allProjects: allProjects },
  }
}
