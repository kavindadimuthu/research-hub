---
sidebar_position: 5
title: Evaluation Protocol
---

# Evaluation Protocol

## Metrics

Four accuracy metrics are computed for every model and every forecast horizon:

| Metric | Formula | Interpretation |
|---|---|---|
| **MAE** | mean(\|actual − forecast\|) | Average error in original units (passengers); easy to communicate to non-technical stakeholders |
| **RMSE** | √(mean((actual − forecast)²)) | Penalises large errors; sensitive to outliers from events or data quality issues |
| **MAPE** | mean(\|actual − forecast\| / actual) × 100 | Percentage error; enables cross-corridor comparison regardless of route size |
| **sMAPE** | mean(2 × \|actual − forecast\| / (\|actual\| + \|forecast\|)) × 100 | Symmetric version of MAPE; avoids division-by-zero on near-zero demand periods |

---

## Statistical significance — Diebold–Mariano test

Reporting that "XGBoost has lower RMSE than SARIMA" is a descriptive statement. The **Diebold–Mariano (DM) test** answers whether the difference is *statistically significant*:

**Null hypothesis:** The two models have equal predictive accuracy.

The test uses the loss differential series `d_t = L(e1_t) − L(e2_t)` (where L is a loss function such as squared error) and tests whether `E[d_t] = 0` using a HAC-corrected t-statistic.

DM tests are applied for every pairwise comparison between the developed model and each baseline/candidate, for each horizon and each metric.

---

## Robustness analysis

Performance is disaggregated across conditions that are operationally meaningful:

| Dimension | Sub-groups |
|---|---|
| Data quality | Full AFC coverage vs proxy-only corridors |
| Day type | Weekday vs weekend vs public holiday |
| Time of day | Peak (07:00–09:00, 17:00–19:00) vs off-peak |
| Special events | Vesak, New Year, Eid, school-term transitions |
| Forecast horizon | 1h, 6h, 24h, 7d, 30d |
| Corridor type | Urban (Colombo), suburban, inter-provincial |

---

## Error analysis

After evaluation, the residuals are examined to identify *systematic* failures:

- **Bias** — does the model consistently over- or under-forecast at specific times?
- **Event blindness** — does the model fail to capture the demand effect of festivals or strikes that were not in the training data?
- **Spatial patterns in errors** — are errors concentrated on particular stop types or locations?
- **Horizon decay** — how does accuracy degrade as the forecast horizon increases?

Findings from error analysis feed directly into the documented limitations and future work recommendations.

---

## Global dataset evaluation

The developed model is evaluated on publicly available international transit benchmarks to:

1. Assess generalisability beyond the Sri Lankan context
2. Enable comparison with results reported in the literature (Toqué et al. 2017; Ma et al. 2019)

Specific datasets will be confirmed during Phase 3 based on availability and comparability of format.
