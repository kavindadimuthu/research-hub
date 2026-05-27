import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Multi-Source Data Integration',
    emoji: '🗃️',
    description: (
      <>
        Combines AFC ticketing records, GPS/AVL vehicle traces, meteorological data,
        socio-demographic context, and calendar events into a unified spatial-temporal
        dataset aligned at the route and stop level.
      </>
    ),
  },
  {
    title: 'Comparative Model Evaluation',
    emoji: '📊',
    description: (
      <>
        Rigorously benchmarks statistical baselines (ARIMA/SARIMA), machine learning
        (Random Forest, XGBoost, Prophet), and deep learning (LSTM, Seq2Seq) methods
        using rolling-origin cross-validation and Diebold–Mariano significance tests.
      </>
    ),
  },
  {
    title: 'Sri Lanka Context',
    emoji: '🚌',
    description: (
      <>
        Addresses a genuine gap in the literature — no published work has produced a
        generalisable demand forecasting framework for Sri Lankan public transport.
        Covers urban (Colombo), suburban, and inter-provincial corridors.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureEmoji}>{emoji}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
