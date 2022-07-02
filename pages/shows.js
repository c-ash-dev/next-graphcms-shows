import Layout from '@c/Layout'
import { Grid, Card } from '@c/Grid'
import FlexyRow from '@c/FlexyRow'
import { Title } from '@c/Title'
import { getAllShows } from '@l/graphcms'

export default function Shows({ shows }) {
  return (
    <Layout title="next-graphcms-shows / Shows">
      <Title>Shows</Title>
      <FlexyRow justify="center"><h2>Grid View</h2><h2>List View</h2></FlexyRow>
      <Grid>
        {shows.map(show => (
          <Card href={`/show/${show.slug}`} header={show.title} key={show.id}>
            <p>{show.artists.map(({ fullName }) => fullName).join(', ')}</p>
          </Card>
        ))}
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps() {
  const shows = (await getAllShows()) || [] 
  return {
    props: { shows },
  }
}
