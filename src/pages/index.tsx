import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Forecasting Passenger Demand for Sri Lanka's Public Transport
        </Heading>
        <p className="hero__subtitle">
          A data-driven framework combining AFC ticketing, GPS/AVL, weather, and calendar data
          to produce accurate short- and long-term demand forecasts at the route and stop level.
        </p>
        <p className={styles.affiliation}>
          IS4101 Final Year Research Project — University of Colombo School of Computing
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Read the Research
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/research/methodology/overview">
            See the Methodology
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/data/overview">
            Browse Data Sources
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Sri Lanka Transit Demand Forecasting"
      description="A data-driven approach to forecasting passenger demand for improved public transport accessibility in Sri Lanka.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
