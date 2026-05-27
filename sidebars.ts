import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  researchSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Research',
      collapsed: false,
      items: [
        'research/background',
        'research/research-gap',
        'research/aim-objectives',
        'research/research-questions',
        {
          type: 'category',
          label: 'Methodology',
          items: [
            'research/methodology/overview',
            'research/methodology/phase1-data',
            'research/methodology/phase2-eda',
            'research/methodology/phase3-methods',
            'research/methodology/phase4-evaluation',
          ],
        },
        'research/scope',
        'research/significance',
      ],
    },
    {
      type: 'category',
      label: 'Data',
      items: [
        'data/overview',
      ],
    },
    {
      type: 'category',
      label: 'Methods & Models',
      items: [
        'methods/overview',
        'methods/baselines',
        'methods/machine-learning',
        'methods/deep-learning',
        'methods/evaluation',
      ],
    },
    'progress',
  ],
};

export default sidebars;
