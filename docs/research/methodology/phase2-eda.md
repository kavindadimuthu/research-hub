---
sidebar_position: 3
title: Phase 2 — Exploratory Data Analysis
---

# Phase 2 — Exploratory Data Analysis

## Objective

To understand the structure, patterns, and anomalies in the collected data, and to identify which features are most predictive of passenger demand — informing both feature engineering and the comparative model selection in Phase 3.

---

## Analytical activities

### Descriptive statistics
- Distribution of hourly and daily boardings by route and stop
- Identification of outliers (e.g., data entry errors, GPS drops, strike days)
- Missingness patterns and their correlation with data source (AFC vs proxy)

### Demand pattern visualisation
- **Route-stop heatmaps:** demand intensity by time of day and day of week, for each corridor
- **Time-series decomposition:** separating trend, seasonality, and residual components using STL decomposition (Seasonal and Trend decomposition using LOESS)
- **Calendar effect plots:** overlaying public holiday and festival dates on the demand series to quantify disruption patterns

### Feature correlation analysis
- Pearson and Spearman correlations between candidate features (weather, calendar dummies, lagged demand) and observed boardings
- Partial autocorrelation plots to determine appropriate lag structure for autoregressive models
- Cross-correlation between GPS-derived occupancy proxies and AFC boardings (where both are available) to validate proxy quality

---

## Feature engineering decisions

EDA results will directly determine:

1. **Which lag features to include** — autocorrelation analysis will reveal the most informative historical windows (e.g., same hour yesterday, same hour last week)
2. **How to encode calendar effects** — binary holiday indicators vs a more granular event-type encoding
3. **Which weather variables matter** — not all weather features will be informative for all corridors; correlation analysis will prune the set
4. **Whether spatial features are needed** — if stop-level demand is highly correlated with adjacent stops, spatial features will be added; if not, they may not justify the modelling complexity

---

## Outputs

- A documented feature set for Phase 3
- An EDA report embedded in this site (to be added as the phase progresses)
- A data quality assessment per source and corridor
